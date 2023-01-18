import React from 'react'
import "../../App.css";
import Banner from "../../components/Banner";
import Row from "../../components/Row";
import requests from "../../api/request";

function MainPage() {
  return (
    <div>
    <Banner />
    <Row 
      title="NETFLIX ORIGINAILS"
      id="NO"
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
    />
    <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
    <Row title="Action Movies" id="AM" fetchUrl={requests.fetchActionMovies} />
    <Row title="Romance Movies" id="RM" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  )
}

export default MainPage