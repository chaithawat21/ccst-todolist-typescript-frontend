import { Todo } from "../types/todotpes";
import { useTodo } from "../context/TodoContext";

interface ListItemProps {
  todo: Todo;
}

const ListItem = ({ todo }: ListItemProps) => {
  const { onDeleteTodo } = useTodo(); 
  return (
    <div className='flex flex-row justify-between border border-gray-100 h-14 items-center px-5 rounded-md'>
      <div>{todo.title}</div>
      <div>
        <button
          onClick={() => onDeleteTodo(todo.id)}
          className='bg-red-500 text-white px-3 py-1 rounded-md active:scale-95'
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ListItem;