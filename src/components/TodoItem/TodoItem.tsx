"use client";

import Link from "next/link";
import styles from "./TodoItem.module.css";

type TodoItemProps = {
  id: number;
  text: string;
  isDone?: boolean;
  onToggle?: (id: number) => void;
};

export default function TodoItem({ id, text, isDone = false, onToggle }: TodoItemProps) {
  return (
    <div className={styles["todo-item"]}>
      <label className={styles["todo-item-label"]}>
        <input type="checkbox" checked={isDone} onChange={() => onToggle?.(id)} />
        <span></span>
      </label>
      <Link
        href={`/items/${id}`}
        className={isDone ? `${styles["todo-item-text"]} ${styles.done}` : styles["todo-item-text"]}>
        {text}
      </Link>
    </div>
  );
}
