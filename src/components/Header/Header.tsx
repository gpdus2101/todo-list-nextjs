import Link from "next/link";
import "@/app/globals.css";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="inner">
        <h1 className="logo">
          <Link href="/">
            <img src="/images/logo.svg" alt="Do It - Todo List" />
          </Link>
        </h1>
      </div>
    </header>
  );
}
