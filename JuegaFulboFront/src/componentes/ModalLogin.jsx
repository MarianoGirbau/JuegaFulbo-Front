import "./Login.css";
import { useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import juegaFulboLogo from "../../public/img/juegaFulboLogo.svg";
import { Modal } from "react-bootstrap";

export function ModalLogin({show, handleClose}) {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usuario === "" || contraseña === "") {
      setError(true);
      return;
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} className="modalFondo">
        <Modal.Body closeButton>
        <Modal.Header closeButton >
        </Modal.Header>
          <section className="container-login">
            <div className="imagen-container">
              <img src={juegaFulboLogo} alt="Mi Imagen SVG" />
            </div>
            <hr className="lineahorizontal" />
            <form className="Formulario" onSubmit={handleSubmit}>
              <h1 className="titulogin1">Iniciar Sesión</h1>
              <div style={{ display: "flex" }}>
                <input
                  className="input_login"
                  type="email"
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                  minLength={10}
                  maxLength={30}
                  placeholder="Correo electrónico"
                  title="Ingresa un correo electrónico válido."
                  required
                />
              </div>

              <div style={{ position: "relative" }}>
                <input
                  className="input_login"
                  type={showPassword ? "text" : "password"}
                  value={contraseña}
                  onChange={(e) => setContraseña(e.target.value)}
                  minLength={8}
                  maxLength={30}
                  placeholder="Contraseña"
                  title="La contraseña debe tener al menos 8 caracteres."
                  required
                />

                <button
                  type="button"
                  onClick={toggleShowPassword}
                  style={{
                    color: "#b6ff1b",
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  {showPassword ? (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  ) : (
                    <FontAwesomeIcon icon={faEye} />
                  )}
                </button>
              </div>

              <a className="cuentalogin" href="">
                ¿Olvidaste tu contraseña?
              </a>
              <button className="botonlogin">Ingresar</button>
              <h4 className="cuentalogin">
                ¿NO TIENES UNA CUENTA?{" "}
                <a className="cuentalogin" href="">
                  Regístrate
                </a>
              </h4>
            </form>
            {error && <p>Todos los campos son obligatorios</p>}
          </section>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalLogin;
