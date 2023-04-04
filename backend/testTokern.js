const jwt = require('jsonwebtoken');

const YOUR_JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDI1ZGQ4MjUxNjVkNTAwNTkzN2MzNGEiLCJpYXQiOjE2ODA2Mzg4MjcsImV4cCI6MTY4MTI0MzYyN30.IxQqWkFd7W2LRsfJaXUB6VkdQUtrZME8lo0s__r4cQY'; // вставьте сюда JWT, который вернул публичный сервер
const SECRET_KEY_DEV = 'super-strong-secret'; // вставьте сюда секретный ключ для разработки из кода
try {
  jwt.verify(YOUR_JWT, SECRET_KEY_DEV);
  console.log('\x1b[31m%s\x1b[0m', `
Надо исправить. В продакшне используется тот же
секретный ключ, что и в режиме разработки.
`);
} catch (err) {
  if (err.name === 'JsonWebTokenError' && err.message === 'invalid signature') {
    console.log(
      '\x1b[32m%s\x1b[0m',
      'Всё в порядке. Секретные ключи отличаются',
    );
  } else {
    console.log(
      '\x1b[33m%s\x1b[0m',
      'Что-то не так',
      err,
    );
  }
}
