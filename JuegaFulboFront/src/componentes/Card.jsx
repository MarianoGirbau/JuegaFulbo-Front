const Card = ({ nombre, foto, descripcion, github, linkedin }) => {
  return (
    <div className="card">
      <img src={foto} alt={nombre} className="card__foto" />
      <h2 className="card__nombre">{nombre}</h2>
      <p className="card__descripcion">{descripcion}</p>
      <div className="card__redes">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
