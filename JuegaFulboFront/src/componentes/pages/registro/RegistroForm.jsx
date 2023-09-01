import { useState } from "react";
import "./RegistroForm.css";
import { Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { UsuariosContext } from "../../../context/UsuariosContext";
import { useContext } from "react";
import Swal from "sweetalert2";

const RegistroForm = () => {
  const {addUsuarios} = useContext(UsuariosContext);
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
    setDataUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (dataUser.password === dataUser.confirmPassword) {
      // Contraseñas coinciden
      setPasswords(true);
    } else {
      // Contraseñas no coinciden
      setPasswords(false);
    }
    if (passwords) {
      try {
        var response = await addUsuarios(dataUser);
        
        if (!response) {
          setDataUser({
            nombre: "",
            apellido: "",
            email: "",
            password: "",
            confirmPassword: "",
            rol: "usuario",
          });
          window.location.href = "/";
        }
      } catch (error) {
        if (error.response.status == 409) {
          setEmails(true)
        }
        else{
          console.error(error)
        }
      }
        
    }
  };

  return (
    <>
      <div className="bg-pagina-principal">
        <main className="my-5 d-flex flex-column align-items-center justify-content-center mx-4">
          <Container
            fluid
            className="custom-container row borderCont overflow-hidden p-0"
          >
            <Col xs={12} md={7} className="contIqz pb-2 px-5 ">
              <div className="volverAtras d-flex gap-3 align-items-center pt-3">
                <a className="d-flex gap-2 align-items-center" href="/">
                  <img src="/img/flechaIzq.svg" alt="" />
                  <h5 className="m-0">Volver al Inicio</h5>
                </a>
              </div>
              <hr />
              <h4 className="titulo-form">Formulario de registro</h4>

              <Form id="form-registrooo" onSubmit={handleSubmit}>
                <Form.Group className="mb-2">
                  <Form.Label className="gruppoFont">Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    id="nombre"
                    className="custom-form-control custom-bg-dark placeholder-registro"
                    name="nombre"
                    value={dataUser.nombre}
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
                    className="custom-form-control custom-bg-dark placeholder-registro"
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
                    className="custom-form-control custom-bg-dark placeholder-registro"
                    name="email"
                    value={dataUser.email}
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
                    className="custom-form-control custom-bg-dark placeholder-registro"
                    minLength={8}
                    maxLength={15}
                    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
                    title="Una mayuscula, una minuscula y números. Tamaño mínimo: 8. Tamaño máximo: 20"
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
                    className={` custom-form-control custom-bg-dark placeholder-registro`}
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

                <div className="my-4 pruebaboton">
                  <Button
                    variant="black"
                    id="botonLog"
                    type="submit"
                    className="w-100 boton-enviar-registro"
                  >
                    <h4 className="m-0 py-3 enviar-text">ENVIAR</h4>
                  </Button>
                </div>
              </Form>
            </Col>

            <Col
              xs={12}
              sm={0}
              md={5}
              className="contDer overflow-hidden d-none d-sm-block placeholder-registro"
            >
            </Col>
          </Container>
        </main>
      </div>
    </>
  );
};

export default RegistroForm;
