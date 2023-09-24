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
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
    <BrowserRouter basename={"/"}>
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/" element={<App />}>
          <Route
            path=""
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="/" element={<Dashboard />} />
            <Route path="/roles" element={<RolesPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route
              path="/categories/add-category"
              element={<AddCategoryPage />}
            />
            <Route
              path="/categories/edit-category/:id"
              element={<AddCategoryPage />}
            />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/add-product" element={<AddProductPage />} />
            <Route
              path="/products/edit-product/:id"
              element={<AddProductPage />}
            />
            <Route path="/policies" element={<PolicyPage />} />
            <Route path="/policies/add-policy" element={<AddNewPolicyPage />} />
            <Route
              path="/policies/edit-policy/:id"
              element={<AddNewPolicyPage />}
            />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/slider" element={<SliderPage />} />
            <Route path="/create-slider" element={<CreateSlider />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/comments" element={<CommentsPage />} />
            <Route path="/specification" element={<SpecificationPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
