export const login = async (email: string, password: string) => {
  const API_PATH = import.meta.env.VITE_API_PATH
  const response = await fetch(`${API_PATH}/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  })
  console.log(response)
}
