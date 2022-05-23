import { React, useState} from "react";
import { Form, Button, Input, Checkbox, notification } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import { signUpApi } from "../../../api/user.js"
import "./Register.scss"
import { emailValidation, minLengthValidation } from "../../../validations/FormValidations"

export default function Register() {

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    repeatedPassword: "",
    privacyPolicy: false
  })
  
  const [formValid, setFormValid] = useState({
    email: false,
    password: false,
    repeatedPassword: false,
    privacyPolicy: false
  })

  const changeForm = (e) => {
    if (e.target.name === "privacyPolicy") {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.checked
      })
    } else{
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value
      })
    }
  }

  const inputValidation = (e) => {
    const { type, name } = e.target

    if (type === "email") {
      setFormValid({ ...formValid, [name]: emailValidation(e.target) })
    }
    if (type === "password") {
      setFormValid({ ...formValid, [name]: minLengthValidation(e.target, 6) })
    }
    if (type === "checkbox") {
      setFormValid({ ...formValid, [name]: e.target.checked })
    }
  }
  
  const register = async (e) => {
    e.preventDefault()
    console.log("Estoy en register")
    const emailVal = inputs.email
    const passwordVal = inputs.password
    const repeatedPasswordVal = inputs.repeatedPassword
    const privacyPolicy = inputs.privacyPolicy
    if (!emailVal ||  !passwordVal || !repeatedPasswordVal || !privacyPolicy) {
      notification["error"]({
        message: "Las contraseñas tienen que ser iguales"
      })
      console.log("Son diferentes")
    } else {
      const result = await signUpApi(inputs)
      console.log(result)
      if (!result.user) {
        notification["error"]({
          message: result.message
        })
      } else {
        notification["success"]({
          message: result.message
        })
        resetForm();
      }
    }
  }

  const resetForm = () => {
    const inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++){
      inputs[i].classList.remove("success");
      inputs[i].classList.remove("error")
    }
    setInputs({
      email: "",
      password: "",
      repeatedPassword: "",
      privacyPolicy: false
    })
    setFormValid({
      email: false,
      password: false,
      repeatedPassword: false,
      privacyPolicy: false
    })
  }
  return (
    <Form className="register-form" onChange={ changeForm }>
      <Form.Item>
        <Input
            prefix      = { < UserOutlined style={{ color: "rgba(0,0,0,.25" }}/>}
            type        = "email"
            name        = "email"
            placeholder = "Correo electrónico"
            className   = "register-form_input"
            onChange={ inputValidation }
            value={ inputs.email }
        />
      </Form.Item>
      <Form.Item>
        <Input
            prefix      = { < LockOutlined style={{ color: "rgba(0,0,0,.25" }}/>}
            type        = "password"
            name        = "password"
            placeholder = "Contraseña"
            className   = "register-form_input"
            onChange={ inputValidation }
            value={ inputs.password }
        />
      </Form.Item>
      <Form.Item>
        <Input
            prefix      = { < LockOutlined style={{ color: "rgba(0,0,0,.25" }}/>}
            type        = "password"
            name        = "repeatedPassword"
            placeholder = "Repetir contraseña"
            className   = "register-form_input"
            onChange={ inputValidation }
            value={ inputs.repeatedPassword }
        />
      </Form.Item>
      <Form.Item>
        <Checkbox name="privacyPolicy" checked={ inputs.privacyPolicy }>
          He leído y acepto la política de privacidad
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button onClick={ register } htmlType="submit" className="login-form_button">
            Crear cuenta
        </Button>
      </Form.Item>
    </Form>
  )
}