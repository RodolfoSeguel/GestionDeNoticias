import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import ListadoNoticias from './components/ListadoNoticias';

function App() {
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=general&apiKey=70a46d18632b4aaaa2229d90f3dec00c`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  });

  return (
    <Fragment>
        <Header 
          titulo='Noticias'
        />
        <div className="container white">
            <ListadoNoticias 
              noticias={noticias}
            />
        </div>
    </Fragment>
  );
}

export default App;
