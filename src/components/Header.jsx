import facebookLogo from "../assets/facebook-logo.svg"
import "../styles/Header.css"

function Header() {
  return (
    <header className="header">
      <img src={facebookLogo} alt="Facebook logo" width="40" height="40" />
    </header>
  )
}

export default Header