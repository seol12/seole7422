const withBundelAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  
});
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');


module.exports = withBundelAnalyzer ( {
  webpack(config){
  const produc = process.env.NODE_ENV === 'production';

  const plugins =[
      ...config.plugins,
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/),
  ];
  if(produc){
      plugins.push( new CompressionPlugin())
  }
  
  config.module.rules.push({
    test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
    use:[{
        loader: "url-loader",
        options:{
            limit:10000,
            fallback: "file-loader",
            name: "static/[name].[ext]",
            esModule: false,
         
        },
    }],
  });

  return {
      ...config,
      mode: produc ? 'production' : 'development',
      devtool: produc  ? 'hidden-source-map' : 'eval',
      module:{
      ...config.module,
      
    
      },
      plugins,

  }
},

});
