"use client";

import { useRef } from "react";
import styles from "./MemoTextarea.module.css";

type Props = {
  value?: string;
  onChange: (value: string) => void;
};

export default function MemoTextarea({ value, onChange }: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div
      className={styles["memo-input-wrap"]}
      onClick={() => textareaRef.current?.focus()}>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={e => onChange(e.target.value)}
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
