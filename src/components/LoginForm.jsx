import "../styles/LoginForm.css"

function LoginForm() {
  return (
    <div className="caja">
      <h2 className="caja-titulo">Iniciar sesión en Facebook</h2>

      <input
        className="caja-input"
        type="text"
        placeholder="Correo electrónico o número de celular"
      />

      <input
        className="caja-input"
        type="password"
        placeholder="Contraseña"
      />

      <button className="btn-login">Iniciar sesión</button>

      <a href="#" className="link-olvide">¿Olvidaste tu contraseña?</a>

      <hr className="separador-form" />

      <button className="btn-crear">Crear cuenta nueva</button>

      <div className="meta-logo">
        <span>ꓤ</span> Meta
      </div>
    </div>
  )
}

export default LoginForm