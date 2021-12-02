import React from 'react'
import Styles from './Addcards.module.css'
// import {BsFillPatchPlusFill} from 'react-icons/bs'

export default function Addcards(props) {
    const {showAdderCard}=props;
    return (
        <div className={Styles.card} onClick={()=>{showAdderCard()}}>
            {/* <BsFillPatchPlusFill.Provider value={{ className: 'Styles.icons' }}/> */}
            <h3 className={Styles.plus}>+</h3>
        </div>
    )
}
