"use client";
import React, { useEffect, useState } from "react";
import styles from "./CartItem.module.css";
import Image from "next/image";
import Link from "next/link";

function CartItem({ item, cartData, setCartData }) {
  const [cartItem, setCartItem] = useState(null);
  const [number, setnumber] = useState(item.quantity);
  const fetchCartItem = async () => {
    const res = await fetch(
      `https://fakestoreapi.com/products/${item.productId}`
    );
    const resp = await res.json();
    return setCartItem(resp);
  };
  const handleClick = (event) => {
    if (event === "-") {
      setnumber(number - 1);
    } else {
      setnumber(number + 1);
    }
  };
  const handleDelete = async (id) => {
    const resposne = await fetch("https://fakestoreapi.com/carts/1", {
      method: "DELETE",
    });
    const result = await resposne.json();
    if (result?.date) {
      setCartData(cartData.filter((item) => item.productId !== id));
    }
  };
  useEffect(() => {
    fetchCartItem();
  }, []);
  if (!cartItem) {
    return <div>ჩატვირთვა...</div>;
  }
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartHeadWrapper}>
        <Link href={`/products/${item.productId}`}>
          <Image
            src={cartItem.image}
            width={80}
            height={90}
            alt={cartItem.title}
          />
        </Link>
        <div className={styles.cartImgTextWrapper}>
          <p>{cartItem.title}</p>
          <h5>{cartItem.category}</h5>
        </div>
      </div>
      <div className={styles.cartBodyWrapper}>
        <div className={styles.cartQuantityContainer}>
          <button
            disabled={number === 1}
            className={styles.plus}
            onClick={(event) => {
              handleClick(event.target.innerText);
            }}
          >
            -
          </button>
          <p>{number}</p>
          <button
            disabled={number === 10}
            className={styles.subtract}
            onClick={(event) => handleClick(event.target.innerText)}
          >
            +
          </button>
        </div>
        <div>
          <span>${(cartItem.price * number).toFixed(1)}</span>
        </div>
        <div>
          <button onClick={() => handleDelete(item.productId)}>
            <Image src={"/bin.svg"} width={20} height={20} alt="bin" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;