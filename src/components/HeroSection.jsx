import "../styles/HeroSection.css"
import heroImg from "../assets/hero-img.png"
function HeroSection() {
  return (
    <div className="izquierda">

      {/* Texto abajo izquierda */}
      <div className="hero-texto">
        <p className="slogan">
          Explora lo que{" "}
          <span className="slogan-azul">más te gusta.</span>
        </p>
      </div>

      {/* Imagen centrada */}
      <img src={heroImg} alt="Facebook features" className="hero-img" />

    </div>
  )
}
export default HeroSection;