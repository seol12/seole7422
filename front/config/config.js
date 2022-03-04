const BackendServerPort = process.env.NODE_ENV === 'production' ? 'http://seolcat.com:1029' : 'http://localhost:1228';


export { BackendServerPort};