import React, { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let ammount = parseInt(count);
    if (count <= 0) {
      ammount = 1;
    }
    if (count > 8) {
      ammount = 8;
    }
    setText(data.slice(0, ammount));
  };
  return (
    <section className='section-center'>
      <h2>Lorem Ipsum</h2>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Paragraphs:</label>
        <input
          type='number'
          name='ammount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className='btn' type='submit'>
          Generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
