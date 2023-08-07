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