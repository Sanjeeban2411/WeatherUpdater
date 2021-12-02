import React, {useState} from 'react'
import Styles from './CardBase.module.css'
import Cards from '../Cards/Cards';
import AddCard from '../AddCard/Addcard';
import Newcard from '../NewCard/Newcard';
import Editcard from '../editCard/EditCard';

export default function CardBase() {

    const [AdderCard, setAdderCard] = useState(false)
    const [EditCard, setEditCard] = useState(false)

    const [list, setlist] = useState([]);

    const showEditCard = ()=>{
        setEditCard(true);
    }
    const showAdderCard = ()=>{
        setAdderCard(true);
    }
    const hideAdderCard = ()=>{
        setAdderCard(false);
    }
    const [text, setText] = useState("");
    const [index, setindex] = useState();


    // console.log(index)

    const updateCard=(location)=>{
        showEditCard(true);
        
    }



    return (
        <div className={Styles.container}>
            {
                list.map(item=>
                <Cards key={item} location={item} list={list} setlist={setlist} showAdderCard={showAdderCard} hideAdderCard={hideAdderCard} text={text} settext={setText} showEditCard={showEditCard} updateCard={updateCard} index={index} setindex={setindex}/>
                )
            }
            {
                EditCard&&
                <Editcard setEditCard={setEditCard} updateCard={updateCard} index={index} setindex={setindex} list={list} setlist={setlist}/>
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
