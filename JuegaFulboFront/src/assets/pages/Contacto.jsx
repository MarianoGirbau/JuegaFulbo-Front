import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import "./contacto.css";

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

  return (
    <>
      <h1 className="color-letra lta">Contactanos</h1>
      <div className="container-fluid d-flex gap-5">
        <figure className="col-6 d-none d-lg-block">
          <video
            muted
            loop
            autoPlay
            className="videoContacto"
            src="src\imagenes\VideoPateandoP.mp4"
            type="video/mp4"
          ></video>
        </figure>
        <div className="formulariocss col-12 col-lg-4">
          <Form
            className="container-fluid "
            ref={refForm}
            action=""
            onSubmit={handleSubmit}
            required
          >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <fieldset className="field-name">
                <Form.Label className="color-letra">Nombre completo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="JuegaFulbo"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </fieldset>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <fieldset className="field-name">
                <Form.Label className="color-letra">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="juegafulbo@gmail.com"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </fieldset>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <fieldset className="field-name">
                <Form.Label className="color-letra">
                  Ingrese el texto
                </Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="ingrese el texto aqui"
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </fieldset>
            </Form.Group>
            <button className="color-letra d-flex btn btn-dark">Enviar</button>
          </Form>
        </div>

        <figure className="messibanner d-none d-lg-block">
          <img src="src\imagenes\messiHumoo.gif" alt="messi" />
        </figure>
      </div>
    </>
  );
};

export default Contacto;
