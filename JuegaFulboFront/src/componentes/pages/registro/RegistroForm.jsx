import { useState } from "react";
import "./RegistroForm.css";
import { Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { UsuariosContext } from "../../../context/UsuariosContext";
import { useContext } from "react";

const RegistroForm = () => {
  const { addUsuarios, usuarios } = useContext(UsuariosContext);
  const [dataUser, setDataUser] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    confirmPassword: "",
    rol: "usuario",
  });
  const [passwords, setPasswords] = useState(true);
  const [emails, setEmails] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setDataUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("antes", dataUser);

    const emails = usuarios.some((usuario) => usuario.email === dataUser.email);

    if (emails) {
      setEmails(true);
    } else if (dataUser.password === dataUser.confirmPassword) {
      // Contraseñas coinciden
      setPasswords(true);

      try {
        addUsuarios(dataUser);
        setDataUser({
          nombre: "",
          apellido: "",
          email: "",
          password: "",
          confirmPassword: "",
          rol: "usuario",
        });
        window.location.href = "/";
      } catch (error) {
        console.log(error);
      }
    } else {
      // Contraseñas no coinciden
      setPasswords(false);
    }
  };

  return (
    <>
      <div className="bg-pagina-principal">
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
                    name="nombre"
                    value={dataUser.name}
                    onChange={(e) => handleChange(e)}
                    pattern="^[a-zA-ZÀ-ÿ\s]{1,40}$"
                    minLength={3}
                    maxLength={30}
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
                    pattern="^[a-zA-ZÀ-ÿ\s]{1,40}$"
                    minLength={3}
                    maxLength={30}
                    placeholder="Ingrese su apellido"
                    name="apellido"
                    value={dataUser.apellido}
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
                    name="email"
                    value={dataUser.email}
                    // pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
                    // "
                    minLength={4}
                    maxLength={30}
                    placeholder="Ingrese su email"
                    onChange={handleChange}
                    required
                  />
                  {emails && (
                    <p className="error-message">
                      ¡El correo electrónico ya existe!
                    </p>
                  )}
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label className="gruppoFont">Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    id="password"
                    className="custom-form-control custom-bg-dark"
                    minLength={6}
                    maxLength={15}
                    name="password"
                    placeholder="Ingrese su contraseña"
                    value={dataUser.password}
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
                    className={` custom-form-control custom-bg-dark`}
                    minLength={6}
                    maxLength={15}
                    name="confirmPassword"
                    placeholder="Ingrese nuevamente su contraseña"
                    value={dataUser.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                  {!passwords && (
                    <p className="password-">Las contraseñas no coinciden.</p>
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
      </div>
    </>
  );
};

export default RegistroForm;
