import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <Link href="#">Conditions of Use</Link>
        <Link href="#">Privacy Notice</Link>
        <Link href="#">Interest-Based Ads</Link>
      </div>

      <p className={styles.copy}>
        © 1996–2024, Amazon.com, Inc. or its affiliates
      </p>
    </footer>
  );
}
