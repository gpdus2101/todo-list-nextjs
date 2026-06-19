export default async function TodoDetailPage({ params }: { params: Promise<{ itemId: string }> }) {
    const { itemId } = await params;
    return <h1>상세 페이지 {itemId}</h1>;
}
