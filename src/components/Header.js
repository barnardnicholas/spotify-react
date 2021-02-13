import '../styles/header.scss';

function Header(props) {
  return (
    <header className="header">
      <div className="logo">Spotichip</div>
      {props.children}
    </header>
  );
}

export default Header;
