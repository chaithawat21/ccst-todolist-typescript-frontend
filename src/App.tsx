import './App.css';
import AddForm from './components/AddForm';
import Container from './components/Container';
import Header from './components/Header';
import List from './components/List';
import TodoContextProvider from './context/TodoContext';

function App() {
  return (
    <div className='bg-red-50 h-screen pt-36'>
      <TodoContextProvider>
        <Container>
          <Header />
          <AddForm />
          <List />
        </Container>
      </TodoContextProvider>
    </div>
  );
}

export default App;
