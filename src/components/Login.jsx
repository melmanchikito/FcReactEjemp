import Header from "./Header"
import HeroSection from "./HeroSection"
import LoginForm from "./LoginForm"
import Footer from "./Footer"
import "../styles/Login.css"

function Login() {
  return (
    <>
      {/* Logo arriba */}
      <Header />

      {/* Dos columnas: hero izquierda, form derecha */}
      <div className="pagina">
        <HeroSection />
        <div className="separador-vertical" />
        <LoginForm />
      </div>

      {/* Idiomas abajo */}
      <Footer />
    </>
  )
}

export default Login;