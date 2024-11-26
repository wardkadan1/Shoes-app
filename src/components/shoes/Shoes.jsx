import { deleteShoes, getshoes } from "../fetch/fetch";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./shoes.css";

export default function Shoes() {
  const [shoes, setShoes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getshoes(setShoes);
  }, []);

  const Delete = async (e) => {
    try {
      await deleteShoes(e.target.name);
      setShoes((prevShoes) =>
        prevShoes.filter((shoe) => shoe.id !== e.target.name)
      );
      navigate("/shoes");
    } catch (error) {
      console.error("Error adding shoe:", error);
    }
  };

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
              <button name={shoe.id} className="downBtn" onClick={Delete}>
                Delete
              </button>
            </section>
          </section>
        ))}
    </div>
  );
}
