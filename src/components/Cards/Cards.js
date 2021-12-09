import React, { useEffect, useState } from "react";
import Styles from "./Cards.module.css";
import sunny from '../../assests/sunny.jpg'
import haze from '../../assests/haze.jpg'
import drizzle from '../../assests/drizzle.jpg'
import mist from '../../assests/mist.jpg'
import rain from '../../assests/rain.jpg'
import smoke from '../../assests/smoke.jpg'
import clouds from '../../assests/clouds.jpg'
import clear from '../../assests/clear.jpg'
import other from '../../assests/other.jpg'

export default function Cards({ location, list, setlist, hiden, sethiden }) {
  const [editCard, setEditCard] = useState(false);
  const [text, setText] = useState("");

  const [condition, setCondition] = useState("");
  const [temp, setTemp] = useState();
  const [tempmin, setTempmin] = useState();
  const [tempmax, setTempmax] = useState();
  const [tempfeelslike, setTempfeelslike] = useState();
  const [pressure, setPressure] = useState();
  const [humidity, setHumidity] = useState();

  const UpHandle = () => {
    return (
      location.toLowerCase().charAt(0).toUpperCase() +
      location.toLowerCase().slice(1)
    );
  };

  const update = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=49f6e460176d020718c480901f82ab3f`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setCondition(parsedData.weather[0].main);
    const propertyValues = Object.values(parsedData.main);
    setTemp((propertyValues[0] - 273.15).toFixed(2));
    setTempmin((propertyValues[2] - 273.15).toFixed(2));
    setTempmax((propertyValues[3] - 273.15).toFixed(2));
    setTempfeelslike((propertyValues[1] - 273.15).toFixed(2));
    setPressure(propertyValues[4]);
    setHumidity(propertyValues[5]);
  };

  useEffect(() => {
    update();
  });

  const removeCard = () => {
    let newArr = list.filter((e) => {
      return e !== location;
    });
    setlist(newArr);
  };

  const updateCard = () => {
    setEditCard(true);
  };

  const hideCard = async () => {
    let hide = list.filter((e) => {
      return e === location;
    });
    await sethiden([...hiden, hide[0]]);
    removeCard();
  };

  const editPresentCard = () => {
    let newArr = list.splice(list.indexOf(location), 1, text);
    // console.log(newArr)
    newArr = list.filter((e) => {
      return e !== newArr[0];
    });
    // console.log(newArr)
    setlist(newArr);
  };

  var bgimage = ()=>{
    if(condition==="Sunny"){
      return sunny
    }
    else if(condition ==="Haze"){
      return haze
    }
    else if(condition ==="Rain"){
      return rain
    }
    else if(condition ==="Drizzle"){
      return drizzle
    }
    else if(condition ==="Mist"){
      return mist
    }
    else if(condition ==="Smoke"){
      return smoke
    }
    else if(condition ==="Clouds"){
      return clouds
    }
    else if(condition ==="Clear"){
      return clear
    }
    else{
      return other
    }
  }

  var sectionStyle = {
    backgroundImage:`url(${bgimage()})`,
    // backgroundImage:'linear-gradient(rgba(223, 223, 223, 0.3)',
    // background: 'linear-gradient(to top, #000000, #707070)',
    backgroundSize: 'cover',
    width: '180px',
    height:'320px',
    borderRadius: '15px',
    /* color: white; */
    padding:'20px',
    display:'flex',
    flexDirection:' column',
    textAlign:'center',
    alignItems: 'center',
    justifyItems: 'center',
    margin: '20px 40px',
    color: 'black'
  };

  return (
    <div>
      {!editCard ? (
        <div 
        // className={Styles.card} 
        style={sectionStyle}>
          <div className={Styles.place}><b>{UpHandle()}</b></div>
          <div className={Styles.hr} />
          <div className={Styles.condition}>{condition}</div>
          <div className={Styles.temp}>
            <div className={Styles.currentTemp}>{temp} &deg;C</div>
            <div className={Styles.maxminTemp}>
              <div className={Styles.maxTemp}>
                Max: <br />
                {tempmax} &deg;C
              </div>
              <div className={Styles.maxTemp}>
                Min: <br /> {tempmin} &deg;C
              </div>
            </div>
            <div className={Styles.feelsTemp}>
              Feels Like : {tempfeelslike} &deg;C
            </div>
            <div className={Styles.bottom}>
              <p className={Styles.hum}>Humidity : {humidity}</p>
              <p className={Styles.pressure}>Pressure : {pressure}</p>
            </div>
          </div>
          <div className={Styles.buttons}>
            <button className={Styles.button} onClick={updateCard}>
              Edit
            </button>
            <button className={Styles.button} onClick={hideCard}>
              Hide
            </button>
            <button className={Styles.button} onClick={removeCard}>
              Delete
            </button>
          </div>
        </div>
      ) : (
        <div className={Styles.editcont}>
          <div className={Styles.nameHolder}>
            <input
              type="text"
              className={Styles.input}
              placeholder="New location"
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </div>
          <div className={Styles.buttonCtn}>
            <button
              type="submit"
              className={Styles.button1}
              onClick={() => {
                editPresentCard();
              }}
            >
              Update
            </button>
            <button
              className={Styles.button2}
              onClick={() => {
                setEditCard(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
