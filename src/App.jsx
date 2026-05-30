import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import ClickToView from './components/clicktoview/ClickToView';
import SquashAndStretch from './components/squashandstretch/SquashAndStretch';

function App() {
  return (
    <main className='app'>
      <Routes>
        <Route
          path='/'
          element={
            <section className='home'>
              <h1>Small UI experiments built while I learn.</h1>
              <p className='intro'>
                Each page is a focused animation or interaction experiment. Pick
                one to view.
              </p>

              <ul className='experiment-links'>
                <li>
                  <Link className='experiment-link' to='/squash-and-stretch'>
                    Squash and Stretch
                  </Link>
                </li>
                <li>
                  <Link className='experiment-link' to='/click-to-view'>
                    Click to View
                  </Link>
                </li>
              </ul>
            </section>
          }
        />
        <Route path='/squash-and-stretch' element={<SquashAndStretch />} />
        <Route path='/click-to-view' element={<ClickToView />} />
      </Routes>
    </main>
  );
}

export default App;
