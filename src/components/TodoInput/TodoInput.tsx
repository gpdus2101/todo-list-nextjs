import styles from "./TodoInput.module.css";

export default function TodoInput() {
  return (
    <div className={styles["todo-input-wrap"]}>
      <div className={styles["todo-input"]}>
        <input type="text" placeholder="할 일을 입력해주세요" />
      </div>

      <button type="button" className={styles["todo-add-btn"]}>
        <span className={styles["ic-plus"]}></span>
        추가하기
      </button>
    </div>
  );
}
