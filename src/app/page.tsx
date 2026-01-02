"use client";

import Footer from "@/components/footer/Footer";
import styles from "./page.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resp) => resp.json())
      .then((res) => setProducts(res))
      .catch(console.error);
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {products.map((item) => (
          <div className={styles.itemWrapper} key={item.id}>
            <Image
              src={item.image}
              width={100}
              height={80}
              alt={item.title}
              style={{ objectFit: "contain" }}
            />

            <div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.description}</p>
            </div>

            <Link href={`/details/${item.id}`}>
              see details
            </Link>
          </div>
        ))}
      </main>

      <Footer />
    </div>
  );
}
