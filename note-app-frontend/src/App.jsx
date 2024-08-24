import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NotePages from "./Pages/NotePages"
import LoginPage from "./Pages/LoginPage"
import SignupPage from "./Pages/SignupPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/notes' element={<NotePages />} />
      </Routes>
    </Router>
  )
}

export default App;