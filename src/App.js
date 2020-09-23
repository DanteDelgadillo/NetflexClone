import React from 'react';
import './App.css';
import Row from "./Component/Row"
import requests from "./request"
import Banner from "./Component/Banner";
import Navbar from "./Component/Navbar"


function App() {
  return (
    <div className="app">
      {/* navbar */}
      <Navbar />
      {/* banner */}
      <Banner />
      <Row title="Netflex Originals" fetchUrl={requests.fetchNetflixOrignals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries " fetchUrl={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;
