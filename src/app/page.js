"use client";
import styles from "./page.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resp) => resp.json())
      .then((res) => setProducts(res));
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {products?.map((item) => (
          <div className={styles.itemWrapper} key={item.id}>
            <Image
              src={item.image}
              width={100}
              height={80}
              objectFit="contain"
              alt="random"
            />
            <div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.description}</p>
            </div>
            <Link href={`/products/${item.id}`}>
              <p>see details</p>
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
}
