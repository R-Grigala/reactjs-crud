"use client";
import { useParams } from "next/navigation";
import styles from "./page.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
function page() {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((resp) => resp.json())
      .then((res) => setSingleProduct(res));
  }, []);

  if (singleProduct === null) return <div className={styles.productLoading}>პროდუქტი იტვირთება...</div>;
  return <div className={styles.productContainer}>
      <Image
        src={singleProduct.image}
        width={300}
        height={300}
        alt={singleProduct.title}
        style={{ objectFit: "contain" }}
      />

      <h3 className={styles.title}>
        {singleProduct.title}
      </h3>

      <p className={styles.desc}>
        {singleProduct.description}
      </p>

      <p>
        <strong>Category:</strong>{" "}
        {singleProduct.category}
      </p>

      <p>
        <strong>Price:</strong> $
        {singleProduct.price}
      </p>

      <p>
        <strong>Rating:</strong> ⭐{" "}
        {singleProduct.rating.rate}
      </p>

      <p>
        <strong>Reviews:</strong>{" "}
        {singleProduct.rating.count}
      </p>
    </div>
    ;
}

export default page;