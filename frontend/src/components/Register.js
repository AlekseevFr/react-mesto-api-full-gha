import { useState } from 'react';
import {Link} from 'react-router-dom';

function Register({onSubmit}) {
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');

function handleEmailChange (e) {
  setEmail(e.target.value);
}
function handlePasswordChange (e) {
  setPassword(e.target.value);
}
function handleSubmit(e) {
  e.preventDefault();
  onSubmit({email, password});
}
  return (
    <div className="auth">
      <h2 className="auth__title">Регистрация</h2>
      <form onSubmit={handleSubmit} className="auth__form">
        <input value={email} onChange={handleEmailChange} type="email" className="auth__input" placeholder="Email"/>
        <input value={password} onChange={handlePasswordChange} type="password" className="auth__input" placeholder="Пароль"/>
        <button type="submit" className="auth__submit-button">Зарегестрироваться</button>
      </form>
      <p className="auth__redirect">Уже зарегистрированы?
        <Link className="auth__sign" to="/sign-in"> Войти</Link>
      </p>
    </div>
  )
}
export default Register;
