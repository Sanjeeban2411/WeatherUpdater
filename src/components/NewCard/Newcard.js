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
      {/* <form action="submit"> */}
      <div className={Styles.nameHolder}>
        <input
          type="text"
          className={Styles.input}
          placeholder="Enter location"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div className={Styles.buttonCtn}>
        <button
          type="submit"
          className={Styles.button1}
          onClick={() => {
            createCard();
          }}
        >
          Submit
        </button>
        <button
          className={Styles.button2}
          onClick={() => {
            hideAdderCard();
          }}
        >
          Cancel
        </button>
        {/* </form> */}
      </div>
    </div>
  );
}
