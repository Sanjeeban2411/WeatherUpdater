import React,{useState} from 'react'
import Styles from './Navbar.module.css'
// import SearchField from 'react-search-field';

export default function Navbar(props) {
    const [place, setPlace] = useState("Search");
    const onChangeEvent = (event)=>{
        // console.log(event.target.value);
        setPlace(event.target.value);
    }
    const search =(e)=>{
        // let result = props.list.indexOf(place)
        e.preventDefault();
        // console.log(props.list)
        // console.log(props.list.indexOf(place))
        if(props.list.find((e)=>{return e===place})){
            props.setlist([place])
        }
        else{
            
        }
    }

    const unhide =()=>{
        let newArr = props.list.concat(props.hiden);
        props.setlist(newArr)
        // console.log(newArr)
    }
    return (
        <div className={Styles.container}>
            <h2 className={Styles.logo}>
                <strong>Weather</strong>
                <i>Update</i>
            </h2>
            <div className={Styles.inputDiv}>
                <form>
                <input className={Styles.input} type="text" placeholder="Search. . ." onChange={onChangeEvent}/>
                <button className={Styles.search} onClick={search}>Search</button>
                </form>
                <button className={Styles.unhide} onClick={unhide}>Unhide </button>
                {/* <SearchField 
                placeholder={place}
                onChange={onChangeEvent}
                /> */}
            </div>
        </div>
    )
}
