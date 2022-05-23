import { basePath, apiVersion } from "./config"
const url = `${basePath}/${apiVersion}/users/`

export function signUpApi(data) {
  console.log(url)
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }

  return fetch (url + 'signup', params).then((response) => {
    return response.json()
  })
}

export function logInApi(data) {
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }

  return fetch(url + 'login', params).then((response) => {
    return response.json()
  })
}
