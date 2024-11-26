/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { addShoes } from "../fetch/fetch";
import "./addshoe.css";

export default function AddShoe({
  title,
  setTitle,
  price,
  setPrice,
  image,
  setImage,
}) {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await addShoes(title, price, image);
      navigate("/shoes");
    } catch (error) {
      console.error("Error adding shoe:", error);
    }
  };

  return (
    <div className="addshoe">
      <form className="containerA" onSubmit={handleLogin}>
        <section className="boxA">
          <label className="title" htmlFor="Title">
            Title
          </label>
          <input
            type="text"
            name="Title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label htmlFor="Price">Price</label>
          <input
            type="text"
            name="Price"
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <label htmlFor="Image">Image</label>
          <input
            type="text"
            name="Image"
            onChange={(e) => setImage(e.target.value)}
            required
          />
          <button className="btnA" type="submit">
            Add
          </button>
        </section>
      </form>
    </div>
  );
}
