import { React, useState, useEffect} from "react";
import { Form, Button, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { crearAvion, mostrarAvion } from "../../../api/avion"
import { useParams } from 'react-router-dom'

export default function FormAviones() {
  let { id } = useParams();
  
  const getAvion = async (id) => {
    if (id) {
      let result = await mostrarAvion(id)
      return result.data
    }
  }
  const [avion, setAvion] = useState(()=>{
    return getAvion(id)
  })
  const [inputs, setInputs] = useState({
    modelo: avion? avion.modelo : "",
    matricula:  avion? avion.matricula : "",
    pais:  avion? avion.pais : "",
    num_asientos:  avion? avion.num_asientos : "",
    año:  avion? avion.año : "",
  })

  const createAvion = async (e) => {
    e.preventDefault()
    await crearAvion(inputs)
  }

  const setValues = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value})
  }

  return (
    <Form style={{width: "500px",}} onChange={ setValues }>
      <Form.Item>
        <Input
          prefix={
            <UserOutlined />
          }
          type="text"
          name="modelo"
          placeholder="Modelo"
          value = { inputs.modelo }
          required
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={
            <UserOutlined />
          }
          type="text"
          name="matricula"
          placeholder="Matrícula"
          value = { inputs.matricula }
          required
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={
            <UserOutlined />
          }
          type="text"
          name="pais"
          placeholder="País"
          value = { inputs.pais }
          required
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={
            <UserOutlined />
          }
          type="number"
          name="num_asientos"
          placeholder="Número de asientos"
          required
          value = { inputs.num_asientos }
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={
            <UserOutlined />
          }
          type="number"
          name="año"
          placeholder="Año"
          required
          value= { inputs.año }
        />
      </Form.Item>
      <Form.Item>
        <Button onClick={createAvion} htmlType="submit" type="submit">
          {`${avion? "Editar Avion": "Crear Avion"}`}
        </Button>
      </Form.Item>
    </Form>
  );
}