import { Handler, HTTP } from './Classes/index';

const runProxyExample = () => {
  const http = new Proxy(new HTTP('/baseUrl/'), Handler);

  http.get('url');
  console.log('get function is: ', http.get);
}

export default runProxyExample;