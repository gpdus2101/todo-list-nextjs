import styles from "./page.module.css";
import MemoTextarea from "@/components/MemoTextarea/MemoTextarea";

export default async function TodoDetailPage({ params }: { params: Promise<{ itemId: string }> }) {
  const { itemId } = await params;
  return (
    <main className={styles["detail-page"]}>
      <div className="inner">
        <div className={styles["todo-item-text"]} data-type="done">
          <span className={styles["todo-item-label"]}></span>
          <input type="text" defaultValue="비타민 챙겨 먹기" />
        </div>

        <div className={styles["detail-content"]}>
          <div className={styles["todo-item-img"]}>
            <div className={styles["plus-btn"]}></div>
            {/* <div className="edit-btn"></div> */}
          </div>
          <div className={styles["todo-item-memo"]}>
            <span>Memo</span>
            <MemoTextarea />
          </div>
        </div>

        <div className={styles["todo-btn-box"]}>
          <button type="button" className={styles["todo-edit-btn"]} disabled>
            <span></span>
            수정 완료
          </button>
          <button type="button" className={styles["todo-del-btn"]}>
            <span></span>
            삭제하기
          </button>
        </div>
      </div>
    </main>
  );
}
