import CardComponent from "./componentes/CardComponent";
import "bootstrap/dist/css/bootstrap.min.css";
export default function SobreNosotros() {
  return (
    <div className="d-flex flex-wrap   justify-content-center align-items-center">
      <CardComponent
        nombre="Cesar Mauricio Broll"
        foto="https://i.pinimg.com/736x/49/15/a7/4915a78e689b61bba589ca1788b77f01.jpg"
        descripcion="descripcion  descripcion descri djfnsdkjfnsdkjfnk jnfksjdnfk sjdnf kjndspcion"
        github="https://github.com/CMBroll"
        linkedin="https://www.linkedin.com/in/mauricio-broll/"
      ></CardComponent>
      <CardComponent
        nombre="Gabriel Aron Arias"
        foto="https://i.pinimg.com/736x/49/15/a7/4915a78e689b61bba589ca1788b77f01.jpg"
        descripcion="descripcion  descripcion descripcion"
        github="https://github.com/Aron9377"
        linkedin="www.linkedin.com/in/gabriel-aron-arias"
      ></CardComponent>
      <CardComponent
        nombre="María Agustina González Gauna"
        foto="https://i.pinimg.com/736x/49/15/a7/4915a78e689b61bba589ca1788b77f01.jpg"
        descripcion="descripcion  descripcion descripcion"
        github="https://github.com/MariaAgustinaGonzalezGauna"
        linkedin="https://www.linkedin.com/in/maria-agustina-gonzalez-gauna/"
      ></CardComponent>
      <CardComponent
        nombre="Francesca Falci Antacle"
        foto="https://i.pinimg.com/736x/49/15/a7/4915a78e689b61bba589ca1788b77f01.jpg"
        descripcion="descripcion  descripcion descripcion"
        github="https://github.com/FranceFalci"
        linkedin="https://www.linkedin.com/in/francesca-falci-antacle-8a0269245"
      ></CardComponent>
      <CardComponent
        nombre="Mariano Girbau"
        foto="https://i.pinimg.com/736x/49/15/a7/4915a78e689b61bba589ca1788b77f01.jpg"
        descripcion="descripcion  descripcion descripcion"
        github="https://github.com/MarianoGirbau"
        linkedin="https://www.linkedin.com/in/mariano-girbau-b25868219/"
      ></CardComponent>
      <CardComponent
        nombre="Antonella Banchero"
        foto="https://i.pinimg.com/736x/49/15/a7/4915a78e689b61bba589ca1788b77f01.jpg"
        descripcion="descripcion  descripcion descripcion"
        github="https://github.com/AntoBanchero"
        linkedin="www.linkedin.com/in/antonella-banchero"
      ></CardComponent>
    </div>
  );
}
