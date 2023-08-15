import { useState } from "react";
import "./RegistroForm.css";
import fulboRegistro from "/img/fulboRegistro.jpg";
import { Container, Row, Col } from "react-bootstrap";
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
        <Container id="container-registro">
          <Row>
            <Col sm={12} md={12} lg={7}>
              <Form id="form-registro" onSubmit={handleSubmit}>
                <h5 className="titulo_registro">Formulario de registro</h5>
                <Form.Group>
                  <Form.Label className="subtitulos_registro">
                    Nombre
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="nombre"
                    value={nombre}
                    minLength={8}
                    maxLength={15}
                    placeholder="Ingrese su nombre"
                    onChange={(e) => setNombre(e.target.value)}
                    required
                  />
                  {errors.nombre && <span>{errors.nombre}</span>}
                </Form.Group>

                <Form.Group className="">
                  <Form.Label className="subtitulos_registro">
                    Apellido
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="apellido"
                    minLength={8}
                    maxLength={15}
                    placeholder="Ingrese su apellido"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    required
                  />
                  {errors.apellido && <span>{errors.apellido}</span>}
                </Form.Group>
                <Form.Group>
                  <Form.Label className="subtitulos_registro">Email</Form.Label>
                  <Form.Control
                    type="email"
                    id="email"
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
                <Form.Group>
                  <Form.Label className="subtitulos_registro">
                    Contraseña
                  </Form.Label>
                  <Form.Control
                    type="password"
                    id="password"
                    value={password}
                    minLength={8}
                    maxLength={30}
                    placeholder="Ingrese su contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {errors.password && <span>{errors.password}</span>}
                </Form.Group>
                <Form.Group>
                  <Form.Label className="subtitulos_registro">
                    Confirmar contraseña
                  </Form.Label>
                  <Form.Control
                    type="password"
                    id="confirmPassword"
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

                <Button variant="black" id="botonLog" type="submit">
                  <h4>ENVIAR</h4>
                </Button>
              </Form>
            </Col>
            <Col lg={5} className="d-none d-lg-block">
              <img className="imgRegistro" src={fulboRegistro} alt="" />
            </Col>
          </Row>
        </Container>
    </>
  );
};

export default RegistroForm;
