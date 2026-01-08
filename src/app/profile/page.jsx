import React from "react";
import styles from "./page.module.css";

const page = async () => {
  const resp = await fetch("https://fakestoreapi.com/users/3");
  const user = await resp.json();
  return (
    <div className={`${styles.profileContainer}`}>
      <h1>Welcome {user.username}!</h1>
      <ul>
        <h2>Details:</h2>
        <li>
          <span>firstname:</span> {user.name.firstname}
        </li>
        <li>
          <span>lastname:</span> {user.name.lastname}
        </li>
        <li>
          <span>phone:</span> {user.phone}
        </li>
        <h2>Location:</h2>
        <ul>
          <li>
            <span>city:</span> {user.address.city}
          </li>
          <li>
            <span>street:</span> {user.address.street}
          </li>
          <li>
            <span>number:</span> {user.address.number}
          </li>
          <li>
            <span>zipcode:</span> {user.address.zipcode}
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default page;