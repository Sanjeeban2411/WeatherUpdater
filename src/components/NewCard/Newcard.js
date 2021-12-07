import React, { useState } from "react";
import Styles from "./Newcards.module.css";

export default function Newcard({ hideAdderCard, list, setlist }) {
  const [text, setText] = useState("");

  const createCard = () => {
    setlist([...list, text]);
    hideAdderCard();
    // console.log(list)
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
        <button type="submit" onClick={() => {createCard()}}>
          Submit
        </button>
        <button  onClick={() => {hideAdderCard()}}>
          Cancel
        </button>
      </div>
    </div>
    )
}
