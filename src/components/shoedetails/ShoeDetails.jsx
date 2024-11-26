/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getshoesbyid, updateShoe } from "../fetch/fetch";
import "./shoedetails.css";

export default function ShoeDetails({
  user,
  title,
  setTitle,
  price,
  setPrice,
  image,
  setImage,
}) {
  const { shoeId } = useParams();
  const [shoe, setShoe] = useState("");

  useEffect(() => {
    const fetchShoe = async () => {
      try {
        const data = await getshoesbyid(shoeId);
        setShoe(data);
        setTitle(data.title);
        setPrice(data.price);
        setImage(data.image);
      } catch (error) {
        console.error("Error fetching shoe by ID:", error);
      }
    };
    fetchShoe();
  }, [shoeId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateShoe(title, price, image, shoeId);
      alert("Shoe updated successfully!");
    } catch (error) {
      console.error("Error fetching shoe by ID:", error);
    }
  };

  return (
    <div className="containerD">
      <section className="boxD">
        <section className="imageD">
          <img src={shoe.image} alt="" />
        </section>
        {user.type === "admin" && (
          <form className="inputD" onSubmit={handleSubmit}>
            <label htmlFor="Title">Title</label>
            <input
              type="text"
              name="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <label htmlFor="Price">Price</label>
            <input
              type="text"
              name="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <label htmlFor="Image">Image</label>
            <input
              type="text"
              name="Image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
            <button className="btnD" type="submit">
              Update
            </button>
          </form>
        )}
        {user.type !== "admin" && (
          <section className="inputD">
            <label htmlFor="Title">Title</label>
            <input type="text" name="Title" value={shoe.title} readOnly />
            <label htmlFor="Price">Price</label>
            <input type="text" name="Price" value={shoe.price} readOnly />
            <button className="btnD" type="submit">
              Buy
            </button>
          </section>
        )}
      </section>
    </div>
  );
}
