class Api {
  constructor({baseUrl, headers}) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }
  getUserInfo() {
    return fetch(`${
      this.baseUrl
    }/users/me`, {headers: {
      ...this.headers, authorization: `Bearer ${localStorage.getItem('token')}`
      }}).then(this._responseTransform)
  }
  getInitialCards() {
    return fetch(`${
      this.baseUrl
    }/cards`, {headers: {
      ...this.headers, authorization: `Bearer ${localStorage.getItem('token')}`
      }}).then(this._responseTransform)
  }
  editUser(item) {
    return fetch(`${
      this.baseUrl
    }/users/me`, {
      method: 'PATCH',
      headers:{
        ...this.headers, authorization: `Bearer ${localStorage.getItem('token')}`
        },
      body: JSON.stringify(
        {name: item.name, about: item.about}
      )
    }).then(this._responseTransform)
  }
  createNewCard(el) {
    return fetch(`${
      this.baseUrl
    }/cards`, {
      method: 'POST',
      headers: {
        ...this.headers, authorization: `Bearer ${localStorage.getItem('token')}`
        },
      body: JSON.stringify(
        {name: el.name, link: el.link}
      )
    }).then(this._responseTransform)
  }
  deleteCard(id) {
    return fetch(`${
      this.baseUrl
    }/cards/${id}`, {
      method: 'DELETE',
      headers: {
        ...this.headers, authorization: `Bearer ${localStorage.getItem('token')}`
        },
    }).then(this._responseTransform)
  }
  likeCard(id) {
    return fetch(`${
      this.baseUrl
    }/cards/${id}/likes`, {
      method: 'PUT',
      headers: {
        ...this.headers, authorization: `Bearer ${localStorage.getItem('token')}`
        },
    }).then(this._responseTransform)
  }

  unlikeCard(id) {
    return fetch(`${
      this.baseUrl
    }/cards/${id}/likes`, {
      method: 'DELETE',
      headers: {
        ...this.headers, authorization: `Bearer ${localStorage.getItem('token')}`
        },
    }).then(this._responseTransform)
  }
  changeLikeCardStatus(id, isLiked) {
    if (isLiked) {
      return this.unlikeCard(id);
    } else {
      return this.likeCard(id);
    }
  }

  changeAvatar(avatar) {
    return fetch(`${
      this.baseUrl
    }/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        ...this.headers, authorization: `Bearer ${localStorage.getItem('token')}`
        },
      body: JSON.stringify({avatar})
    }).then(this._responseTransform)
  }
  _responseTransform(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${
      res.status
    }`);
  }
}

const api = new Api({
  baseUrl: 'https://api.alekseevfr.students.nomoredomains.work',
  headers: {
    'Content-Type': 'application/json'
  }
});
export default api
