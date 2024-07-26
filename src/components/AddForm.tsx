import { FormEvent, useState} from 'react'
import { useTodo } from '../context/TodoContext';



function AddForm() {
  const [title, setTitle] = useState<string>("");
  const { onAddTodo } = useTodo();

const handleSubmit = (e: FormEvent) => {
  e.preventDefault();

  onAddTodo({title});

  setTitle("");
}

  return (
    <form onSubmit={handleSubmit}>
        <div className='flex flex-row gap-x-5'>
            <input className='border flex-1 rounded-sm outline-none px-3 h-9' type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
            <button className='bg-blue-500 text-white px-3 rounded-md active:scale-95'>Add</button>
        </div>
    </form>
  )
}

export default AddForm