import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import Auth from "./auth/Auth";
import ProtectedRoute from "./utils/ProtectedRoute";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import RolesPage from "./pages/roles/RolesPage";
import CategoriesPage from "./pages/categories/CategoriesPage";
import AddCategoryPage from "./pages/categories/addCategory/AddCategory";
import ProductsPage from "./pages/products/Products";
import AddProductPage from "./pages/products/AddProduct";
import PolicyPage from "./pages/policy/PolicyPage";
import AddNewPolicyPage from "./pages/policy/addPolicy/AddNewPolicyPage";
import UsersPage from "./pages/users/UsersPage";
import SliderPage from "./pages/slider/SliderPage";
import CreateSlider from "./components/slider/CreateSlider";
import Orders from "./components/orders/Orders";
import CommentsPage from "./pages/comments/CommentsPage";
import SpecificationPage from "./pages/specification/SpecificationPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={"/"}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
