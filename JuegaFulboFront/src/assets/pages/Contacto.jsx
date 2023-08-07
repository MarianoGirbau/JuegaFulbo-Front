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