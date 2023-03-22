import logo from '../images/logo.svg';

function Header(props) {
  return (
    <header className="header">
      <img className="header__logo"
        src={logo}
        alt="Логотип Mesto"/>
        <div className="header__link">{props.children}</div>
    </header>
  )
}
export default Header;
