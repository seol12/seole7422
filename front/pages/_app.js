import React from 'react';
import Layout from '../components/Layout';
import { Provider, useDispatch} from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { createStore, compose, applyMiddleware} from 'redux';
import reducer from '../reducers';
import rootSaga from '../sagas';
import withReduxSaga from 'next-redux-saga';
import Helmet from 'react-helmet';
import createSagaMiddleware from 'redux-saga';
import { LOAD_USER_REQUEST } from '../reducers/user';
import axios from 'axios';
import { Container} from 'next/app';


const SeoleCat = ({ Component, store, pageProps}) => {
  
  return (
    <Container>
      <Provider store={store}>
      <Helmet
        title="seolcat"
        htmlAttributes={{lang: 'ko'}}
        meta={[{
          charSet: "UTF-8",
          }, {
            name: 'viewport',
            content:'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover',
          }, {
            'http-equiv': 'X-UA-Compatible',
            content: 'IE=edge',
          }, {
            name: 'description', 
            content: 'seolcat',
          }, {
            name: 'og:description',
            content: 'seolcat',
          }, {
            property: 'og:type',
            content: 'website',
          }, {
            name: 'og:title',
            content: 'seolcat',
          }, {
            property: 'og:image',
            content: 'http://seolcat.com/favicon.ico', 
        }]}
        link={[{
          rel: 'shortcut icon', href: '/favicon.ico',
          }, {
            rel: 'stylesheet',
            href:"https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
          }, {
            rel:'stylesheet',
            href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
          }, {
            rel: 'stylesheet',
            href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
        }]}
      />
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </Provider>
    </Container>
  );
};

SeoleCat.getInitialProps = async (context) => {
  
  const { ctx, Component } = context;
  let pageProps = {};
  const state = ctx.store.getState();
  const cookie = ctx.isServer ? ctx.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (ctx.isServer && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  if (!state.user.me) {
    ctx.store.dispatch({
      type: LOAD_USER_REQUEST,
    });
  }
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx) || {};
  }
  return { pageProps };

};

const configureStore = (initialState, options) => {
    
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : compose(
      applyMiddleware(...middlewares),
      !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    );
  const store = createStore(reducer, initialState, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
  
}


export default withRedux(configureStore)(withReduxSaga(SeoleCat));