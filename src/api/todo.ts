const TENANT_ID = "gpdus2101";
const BASE_URL = `https://assignment-todolist-api.vercel.app/api/${TENANT_ID}`;

// 목록 조회
export async function getTodos() {
    const res = await fetch(`${BASE_URL}/items`);
    return res.json();
}

// 생성
export async function createTodo(name: string) {
    const res = await fetch(`${BASE_URL}/items`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
    });

    return res.json();
}

// 상세 조회
export async function getTodo(itemId: string) {
    const res = await fetch(`${BASE_URL}/items/${itemId}`);
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
) {
    const res = await fetch(`${BASE_URL}/items/${itemId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return res.json();
}

// 삭제
export async function deleteTodo(itemId: string) {
    const res = await fetch(`${BASE_URL}/items/${itemId}`, {
        method: "DELETE",
    });

    return res.json();
}

// 이미지 업로드
export async function uploadImage(file: File) {
    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch(`${BASE_URL}/images/upload`, {
        method: "POST",
        body: formData,
    });

    return res.json();
}
