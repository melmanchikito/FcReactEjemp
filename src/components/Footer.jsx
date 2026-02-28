import "../styles/Footer.css"

function Footer() {
  const idiomas = [
    "Español", "English (US)", "Italiano",
    "Français (France)", "Português (Brasil)",
    "Deutsch", "中文(简体)", "Más idiomas...",
  ]

  return (
    <footer className="footer">
      {idiomas.map((idioma) => (
        <a key={idioma} href="#">{idioma}</a>
      ))}
    </footer>
  )
}

export default Footer