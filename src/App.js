import './App.css';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import logo from './logo192.png';
import BooksContainer from './components/BooksContainer';
import Categories from './redux/categories/categories';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <nav>
          <h1>Bookstore CMS</h1>
          <ul>
            <Link to="/">BOOKS</Link>
            <Link to="/categories">CATEGORIES</Link>
          </ul>
          <img src={logo} className="App-logo" alt="logo" />
        </nav>
        <Routes>
          <Route path="/" element={<BooksContainer />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
