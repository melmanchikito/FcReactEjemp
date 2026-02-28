import { useState } from "react"

export function useLoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !password) {
      setError("Por favor ingresa tu correo y contraseña")
      return
    }

    setError("")
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setLoading(false)
    alert(`Bienvenido: ${email}`)
  }

  return { email, setEmail, password, setPassword, error, loading, handleSubmit }
}