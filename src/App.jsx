import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import homePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
function App () {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<homePage/>}></Route>
          <Route path="/contacts/:id" element={<contactPage/>}></Route>
          <Router path="/auth/login" element={<LoginPage/>}></Router>
          <Router path="*" element={<NotFoundPage/>}></Router>
        </Routes>
      </Router>
  );
}
export default App;