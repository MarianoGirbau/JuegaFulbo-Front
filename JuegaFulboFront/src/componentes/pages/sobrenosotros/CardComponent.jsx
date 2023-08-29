import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const CardComponent = ({ nombre, foto, descripcion, github, linkedin }) => {
  const cardStyles = `
    .card {
      height: 400px;
      width: 300px;
      border: 3px solid #b6ff1b;
      background-color: #000;
      border-radius: 20px;
      padding: 16px;
      margin: 16px;
      color : white;
      display:flex;
      justify-content:center;
      align-items:center;

    }

    .card__foto {
      
      width: 80%;
      height: 200px;
      object-fit: cover;
      border-radius: 50rem;
      margin-bottom: 8px;
    }

    .card__nombre {
      font-size: 24px;
      margin-bottom: 8px;
    }

      font-size: 16px;
      margin-bottom: 16px;
    }

    .card__redes a {
      display: block;
      margin-bottom: 8px;
      color: #007bff;
    }

    svg{
      background-color: #3333 !important;
    }
  `;
  return (
    <div>
      <style>{cardStyles}</style>

      <div className="card">
        <img src={foto} alt={nombre} className="card__foto" />
        <h2 className="card__nombre">{nombre}</h2>
        <div className="card__redes d-flex justify-content-between px-4">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                width="24"
                height="24"
              >
                <path d="M21.9 0H2.1C1 0 0 1 0 2.1v19.8C0 23 1 24 2.1 24h19.8c1.1 0 2.1-1 2.1-2.1V2.1C24 1 23 0 21.9 0zM7.6 19.7H4.3V9h3.3v10.7zM5.9 7.8C4.8 7.8 4 7 4 6s.8-1.8 1.9-1.8c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8zm15.8 11.9h-3.3v-5.5c0-1.3-.5-2.1-1.8-2.1-1 0-1.6.7-1.9 1.4-.1.3-.1.7-.1 1.1v5.2h-3.3s.1-10.7 0-11.9h3.3v1.7c.4-.6 1.2-1.5 2.8-1.5 2 0 3.5 1.3 3.5 4.1v7.6z" />
              </svg>
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                width="24"
                height="24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.262.793-.58 0-.287-.012-1.043-.018-2.043-3.34.72-4.043-1.61-4.043-1.61-.547-1.387-1.332-1.758-1.332-1.758-1.09-.73.086-.716.086-.716 1.207.086 1.844 1.23 1.844 1.23 1.07 1.86 2.812 1.324 3.5 1.012.11-.777.418-1.312.762-1.61-2.664-.305-5.465-1.332-5.465-5.93 0-1.31.465-2.383 1.23-3.22-.12-.303-.535-1.523.117-3.176 0 0 1.012-.324 3.32 1.23.965-.268 2-.402 3.02-.41 1.02.008 2.055.143 3.02.41 2.305-1.555 3.316-1.23 3.316-1.23.656 1.653.242 2.873.117 3.176.77.836 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.922.43.36.824 1.102.824 2.223 0 1.61-.015 2.902-.015 3.29 0 .32.192.695.8.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

CardComponent.propTypes = {
  nombre: PropTypes.string.isRequired,
  foto: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  github: PropTypes.string,
  linkedin: PropTypes.string,
};
export default CardComponent;
