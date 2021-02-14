import '../styles/header.scss';

function Header(props) {
  return (
    <header className="header">
      <div className="logo">
        <a
          href="https://open.spotify.com/track/4uLU6hMCjMI75M1A2tKUQC?si=FxFr3EW-T6qLU9RwXfsrBA"
          title="Easter Egg"
          target="_blank"
          className="easter-egg"
        >
          &nbsp;
        </a>
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
