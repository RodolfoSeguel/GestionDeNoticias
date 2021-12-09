import React from 'react';
import PropTypes from 'prop-types';

const Noticia = ({noticia}) => {
    // extraer los datos
    const { urlToImage, url, title, description, source } = noticia;

    const imagen = (urlToImage) ?
        <div className="card-image">
            <img src={urlToImage} alt={title} />
            <span className="card-title">{source.name}</span>
        </div>
    : null;
	function swapColor(chung) {
		let style = document.getElementById(chung).style;
		console.log(style);
		if (style.backgroundColor === "cyan") {
			style.backgroundColor = "";
		} else {
			style.backgroundColor = "cyan";
		}
	}
	const tag = <div>
				<button id = {title+"1"} styles = "" onClick = {() => swapColor(title+"1")}>Deporte</button>
				<button id = {title+"2"} styles = "" onClick = {() => swapColor(title+"2")}>Politica</button>
				<button id = {title+"3"} styles = "" onClick = {() => swapColor(title+"3")}>Ciencia</button>
				<button id = {title+"4"} styles = "" onClick = {() => swapColor(title+"4")}>Tecnologia</button>
				<button id = {title+"5"} styles = "" onClick = {() => swapColor(title+"5")}>Terrorismo</button>
				<button id = {title+"6"} styles = "" onClick = {() => swapColor(title+"6")}>Cultura</button>
				<button id = {title+"7"} styles = "" onClick = {() => swapColor(title+"7")}>Entretimiento</button>
				</div>
    return ( 
        <div className="col s12 m6 l4">
            <div className="card">
                {imagen}

                <div className="card-content">
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>

                <div className="card-action">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                    >Ver Noticia Completa</a>
                </div>
			{tag}
            </div>
        </div>
     );
}

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}
 
export default Noticia;