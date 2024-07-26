import ListItem from './ListItem'
import { useTodo } from '../context/TodoContext'





function List() {

  const {todos} = useTodo()

  return (
    <div className='flex flex-col gap-y-3 my-6'>
{todos.map(el => 
    <ListItem key={el.id} todo={el} />
)}

    </div>
  )
}

export default List