import { useState } from "react";
import "./RegistroForm.css";
import { Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const RegistroForm = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Nombre:", nombre);
      console.log("Apellido:", apellido);
      console.log("Email:", email);
      console.log("Contraseña:", password);
      console.log("Confirmar Contraseña:", confirmPassword);

      setNombre("");
      setApellido("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!nombre) {
      errors.nombre = "El nombre es obligatorio";
    }
    if (!apellido) {
      errors.apellido = "El apellido es obligatorio";
    }
    if (!email) {
      errors.email = "El correo electrónico es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "El correo electrónico no es válido";
    }
    if (!password) {
      errors.password = "La contraseña es obligatoria";
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = "Las contraseñas no coinciden";
    }
    return errors;
  };

  return (
    <>
      <main className="my-5 d-flex flex-column align-items-center justify-content-center mx-4">
        <div className="logoFulbo d-block d-md-none">
          <img src="/img/LogoJuegaFulbo.svg" alt="" className="pb-5" />
        </div>
        <Container fluid className="custom-container row borderCont overflow-hidden p-0">
          <Col xs={12} md={7} className="contIqz pb-2 px-5 ">
            <div className="volverAtras d-flex gap-3 align-items-center pt-3">
              <img src="/img/flechaIzq.svg" alt="" />
              <h5>Volver atrás</h5>
            </div>
            <hr />
            <h4>Formulario de registro</h4>

            <Form id="form-registrooo" onSubmit={handleSubmit}>
              <Form.Group className="mb-2">
                <Form.Label className="gruppoFont">Nombre</Form.Label>
                <Form.Control
                  type="text"
                  id="nombre"
                  className="custom-form-control custom-bg-dark"
                  value={nombre}
                  minLength={8}
                  maxLength={15}
                  placeholder="Ingrese su nombre"
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
                {errors.nombre && <span>{errors.nombre}</span>}
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
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                  required
                />
                {errors.apellido && <span>{errors.apellido}</span>}
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label className="gruppoFont">
                  Correo Electrónico
                </Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  className="custom-form-control custom-bg-dark"
                  value={email}
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                  minLength={10}
                  maxLength={30}
                  placeholder="Ingrese su email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {errors.email && <span>{errors.email}</span>}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {errors.confirmPassword && (
                  <span>{errors.confirmPassword}</span>
                )}
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label className="gruppoFont"></Form.Label>
                <Form.Control
                  type="password"
                  id="confirmPassword"
                  className="custom-form-control custom-bg-dark"
                  minLength={8}
                  maxLength={30}
                  placeholder="Ingrese nuevamente su contraseña"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                {errors.confirmPassword && (
                  <span>{errors.confirmPassword}</span>
                )}
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
    </>
  );
};

export default RegistroForm;