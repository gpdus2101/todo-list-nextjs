import TodoInput from "@/components/TodoInput/TodoInput";
import TodoItem from "@/components/TodoItem/TodoItem";
import { getTodos } from "@/api/todo";
import styles from "./page.module.css";

export default async function Home() {
  const todos = await getTodos();
  const todoList = todos.filter(item => !item.isCompleted);
  const doneList = todos.filter(item => item.isCompleted);

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
                <TodoItem
                  key={item.id}
                  id={item.id}
                  text={item.name}
                  isDone={item.isCompleted}
                />
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
                <TodoItem
                  key={item.id}
                  id={item.id}
                  text={item.name}
                  isDone={item.isCompleted}
                />
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
