import facebookLogo from "../assets/facebook-logo.svg"
import "../styles/Header.css"

function Header() {
  return (
    <header className="header">
      <img src={facebookLogo} alt="Facebook logo" className="header-logo" />
    </header>
  )
}

export default Header