import { useState } from 'react';

function Login({onSubmit}) {
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
      <h2 className="auth__title">Вход</h2>
      <form onSubmit={handleSubmit} className="auth__form">
        <input value={email} onChange={handleEmailChange} type="email" className="auth__input" placeholder="Email"/>
        <input value={password}  onChange={handlePasswordChange} type="password" className="auth__input" placeholder="Пароль"/>
        <button type="submit" className="auth__submit-button">Войти</button>
      </form>
    </div>
  );
}

export default Login;
