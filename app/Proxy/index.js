import { Handler, HTTP } from './Classes/index';

const runProxyExample = () => {
  const http = new HTTP('/baseUrl/');
  http.get = new Proxy(http.get, Handler);
  
  http.get('url');
  console.log('get function is: ', http.get);
}

export default runProxyExample;