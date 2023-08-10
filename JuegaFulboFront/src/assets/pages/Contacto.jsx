import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import "./contacto.css";
import { Container, Row, Col } from "react-bootstrap";

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
      <Container className="container-fluid d-flex gap-5">
        <Row>
          <Col md={6} lg={6} className="d-none d-md-block">
            <figure>
              <video
                muted
                loop
                autoPlay
                className="videoContacto"
                src="src\imagenes\VideoPateandoP.mp4"
                type="video/mp4"
              ></video>
            </figure>
          </Col>
          <Col sm={12} md={6} lg={5} className="formulariocss">
            <Form
              className="container-fluid "
              ref={refForm}
              action=""
              onSubmit={handleSubmit}
              required
            >
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <fieldset className="field-name">
                  <Form.Label className="color-letra">
                    Nombre:
                  </Form.Label>
                  <Form.Control
                    id="input_contacto"
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                  />
                </fieldset>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <fieldset className="field-name">
                  <Form.Label className="color-letra">Email:</Form.Label>
                  <Form.Control
                    id="input_contacto"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </fieldset>
              </Form.Group>
              <Form.Group
                className="mb-3 input_contacto"
                controlId="exampleForm.ControlTextarea1"
              >
                <fieldset className="field-name">
                  <Form.Label className="color-letra">Mensaje:</Form.Label>
                  <Form.Control
                    id="input_contacto"
                    as="textarea"
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </fieldset>
              </Form.Group>
              <button className="color-letra d-flex  boton-contacto">
                Enviar
              </button>
            </Form>
          </Col>
          <Col lg={1} className="d-none d-lg-block">
            <figure className="messibanner">
              <img src="src\imagenes\messiHumoo.gif" alt="messi" />
            </figure>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contacto;
