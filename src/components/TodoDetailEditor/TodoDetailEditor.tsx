"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./TodoDetailEditor.module.css";
import MemoTextarea from "@/components/MemoTextarea/MemoTextarea";
import { updateTodo, deleteTodo, uploadImage } from "@/api/todo";
import { Todo } from "@/api/todo";

type Props = {
  todo: Todo;
};

export default function TodoDetailEditor({ todo }: Props) {
  const router = useRouter();

  const [name, setName] = useState(todo.name ?? "");
  const [memo, setMemo] = useState(todo.memo ?? "");
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState<string>(todo.imageUrl || "");

  useEffect(() => {
    if (!todo) return;

    setName(todo.name ?? "");
    setMemo(todo.memo ?? "");
    setIsCompleted(todo.isCompleted);
    setImagePreview(todo.imageUrl || "");
    setImageFile(null);
  }, [todo]);

  const isDirty =
    name.trim() !== (todo.name ?? "").trim() ||
    (memo ?? "").trim() !== (todo.memo ?? "").trim() ||
    isCompleted !== todo.isCompleted ||
    imageFile !== null;

  // 이미지 파일 선택
  const openFile = () => {
    fileRef.current?.click();
  };

  // 이미지 업로드
  const handleFileChange = async e => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 5MB 제한
    if (file.size > 5 * 1024 * 1024) {
      alert("이미지는 5MB 이하만 가능합니다.");
      return;
    }

    // 파일명 영어 체크
    const isEnglish = /^[a-zA-Z0-9._-]+$/.test(file.name);
    if (!isEnglish) {
      alert("파일명은 영어만 가능합니다.");
      return;
    }

    // SVG 차단
    if (file.type === "image/svg+xml") {
      alert("SVG 파일은 업로드할 수 없습니다.");
      return;
    }

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  // 저장
  const handleSave = async () => {
    let imageUrl = todo.imageUrl;

    // 이미지 업로드가 있을 때만
    if (imageFile) {
      const res = await uploadImage(imageFile);
      imageUrl = res.url;
    }

    await updateTodo(todo.id, {
      name,
      memo,
      isCompleted,
      imageUrl,
    });

    alert("수정이 완료되었습니다.");
    router.push("/");
  };

  // 삭제
  const handleDelete = async () => {
    const ok = confirm("정말 삭제하시겠습니까?");

    if (!ok) return;

    await deleteTodo(todo.id);

    alert("삭제되었습니다.");
    router.push("/");
  };

  return (
    <main className={styles["detail-page"]}>
      <div className="inner">
        <div
          className={styles["todo-item-text"]}
          data-type={isCompleted ? "done" : "todo"}>
          <span
            className={styles["todo-item-label"]}
            onClick={() => setIsCompleted(prev => !prev)}></span>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            style={{
              width: `${Math.max(name.length, 1)}ch`,
            }}
          />
        </div>

        <div className={styles["detail-content"]}>
          <div className={styles["todo-item-img"]}>
            <input
              type="file"
              ref={fileRef}
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
            {imagePreview ? (
              <>
                <img src={imagePreview} alt="preview" />
                <div className={styles["edit-btn"]} onClick={openFile}></div>
              </>
            ) : (
              <div className={styles["plus-btn"]} onClick={openFile}></div>
            )}
          </div>
          <div className={styles["todo-item-memo"]}>
            <span>Memo</span>
            <MemoTextarea value={memo ?? ""} onChange={setMemo} />
          </div>
        </div>

        <div className={styles["todo-btn-box"]}>
          <button
            type="button"
            className={styles["todo-edit-btn"]}
            disabled={!isDirty}
            onClick={handleSave}>
            <span></span>
            수정 완료
          </button>
          <button
            type="button"
            className={styles["todo-del-btn"]}
            onClick={handleDelete}>
            <span></span>
            삭제하기
          </button>
        </div>
      </div>
    </main>
  );
}
