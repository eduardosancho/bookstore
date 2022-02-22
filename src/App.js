import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Books from './redux/books/books';
import Categories from './redux/categories/categories';

function App() {
  return (
    <div className="App">
      <nav>
        <h1>Bookstore CMS</h1>
        <ul>
          <Link to="/">BOOKS</Link>
          <Link to="/categories">CATEGORIES</Link>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
