/* eslint-disable react/prop-types */
import { deleteShoes, getshoes } from "../fetch/fetch";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./shoes.css";

export default function Shoes({ user }) {
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

  const Move = (e) => {
    console.log(e.target.name);

    navigate(`/shoes/:${e.target.name}`);
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
            {user.type !== "admin" && (
              <section className="btnsec" onClick={Move}>
                <button name={shoe.id} className="downBtn notAdmin">
                  View Details
                </button>
              </section>
            )}
            {user.type === "admin" && (
              <section className="btnsec" onClick={Move}>
                <button name={shoe.id}>View Details</button>
                <button name={shoe.id} className="downBtn" onClick={Delete}>
                  Delete
                </button>
              </section>
            )}
          </section>
        ))}
    </div>
  );
}
