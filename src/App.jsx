import './App.css';
import ClickToView from './components/clicktoview/ClickToView';
import SquashAndStretch from './components/squashandstretch/SquashAndStretch';

function App() {
  return (
    <main className='app'>
      <SquashAndStretch />
      <ClickToView />
    </main>
  );
}

export default App;
