import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
function App () {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/contacts/:id" element={<contactPage/>}></Route>
          <Route path="/auth/login" element={<LoginPage/>}></Route>
          <Route path="*" element={<NotFoundPage/>}></Route>
        </Routes>
      </Router>
  );
}
export default App;