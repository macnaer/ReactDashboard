import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/auth/signin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<h1>Sign Up</h1>} />
    </Routes>
  );
}

export default App;
