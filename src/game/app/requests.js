export default class Request {
  constructor(url) {
    this.url = url;
  }

  async getData(obj) {
    this.method = obj.method || "GET";
    this.body = obj.body || undefined;
    this.headers = obj.headers || undefined;
    this.params = obj.params || '';
    const options = {
      method: this.method,
      body: this.body,
      headers: this.headers,
    };
    const response = await fetch(this.url + this.params, options);
    const data = response.json();
    return data;
  }
}
