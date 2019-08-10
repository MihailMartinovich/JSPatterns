class HTTP {
  constructor(baseUsrl){
    this._baseUrl = baseUsrl;
  }

  get baseUrl() {
    return this._baseUrl;
  }

  get(url){
    console.log(`GET: ${this.baseUrl + url}`);
    return {};
  }

  post(url, options){
    console.log(`POST: ${this.baseUrl + url}`, options);
  }
}

export default HTTP;