import React, { useEffect, useState } from "react";
import styles from "./WeatherAPI.module.scss";
import Card from 'react-bootstrap/Card'

const WeatherAPI = (props) => {
  const [londonApiData, setLondonApiData] = useState({})
  const [bristolApiData, setBristolApiData] = useState({})
  const [romeApiData, setRomeApiData] = useState({})
  const apiData = {
    api: "http://api.weatherapi.com/v1/current.json?key=d0df026061b54f09b26105749201911&q=",
    london: "London",
    bristol: "Bristol",
    rome: "Rome"
  }

  const handleLondonFetch = () => {
    fetch(apiData.api + apiData.london)
      .then((res) => res.json())
      .then((res) => {
        setLondonApiData(res);
      })
  }
  const handleBristolFetch = () => {
    fetch(apiData.api + apiData.bristol)
      .then((res) => res.json())
      .then((res) => {
        setBristolApiData(res);
      })
  }
  const handleRomeFetch = () => {
    fetch(apiData.api + apiData.rome)
      .then((res) => res.json())
      .then((res) => {
        setRomeApiData(res);
      })
  }

  useEffect(() => {
    handleLondonFetch();
    handleBristolFetch();
    handleRomeFetch();
  }, [])
  return (
    <>
      <h1 className={styles.Title} >Weather API</h1>
      <div className={styles.WeatherBody}>
        <Card className={styles.Card} style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://advidi.com/wp-content/uploads/2018/01/2018-guide-london-weather.jpg" />
          <Card.Body>
            <Card.Title>{londonApiData.location && londonApiData.location.name}</Card.Title>
            <Card.Text>Temperature {londonApiData.current && londonApiData.current.temp_c}</Card.Text>
            <Card.Text>Humidity: {londonApiData.current && londonApiData.current.humidity}</Card.Text>
            <Card.Text>UV: {londonApiData.current && londonApiData.current.uv}</Card.Text>
          </Card.Body>
        </Card>

        <Card className={styles.Card} style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://i2-prod.bristolpost.co.uk/incoming/article10748.ece/ALTERNATES/s615/1_cold5.jpg" />
          <Card.Body>
            <Card.Title>{bristolApiData.location && bristolApiData.location.name}</Card.Title>
            <Card.Text>Temperature {bristolApiData.current && bristolApiData.current.temp_c}</Card.Text>
            <Card.Text>Humidity: {bristolApiData.current && bristolApiData.current.humidity}</Card.Text>
            <Card.Text>UV: {bristolApiData.current && bristolApiData.current.uv}</Card.Text>
          </Card.Body>
        </Card>

        <Card className={styles.Card} style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://www.revealedrome.com/wp-content/uploads/2016/06/DSC_0112forweb.jpg" />
          <Card.Body>
            <Card.Title>{romeApiData.location && romeApiData.location.name}</Card.Title>
            <Card.Text>Temperature {romeApiData.current && romeApiData.current.temp_c}</Card.Text>
            <Card.Text>Humidity: {romeApiData.current && romeApiData.current.humidity}</Card.Text>
            <Card.Text>UV: {romeApiData.current && romeApiData.current.uv}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default WeatherAPI;
