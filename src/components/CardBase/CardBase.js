import React, {useState} from 'react'
import Styles from './CardBase.module.css'
import Cards from '../Cards/Cards';
import AddCard from '../AddCard/Addcard';
import Newcard from '../NewCard/Newcard';

export default function CardBase() {

    const [AdderCard, setAdderCard] = useState(false)

    const [list, setlist] = useState([]);

    const showAdderCard = ()=>{
        setAdderCard(true);
    }
    const hideAdderCard = ()=>{
        setAdderCard(false);
    }
    const [text, setText] = useState("");






    return (
        <div className={Styles.container}>
            {
                list.map(item=>
                <Cards key={item} location={item} list={list} setlist={setlist} />
                )
            }

            {
                !AdderCard &&
                <AddCard showAdderCard={showAdderCard}/>
            }
            {   
                AdderCard &&
                <Newcard hideAdderCard={hideAdderCard}  list={list} setlist={setlist} text={text} settext={setText}/>
            }

        </div>
    )
}
