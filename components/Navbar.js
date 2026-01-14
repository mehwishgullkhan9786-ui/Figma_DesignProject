function Navbar() {
  return (
        <nav className="navbar">
             <div className="logo">
            <img src="assests/logo.png" alt="" />
          </div>

          <div className="Features">
            <ul>
              <li>Features</li>
              <li>How It Works</li>
              <li>Get Started</li>
            </ul>
          </div>

          <div className="buttons">
            <div className="signimg">
              <img src="assests/flag.png" alt="" />
            </div>
            <button>Sign In</button>
          </div>
    </nav>
  );
        }

        export default Navbar;