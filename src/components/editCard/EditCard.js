import React, { useState } from "react";
import Styles from "./editcards.module.css";

export default function EditCard({ hideAdderCard, list, setlist,setEditCard,index }) {
  const [text, setText] = useState("");

  // const updateCard = () => {
    // setlist([...list, text]);
    // console.log(list)
    // setlist(list.splice(index,0,text));
    // hideAdderCard();
  // };
  return (
    <div className={Styles.card}>
      <div className={Styles.nameHolder}>
        <input
          type="text"
          className={Styles.input}
          placeholder="Place"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div className={Styles.buttonCtn}>
        <button type="submit" onClick={()=>{
          console.log(text)
          console.log(list)
          console.log(index)
          list.splice(index,1,text)
        }}>
          Update
        </button>
        <button  onClick={() => {setEditCard(false)}}>
          Cancel
        </button>
      </div>
    </div>
    )
}
