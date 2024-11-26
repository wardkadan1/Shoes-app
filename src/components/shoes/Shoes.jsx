import { getshoes } from "../fetch/fetch";
import { useState, useEffect } from "react";
import "./shoes.css";

export default function Shoes() {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    getshoes(setShoes);
  }, []);

  return (
    <div className="containerS">
      {shoes.length > 0 &&
        shoes.map((shoe) => (
          <section className="boxS" key={shoe.id}>
            <section className="imagesec">
              <img src={shoe.image} alt="" />
            </section>
            <section className="labelC">
              <label htmlFor="">{shoe.title} </label>
              <label htmlFor="">{shoe.price}$</label>
            </section>
            <section className="btnsec">
              <button>View Details</button>
              <button className="downBtn">Delete</button>
            </section>
          </section>
        ))}
    </div>
  );
}
