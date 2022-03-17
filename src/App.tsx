import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import styles from './index.module.scss';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
