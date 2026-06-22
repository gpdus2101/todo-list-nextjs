import TodoDetailEditor from "@/components/TodoDetailEditor/TodoDetailEditor";
import { getTodo } from "@/api/todo";

export default async function TodoDetailPage({
  params,
}: {
  params: Promise<{ itemId: string }>;
}) {
  const { itemId } = await params;
  const todo = await getTodo(itemId);

  return <TodoDetailEditor todo={todo} />;
}
