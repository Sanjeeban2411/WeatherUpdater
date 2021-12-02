import React, {useEffect,useState} from 'react'
import Styles from './Cards.module.css'
// import sunny from '../../assests/sunny.jpg'
// import drizzle from '../../assests/drizzle.jpg'
// import mist from '../../assests/mist.jpg'
// import rain from '../../assests/rain.jpg'

export default function Cards({location,list,setlist,updateCard,showEditCard,index, setindex}) {
    console.log(location)

    // const [index, setindex] = useState();

    const [condition, setCondition] = useState("")
    const [temp, setTemp] = useState()
    const [tempmin, setTempmin] = useState()
    const [tempmax, setTempmax] = useState()
    const [tempfeelslike, setTempfeelslike] = useState()
    const [pressure, setPressure] = useState()
    const [humidity, setHumidity] = useState()
    
    const UpHandle = () =>{
        return location.toLowerCase().charAt(0).toUpperCase()+location.toLowerCase().slice(1);
    }
    
    const update = async() =>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=49f6e460176d020718c480901f82ab3f`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setCondition(parsedData.weather[0].main)
        const propertyValues = Object.values(parsedData.main);
        setTemp((propertyValues[0]-273.15).toFixed(2))
        setTempmin((propertyValues[2]-273.15).toFixed(2))
        setTempmax((propertyValues[3]-273.15).toFixed(2))
        setTempfeelslike((propertyValues[1]-273.15).toFixed(2))
        setPressure(propertyValues[4])
        setHumidity(propertyValues[5])

        console.log(url)
    }

    useEffect(() => {
        update()
    });



    const removeCard=()=>{
        let newArr = list.filter((e)=>{
            return e!==location
        })
        setlist(newArr)
    }
    
    updateCard=async(location)=>{
        setindex(list.indexOf(location))
        // showEditCard(true);
        // console.log(index)
        showEditCard(true);
    //     // setlist(list.splice(list.indexOf(location),1,text))

    //     // console.log(list.indexOf(location),1,text);
    }
    return (
        <div className={Styles.card} >
            <div className={Styles.place}>{UpHandle()}</div>
            <div className={Styles.hr}/>
            <div className={Styles.condition}>{condition}</div>
            <div className={Styles.temp}>
                <div className={Styles.currentTemp}>{temp} &deg;C</div>
                <div className={Styles.maxminTemp}>
                    <div className={Styles.maxTemp}>Max: <br/>{tempmax} &deg;C</div>
                    <div className={Styles.maxTemp}>Min: <br/> {tempmin} &deg;C</div>
                </div>
                <div className={Styles.feelsTemp}>Feels Like :{tempfeelslike} &deg;C</div>
                <div className={Styles.bottom}>
                    <p className={Styles.hum}>
                    Humidity: {humidity}
                    </p>
                    <p className={Styles.pressure}>
                        Pressure: {pressure}
                    </p>
                </div>
            </div>
            <div className={Styles.buttons}>
                <button className={Styles.button} onClick={updateCard}>Edit</button>
                <button className={Styles.button} onClick={removeCard}>Delete</button>
            </div>
        </div>
    )
}