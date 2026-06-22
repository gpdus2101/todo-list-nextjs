"use client";

import TodoInput from "@/components/TodoInput/TodoInput";
import TodoItem from "@/components/TodoItem/TodoItem";
import styles from "./page.module.css";

const todoList = [
  { id: 1, text: "공부하기", isDone: false },
  { id: 2, text: "운동하기", isDone: false },
];

const doneList = [
  { id: 3, text: "밥 먹기", isDone: true },
  { id: 4, text: "과제하기", isDone: true },
];

// 임시 함수
const handleToggle = (id: number) => {};
const handleDelete = (id: number) => {};

export default function Home() {
  return (
    <main className={styles["main-page"]}>
      <div className="inner">
        <TodoInput />

        <div className={styles["list-wrap"]}>
          <section>
            <div className={styles["tit-todo"]}>
              <img src="/images/todo.svg" alt="to do" />
            </div>
            {todoList.length ? (
              todoList.map(item => (
                <TodoItem key={item.id} id={item.id} text={item.text} isDone={item.isDone} onToggle={handleToggle} />
              ))
            ) : (
              <div className={styles["empty-todo"]}>
                <div className={styles["empty-img-box"]}>
                  <img src="/images/empty-todo.svg" alt="" />
                </div>
                <p>
                  할 일이 없어요.
                  <br />
                  TODO를 새롭게 추가해주세요!
                </p>
              </div>
            )}
          </section>

          <section>
            <div className={styles["tit-done"]}>
              <img src="/images/done.svg" alt="done" />
            </div>
            {doneList.length ? (
              doneList.map(item => (
                <TodoItem key={item.id} id={item.id} text={item.text} isDone={item.isDone} onToggle={handleToggle} />
              ))
            ) : (
              <div className={styles["empty-done"]}>
                <div className={styles["empty-img-box"]}>
                  <img src="/images/empty-done.svg" alt="" />
                </div>
                <p>
                  아직 다 한 일이 없어요.
                  <br />
                  해야 할 일을 체크해보세요!
                </p>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
