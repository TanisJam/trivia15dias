export default class Request {
  constructor(url) {
    this.url = url;
  }

  async getData(method, body, headers) {
    this.method = method || "GET";
    this.body = body || undefined;
    this.headers = headers || undefined;
    const options = {
      method: this.method,
      body: this.body,
      headers: this.headers,
    };
    const response = await fetch(this.url, options);
    const data = response.json();
    return data;
  }
}
