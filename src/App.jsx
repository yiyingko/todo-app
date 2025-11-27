import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TodoPanel from './components/TodoPanel/TodoPanel';

function App() {
  return (
    <>
      <Header />
      <main>
        <TodoPanel />
      </main>
      <Footer />
    </>
  );
}

export default App;
