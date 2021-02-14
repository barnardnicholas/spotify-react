import '../styles/header.scss';

function Header(props) {
  return (
    <header className="header">
      <div className="logo">
        Nick's Spotichip -{' '}
        <a
          href="https://github.com/barnardnicholas/spotify-react"
          title="View repo in Github"
          target="_blank"
        >
          View Github repo
        </a>
      </div>
      {props.children}
    </header>
  );
}

export default Header;
