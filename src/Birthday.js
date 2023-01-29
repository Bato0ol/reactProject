import React, { useState } from "react";
import data from "./data";
import "./styles.css";

const Birthday = () => {
  const [people, setPeople] = useState(data);
  const removeit = (id) => {
    let newPeople = people.filter((item) => item.id !== id);
    setPeople(newPeople);
  };
  return (
    <main>
      <section className="container">
        <h1>{people.length} Birthday Reminder</h1>

        {people.map((person) => {
          const { id, image, name, age } = person;
          return (
            <article className="person" key={id}>
              <img src={image} alt="" />
              <div>
                <h4>{name}</h4>
                <h4>{age}</h4>
              </div>
              <button onClick={() => removeit(id)}> remove it</button>
            </article>
          );
        })}
        <button
          className="btn"
          onClick={() => {
            setPeople([]);
          }}
        >
          clear All
        </button>
      </section>
    </main>
  );
};
export default Birthday;
