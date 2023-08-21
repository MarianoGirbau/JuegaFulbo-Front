import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { UsuariosContext } from "../context/UsuariosContext";
import { useContext } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Login.css";

// actualizar en true sino por defecto agrega
export default function ModalActualizar({ id, show, handleClose, actualizar }) {
  const { usuarios, updateUsuario, addUsuarios } = useContext(UsuariosContext);
  const usuario = usuarios.find((usuario) => usuario._id === id);
  const [dataUser, setDataUser] = useState({
    nombre: "",
    apellido: "",
    email: "",
    rol: "",
  });
  useEffect(() => {
    if (usuario) {
      setDataUser({
        _id: usuario._id,
        password: usuario.password,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        email: usuario.email,
        rol: usuario.rol,
      });
    }
  }, [usuario]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleClose();
    if (actualizar) await updateUsuario(dataUser);
    await addUsuarios(dataUser);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setDataUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} className="modalFondo">
        <Modal.Body>
          <Modal.Header closeButton></Modal.Header>
          <section className="container-login">
            <Form id="form-registrooo" onSubmit={handleSubmit}>
              <Form.Group className="mb-2">
                <Form.Label className="gruppoFont">Nombre</Form.Label>
                <Form.Control
                  type="text"
                  id="nombre"
                  className="custom-form-control custom-bg-dark"
                  name="nombre"
                  value={dataUser.nombre}
                  onChange={(e) => handleChange(e)}
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
                  name="apellido"
                  value={dataUser.apellido}
                  onChange={(e) => handleChange(e)}
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
                  // pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                  placeholder="user@gmail.com"
                  minLength={10}
                  maxLength={30}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </Form.Group>
              {!actualizar && (
                <>
                  <Form.Group className="mb-2">
                    <Form.Label className="gruppoFont">Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      id="password"
                      className="custom-form-control custom-bg-dark"
                      minLength={8}
                      maxLength={30}
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
                      className="custom-form-control custom-bg-dark"
                      minLength={8}
                      maxLength={30}
                      name="confirmPassword"
                      placeholder="Ingrese nuevamente su contraseña"
                      value={dataUser.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </>
              )}
              <Form.Group className="mb-2">
                <Form.Label className="gruppoFont">Rol</Form.Label>
                <Form.Control
                  as="select" // Utilizamos el componente select
                  id="rol"
                  className="custom-form-control custom-bg-dark"
                  name="rol"
                  value={dataUser.rol}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona un rol...</option>
                  <option value="admin">Admin</option>
                  <option value="usuario">Usuario</option>
                </Form.Control>
              </Form.Group>
              <Button
                variant="black"
                id="botonLog"
                type="submit"
                className="w-100"
                onClick={handleSubmit}
              >
                <h4 className="m-0 py-3">Actualizar</h4>
              </Button>
            </Form>
          </section>
        </Modal.Body>
      </Modal>
    </>
  );
}
