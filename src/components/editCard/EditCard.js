import React, { useState } from "react";
import Styles from "./editcards.module.css";

export default function EditCard({ hideAdderCard, list, setlist,setEditCard,index }) {
  const [text, setText] = useState("");

  const updateCard = () => {
    // setlist([...list, text]);
    let newArr = list.splice(index,1,text);
    console.log(index)
    console.log(text)
    console.log(newArr)
    // hideAdderCard();
  };
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
        <button type="submit" onClick={() => {updateCard()}}>
          Update
        </button>
        <button  onClick={() => {setEditCard(false)}}>
          Cancel
        </button>
      </div>
    </div>
    )
}
