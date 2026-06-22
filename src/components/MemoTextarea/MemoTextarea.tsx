"use client";

import { useRef } from "react";
import styles from "./MemoTextarea.module.css";

export default function MemoTextarea() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className={styles["memo-input-wrap"]} onClick={() => textareaRef.current?.focus()}>
      <textarea
        ref={textareaRef}
        rows={1}
        onInput={e => {
          const target = e.currentTarget;
          target.style.height = "auto";
          target.style.height = `${target.scrollHeight}px`;
        }}
      />
    </div>
  );
}
