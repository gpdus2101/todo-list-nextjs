"use client";

import Link from "next/link";
import styles from "./TodoItem.module.css";
import { updateTodo } from "@/api/todo";
import { useRouter } from "next/navigation";

type TodoItemProps = {
  id: number;
  text: string;
  isDone?: boolean;
};

export default function TodoItem({ id, text, isDone = false }: TodoItemProps) {
  const router = useRouter();

  const handleToggle = async (current: boolean) => {
    await updateTodo(id.toString(), {
      isCompleted: !current,
    });

    router.refresh();
  };

  return (
    <div className={styles["todo-item"]}>
      <label className={styles["todo-item-label"]}>
        <input
          type="checkbox"
          checked={isDone}
          onChange={() => handleToggle(isDone)}
        />
        <span></span>
      </label>
      <Link
        href={`/items/${id}`}
        className={
          isDone
            ? `${styles["todo-item-text"]} ${styles.done}`
            : styles["todo-item-text"]
        }>
        {text}
      </Link>
    </div>
  );
}
