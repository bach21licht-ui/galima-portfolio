import brienImg from '../brien.jpg';

function Header() {
  return (
    <div className="header">
      <img src={brienImg} alt="" role="presentation" className="profile-img" />
      <div className="header-text">
        <h1>Brien Azle L. Galima</h1>
        <p className="role">STI Student · BSIT</p>
        <p className="email">bach21licht@gmail.com</p>
        <p className="quote">
          "You have power over your mind – not outside events.
          Realize this, and you will find strength."
          – Marcus Aurelius
        </p>
        <div className="nav-buttons">
          <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} className="btn">About</button>
          <button onClick={() => document.getElementById('education').scrollIntoView({ behavior: 'smooth' })} className="btn">Education</button>
          <button onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })} className="btn">Skills</button>
        </div>
        <button onClick={() => alert('Welcome to my portfolio website!')} className="btn">Click Me</button>
      </div>
    </div>
  );
}

export default Header;