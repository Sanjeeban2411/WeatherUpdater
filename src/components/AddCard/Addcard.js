import React from 'react'
import Styles from './Addcards.module.css'
// import {BsFillPatchPlusFill} from 'react-icons/bs'
// import {GrRefresh} from 'react-icons/gr'

export default function Addcards(props) {
    const {showAdderCard, resetCard}=props;
    return (
        <div className={Styles.card}>
            <div className={Styles.sub1} onClick={()=>{showAdderCard()}}>
            {/* <BsFillPatchPlusFill value={{ className: 'Styles.icons' }}/> */}
            <h3 className={Styles.plus}>ADD</h3>
            </div>
            <div className={Styles.sub2} onClick={()=>{resetCard()}}>
            {/* <GrRefresh value={{ className: 'Styles.icons' }}/> */}
            <h3 className={Styles.plus}>RESET</h3>
            </div>
        </div>
    )
}
