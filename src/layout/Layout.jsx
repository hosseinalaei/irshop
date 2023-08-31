import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import SidebarMenu from "../components/sidebarMenu/SidebarMenu";
import ProductsPage from "../pages/products/Products";
import AddProductPage from "../pages/products/AddProduct";
import CategoriesPage from "../pages/categories/CategoriesPage";
import AddCategoryPage from "../pages/categories/addCategory/AddCategory";
import RolesPage from "../pages/roles/RolesPage";

function Layout() {
  return (
    <div className="flex w-full h-screen">
      <div className="sticky top-0 hidden w-1/4 h-screen py-10 mr-10 lg:block">
        <SidebarMenu />
      </div>
      <div className="w-full h-screen py-10 mx-10 overflow-scroll">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route>
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/add-product" element={<AddProductPage />} />
            <Route
              path="/products/edit-product/:id"
              element={<AddProductPage />}
            />
          </Route>
          <Route>
            <Route path="/categories" element={<CategoriesPage />} />
            <Route
              path="/categories/add-category"
              element={<AddCategoryPage />}
            />
          </Route>
          <Route path="/roles" element={<RolesPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default Layout;
