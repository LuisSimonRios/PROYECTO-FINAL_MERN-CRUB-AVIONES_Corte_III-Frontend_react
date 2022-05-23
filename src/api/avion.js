import { basePath, apiVersion } from "./config"
const url = `${basePath}/${apiVersion}/aviones/avion`

export function crearAvion(data) {
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }

  return fetch(url, params).then((response) => {
    return response.json()
  })
}

export function listarAviones() {
  const params = {
    method: "GET",
  }

  return fetch(url, params).then((response) => {
    return response.json()
  })
}

export function mostrarAvion(id) {
  const params = {
    method: "GET",
  }
  return fetch(url + '/' + id, params).then((response) => {
    return response.json()
  })
}

export function editarAvion(data) {
  const params = {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }

  return fetch(url + '/' + data.id, params).then((response) => {
    return response.json()
  })
}

export function elminarAvion(data) {
  const params = {
    method: "DELETE",
  }

  return fetch(url + '/' + data, params).then((response) => {
    return response.json()
  })
}