import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import "./contacto.css";
import { Button } from "react-bootstrap";

const Contacto = () => {
  const refForm = useRef();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatEmail(formData.email)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ingresa una dirección de correo electrónico válida.",
      });
      return;
    }

    if (!validaTexto(formData.texto)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "El mensaje contiene caracteres no permitidos.",
      });
      return;
    }

    const serviceId = "service_xoa5gvn";
    const templateId = "template_am23jln";
    const apikey = "lv2I2YINRkFxOE99P";

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apikey)
      .then((result) => {
        console.log(result);

        setFormData({
          username: "",
          email: "",
          message: "",
        });

        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "formulario enviado",
          showConfirmButton: false,
          timer: 2500,
          color: "white",
          background: "black",
        });
      })
      .catch((error) => console.error(error));
  };

  const validatEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const validaTexto = (texto) => {
    // Expresión regular que permite solo letras, números y algunos caracteres de puntuación
    const re = /^[a-zA-Z0-9,.!?()"\s]*$/;
    return re.test(texto);
  };

  return (
    <main className="main-contacto">
      <div className="container-fluid bgContacto">
        <div className="container-fluid custom-content py-5">
          <div className="row">
            <div className="col contIzq d-none d-lg-block">
              <img src="/img/CamCombo.png" alt="" />
            </div>
            <div className="col cont-form">
              <Form
                className="container-fluid "
                ref={refForm}
                action=""
                onSubmit={handleSubmit}
                required
              >
                <Form.Group controlid="nombre">
                  <Form.Label className="propForm">Nombre:</Form.Label>
                  <Form.Control
                    className="custom-form-control mb-4"
                    id="input_contacto"
                    type="text"
                    name="username"
                    pattern="^[a-zA-ZÀ-ÿ\s]{1,40}$"
                    minLength={3}
                    maxLength={30}
                    // controlid="exampleForm.ControlInput1"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlid="email">
                  <Form.Label className="propForm">Email:</Form.Label>
                  <Form.Control
                    className="custom-form-control mb-4"
                    id="input_contacto"
                    type="email"
                    name="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    // controlid="exampleForm.ControlInput1"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlid="mensaje">
                  <Form.Label className="propForm">Mensaje:</Form.Label>
                  <Form.Control
                    className="custom-form-textarea"
                    id="input_contacto"
                    as="textarea"
                    // controlid="exampleForm.ControlTextarea1"
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    minLength={10}
                    maxLength={300}
                    required
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 py-3 mt-4 boton-contacto"
                >
                  <span className="customButton-label">ENVIAR</span>
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contacto;
