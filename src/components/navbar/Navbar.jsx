"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";

const NAV_LIST = [
  {
    id: 1,
    title: "Main",
    url: "/",
  },
  {
    id: 2,
    title: "Cart",
    url: "/cart",
  },
  {
    id: 3,
    title: "Profile",
    url: "/profile",
  }
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbardiv}>
          {NAV_LIST.map((item) => (
            <div key={item.id}>
              <Link href={item.url}>
                <h3 className={pathname === item.url ? styles.activeTab : null}>
                  {item.title}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;