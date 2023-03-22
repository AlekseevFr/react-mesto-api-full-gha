class UserApi {
  constructor({baseUrl, headers}) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }
  login(data) {
    return fetch(`${
      this.baseUrl
    }/signin`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data)
    }).then(this._responseTransform)
  }
  register(data) {
    return fetch(`${
      this.baseUrl
    }/signup`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data)
    }).then(this._responseTransform)

  }
  checkToken(token) {
    return fetch(`${
      this.baseUrl
    }/users/me`, {
      method: 'GET',
      headers: {
      ...this.headers, authorization: `Bearer ${token}`
      },
    }).then(this._responseTransform)
  }
  _responseTransform(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  }


const userapi = new UserApi({
  baseUrl: 'https://auth.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json'
  }
});
export default userapi
