import { useState } from "react";
import "./RegistroForm.css";
import { Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Swal from "sweetalert2";

const RegistroForm = () => {
  const [, setDataUser] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    confirmPassword: "",
    rol: "usuario",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const response = axios.post("/registro",);
      console.log(response);
      setDataUser({
        nombre: "",
        apellido: "",
        email: "",
        password: "",
        rol: "usuario",
      });
      Swal.fire({
        icon: "success",
        title: "Usuario registrado",
        showConfirmButton: false,
        timer: 5500,
      });

      window.location.href = "/login";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <body className="bg-pagina-principal">
      
      <main className="my-5 d-flex flex-column align-items-center justify-content-center mx-4">
        <div className="logoFulbo d-block d-md-none">
          <img src="/img/LogoJuegaFulbo.svg" alt="" className="pb-5" />
        </div>
        <Container
          fluid
          className="custom-container row borderCont overflow-hidden p-0"
        >
          <Col xs={12} md={7} className="contIqz pb-2 px-5 ">
            <div className="volverAtras d-flex gap-3 align-items-center pt-3">
              <img src="/img/flechaIzq.svg" alt="" />
              <h5>Volver atrás</h5>
            </div>
            <hr />
            <h4 className="titulo-form">Formulario de registro</h4>

            <Form id="form-registrooo" onSubmit={handleSubmit}>
              <Form.Group className="mb-2">
                <Form.Label className="gruppoFont">Nombre</Form.Label>
                <Form.Control
                  type="text"
                  id="nombre"
                  className="custom-form-control custom-bg-dark"
                  // value={dataUser.nombre}
                  onChange={handleChange}
                  minLength={8}
                  maxLength={15}
                  placeholder="Ingrese su nombre"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label className="gruppoFont">Apellido</Form.Label>
                <Form.Control
                  type="text"
                  id="apellido"
                  className="custom-form-control custom-bg-dark"
                  minLength={8}
                  maxLength={15}
                  placeholder="Ingrese su apellido"
                  // value={dataUser.apellido}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label className="gruppoFont">
                  Correo Electrónico
                </Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  className="custom-form-control custom-bg-dark"
                  // value={dataUser.email}
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                  minLength={10}
                  maxLength={30}
                  placeholder="Ingrese su email"
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label className="gruppoFont">Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  id="password"
                  className="custom-form-control custom-bg-dark"
                  minLength={8}
                  maxLength={30}
                  placeholder="Ingrese su contraseña"
                  // value={dataUser.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label className="gruppoFont">
                  Confirmar contraseña
                </Form.Label>
                <Form.Control
                  type="password"
                  id="confirmPassword"
                  className="custom-form-control custom-bg-dark"
                  minLength={8}
                  maxLength={30}
                  placeholder="Ingrese nuevamente su contraseña"
                  // value={dataUser.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <div className="my-4 bordeBoton">
                <Button
                  variant="black"
                  id="botonLog"
                  type="submit"
                  className="w-100"
                >
                  <h4 className="m-0 py-3">ENVIAR</h4>
                </Button>
              </div>
            </Form>
          </Col>

          <Col
            xs={12}
            sm={0}
            md={5}
            className="contDer overflow-hidden d-none d-sm-block"
          ></Col>
        </Container>
      </main>

      </body>
    </>
  );
};

export default RegistroForm;
