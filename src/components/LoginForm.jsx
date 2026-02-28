import { useLoginForm } from "../hooks/useLoginForm"
import "../styles/LoginForm.css"

function LoginForm() {
  const {
    email, setEmail,
    password, setPassword,
    error, loading,
    handleSubmit
  } = useLoginForm()

  return (
    <div className="caja">

      <h2 className="caja-titulo">Iniciar sesión en Facebook</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="caja-input"
          type="text"
          placeholder="Correo electrónico o número de celular"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="caja-input"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Solo muestra el error si existe */}
        {error && <p className="caja-error">{error}</p>}

        <button
          type="submit"
          className="btn-login"
          disabled={loading}
        >
          {loading ? "Iniciando..." : "Iniciar sesión"}
        </button>
      </form>

      <a href="#" className="link-olvide">
        ¿Olvidaste tu contraseña?
      </a>

      <hr className="separador-form" />

      <button type="button" className="btn-crear">
        Crear cuenta nueva
      </button>

    </div>
  )
}

export default LoginForm