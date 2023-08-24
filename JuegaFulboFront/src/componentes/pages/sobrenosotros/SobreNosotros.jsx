import CardComponent from "./CardComponent";
import "bootstrap/dist/css/bootstrap.min.css";
export default function SobreNosotros() {
  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center">
      <CardComponent
        nombre="Cesar Mauricio Broll"
        foto="https://i.ibb.co/V9NPD2q/imagen-2023-08-23-230600472.png"
        descripcion="descripcion  descripcion descri djfnsdkjfnsdkjfnk jnfksjdnfk sjdnf kjndspcion"
        github="https://github.com/CMBroll"
        linkedin="https://www.linkedin.com/in/mauricio-broll/"
      ></CardComponent>
      <CardComponent
        nombre="Gabriel Aron Arias"
        foto="https://i.ibb.co/G9FNJK2/imagen-2023-08-23-231104951.png"
        descripcion="descripcion  descripcion descripcion"
        github="https://github.com/Aron9377"
        linkedin="https://www.linkedin.com/in/gabriel-aron-arias"
      ></CardComponent>
      <CardComponent
        nombre="María Agustina González Gauna"
        foto="https://i.ibb.co/PgbP7jr/imagen-2023-08-23-230730220.png"
        descripcion="descripcion  descripcion descripcion"
        github="https://github.com/MariaAgustinaGonzalezGauna"
        linkedin="https://www.linkedin.com/in/maria-agustina-gonzalez-gauna/"
      ></CardComponent>
      <CardComponent
        nombre="Francesca Falci Antacle"
        foto="https://i.ibb.co/hKwFVTZ/imagen-2023-08-23-231020523.png"
        descripcion="descripcion  descripcion descripcion"
        github="https://github.com/FranceFalci"
        linkedin="https://www.linkedin.com/in/francesca-falci-antacle-8a0269245"
      ></CardComponent>
      <CardComponent
        nombre="Mariano Girbau"
        foto="https://i.ibb.co/BsWNtBD/imagen-2023-08-23-231628013.png"
        descripcion="descripcion  descripcion descripcion"
        github="https://github.com/MarianoGirbau"
        linkedin="https://www.linkedin.com/in/mariano-girbau-b25868219/"
      ></CardComponent>
      <CardComponent
        nombre="Antonella Banchero"
        foto="https://i.ibb.co/Y3FmwPy/imagen-2023-08-23-230805047.png"
        descripcion="descripcion  descripcion descripcion"
        github="https://github.com/AntoBanchero"
        linkedin="https://www.linkedin.com/in/antonella-banchero"
      ></CardComponent>
    </div>
  );
}
