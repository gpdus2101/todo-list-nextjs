export interface Todo {
  id: number;
  tenantId: string;
  name: string;
  memo: string;
  imageUrl: string;
  isCompleted: boolean;
}

const TENANT_ID = "gpdus2101";
const BASE_URL = `https://assignment-todolist-api.vercel.app/api/${TENANT_ID}`;

// 목록 조회
export async function getTodos(): Promise<Todo[]> {
  const res = await fetch(`${BASE_URL}/items?page=1&pageSize=100`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch todos");
  }

  return res.json();
}

// 생성
export async function createTodo(name: string): Promise<Todo> {
  const res = await fetch(`${BASE_URL}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });

  if (!res.ok) {
    throw new Error("Failed to create todo");
  }

  return res.json();
}

// 상세 조회
export async function getTodo(itemId: string): Promise<Todo> {
  const res = await fetch(`${BASE_URL}/items/${itemId}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch todo detail");
  }

  return res.json();
}

// 수정
export async function updateTodo(
  itemId: string,
  data: {
    name?: string;
    isCompleted?: boolean;
    memo?: string;
    imageUrl?: string;
  },
): Promise<Todo> {
  const res = await fetch(`${BASE_URL}/items/${itemId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to update todo");
  }

  return res.json();
}

// 삭제
export async function deleteTodo(itemId: string) {
  const res = await fetch(`${BASE_URL}/items/${itemId}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete todo item");
  }

  return res.json();
}

// 이미지 업로드
export async function uploadImage(file: File): Promise<{ url: string }> {
  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch(`${BASE_URL}/images/upload`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Failed to upload image to todo item");
  }

  return res.json();
}
