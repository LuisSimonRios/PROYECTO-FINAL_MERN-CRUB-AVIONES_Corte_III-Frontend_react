import {React, useState} from "react";
import { Form, Button, Input, notification } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { emailValidation, minLengthValidation } from "../../../validations/FormValidations"
import { Navigate } from "react-router-dom"
import { logInApi } from "../../../api/user.js"
import "./login.scss";

export default function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  })
  const [formValid, setFormValid] = useState({
    email: false,
    password: false,
  })

  const changeForm = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }

  const inputValidation = (e) => {
    const { type, name } = e.target

    if (type === "email") {
      setFormValid({ ...formValid, [name]: emailValidation(e.target) })
    }
    if (type === "password") {
      setFormValid({ ...formValid, [name]: minLengthValidation(e.target, 6) })
    }
  }

  const login = async (e) => {
    e.preventDefault()
    console.log("Estoy en login")
    const emailVal = inputs.email
    const passwordVal = inputs.password
    if (!emailVal ||  !passwordVal) {
      notification["error"]({
        message: "Llenar todos los campos"
      })
    } else {
      const result = await logInApi(inputs)
      console.log(result)
      if (!result.data) {
        notification["error"]({
          message: result.message
        })
      } else {
        notification["success"]({
          message: result.message
        });
        localStorage.setItem("user_id", result.data._id);
        <Navigate to='/admin/menu-web' replace={true} />
      }
    }
  }

  return (
    <Form className="login-form" onChange={ changeForm }>
      <Form.Item>
        <Input
         prefix={
          <UserOutlined />
        }
          type="email"
          name="email"
          placeholder="Correo electronico"
          onChange={ inputValidation }
          value={ inputs.email }
          className="login-form__input"
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={
            <UserOutlined />
          }
          type="password"
          name="password"
          placeholder="Contraseña"
          onChange={ inputValidation }
          className="login-form__input"
          value={ inputs.password }
        />
      </Form.Item>
      <Form.Item>
        <Button onClick={ login } htmlType="submit" className="login-form__button">
          Entrar
        </Button>
      </Form.Item>
    </Form>
  );
}