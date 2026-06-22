"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createTodo } from "@/api/todo";
import styles from "./TodoInput.module.css";

export default function TodoInput() {
  const [value, setValue] = useState("");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleAdd = async () => {
    if (isLoading) return;

    const name = value.trim();

    if (!name) return;

    try {
      setIsLoading(true);

      await createTodo(name);

      setValue("");

      router.refresh();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles["todo-input-wrap"]}>
      <div className={styles["todo-input"]}>
        <input
          type="text"
          placeholder="할 일을 입력해주세요"
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={e => {
            if (e.key === "Enter") {
              handleAdd();
            }
          }}
        />
      </div>

      <button
        type="button"
        className={styles["todo-add-btn"]}
        onClick={handleAdd}
        disabled={isLoading || value.trim() === ""}>
        <span className={styles["ic-plus"]}></span>
        추가하기
      </button>
    </div>
  );
}
