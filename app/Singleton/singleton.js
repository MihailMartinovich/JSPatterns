class Sun {
  constructor(data) {
    if(Sun.instance) {
      return Sun.instance;
    }

    const _size = data;
    this.getSize = () => {
      return _size;
    }

    Sun.instance = this;

    return this;
  }
}

Sun.instance = null;

export default Sun;