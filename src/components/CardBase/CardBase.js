import React, { useState } from "react";
import Styles from "./CardBase.module.css";
import Cards from "../Cards/Cards";
import AddCard from "../AddCard/Addcard";
import Newcard from "../NewCard/Newcard";
import Navbar from "../Navbar/Navbar";

export default function CardBase() {
  const [AdderCard, setAdderCard] = useState(false);

  const [list, setlist] = useState([]);

  const [hiden, sethiden] = useState([])

  const showAdderCard = () => {
    setAdderCard(true);
  };
  const hideAdderCard = () => {
    setAdderCard(false);
  };
  const resetCard = () =>{
      setlist([])
  }
  const [text, setText] = useState("");

  return (
    <div className={Styles.main}>
      <Navbar list={list} setlist={setlist} hiden={hiden} sethiden={sethiden}/>
      <div className={Styles.container}>
          {/* <Newcard style={{display:'none'}}/> */}
        {list.map((item) => (
          <Cards key={item} location={item} list={list} setlist={setlist} hiden={hiden} sethiden={sethiden}/>
        ))}

        {!AdderCard && <AddCard showAdderCard={showAdderCard} resetCard={resetCard}/>}
        {AdderCard && (
          <Newcard
            hideAdderCard={hideAdderCard}
            list={list}
            setlist={setlist}
            text={text}
            settext={setText}
          />
        )}
      </div>
    </div>
  );
}
