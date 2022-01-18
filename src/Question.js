import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = (props) => {
  const { id, title, info } = props.data;
  const [minu, setMinu] = useState(0);
  const changeMinuPlus = () => {
    setMinu(1);
  };
  const changeMinuMinus = () => {
    setMinu(0);
  };

  return (
    <article key={id} className="question">
      <header>
        <h4>{title}</h4>
        {minu == 1 ? (
          <button onClick={changeMinuMinus} className="btn">
            <AiOutlineMinus />
          </button>
        ) : (
          <button onClick={changeMinuPlus} className="btn">
            <AiOutlinePlus />
          </button>
        )}
      </header>
      {minu == 1 ? <p>{info}</p> : null}
    </article>
  );
};

export default Question;
