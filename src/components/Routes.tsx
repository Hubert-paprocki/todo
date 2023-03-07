import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import ToDoPage from "../pages/ToDoPage"
import LoginPage from "../pages/LoginPage"

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
    <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/todos" element={<ToDoPage/>} />
            </Routes>
            </BrowserRouter>
  );
};

export default AppRoutes;