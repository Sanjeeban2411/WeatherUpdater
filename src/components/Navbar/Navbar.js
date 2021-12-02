import React,{useState} from 'react'
import Styles from './Navbar.module.css'

export default function Navbar() {
    const [place, setPlace] = useState("");
    const onChangeEvent = (event)=>{
        console.log(event.target.value);
        setPlace(event.target.value);
    }
    return (
        <div className={Styles.container}>
            <h2 className={Styles.logo}>
                <strong>Weather</strong>
                <i>Update</i>
            </h2>
            <div className={Styles.inputDiv}>
                <input className={Styles.input} type="text" placeholder="Search. . ." onChange={onChangeEvent}/>
            </div>
        </div>
    )
}
