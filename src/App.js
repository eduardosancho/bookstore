import './App.css';
import {
  BrowserRouter, Routes, Route, NavLink,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import MediaQuery from 'react-responsive';
import getBooks from './redux/actions/getBooks';
import BooksContainer from './components/BooksContainer';
import Categories from './redux/categories/categories';
import logo from './logo192.png';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  return (
    <div className="App">

      <BrowserRouter>
        <nav>
          <h1>Bookstore CMS</h1>
          <MediaQuery minWidth={860}>
            <ul>
              <li>
                <NavLink activeclassname="active" to="/">BOOKS</NavLink>
              </li>
              <li>
                <NavLink activeclassname="active" to="/categories">CATEGORIES</NavLink>
              </li>
            </ul>
          </MediaQuery>
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
