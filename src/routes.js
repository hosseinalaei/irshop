import Login from "./auth/Login";
// import Dashboard from './pages/Dashboard'
import RolesPage from "./pages/roles/RolesPage";
import CategoriesPage from "./pages/categories/CategoriesPage";
import AddCategory from "./pages/categories/addCategory/AddCategory";
import ProductsPage from "./pages/products/Products";
import AddProductPage from "./pages/products/AddProduct";
import PolicyPage from "./pages/policy/PolicyPage";
import UsersPage from "./pages/users/UsersPage";
import SliderPage from "./pages/slider/SliderPage";
import SpecificationPage from "./pages/specification/SpecificationPage";
import CommentsPage from "./pages/comments/CommentsPage";
import AddCategoryPage from "./pages/categories/addCategory/AddCategory";
import AddNewPolicyPage from "./pages/policy/addPolicy/AddNewPolicyPage";
import CreateSlider from "./components/slider/CreateSlider";
import DashboardPage from "./pages/Dashboard";
import AddSpecification from "./components/specification/AddSpecification";
import GroupsList from "./components/specification/groupsSpecs/GroupsList";
import Groups from "./components/specification/groupsSpecs/Groups";
import AddGroupPage from "./pages/specification/addGroup/AddGroupPage";
import AddGroup from "./components/specification/groupsSpecs/addGroup/AddGroup";
const routes = [
  {
    id: 1,
    path: "/login",
    layout: "/auth",
    name: "Login Page",
    mini: "LP",
    component: <Login />,
    invisible: true,
  },
  {
    id: 2,
    path: "/dashboard",
    layout: "/admin",
    name: "داشبورد",
    icon: "house",
    component: <DashboardPage />,
  },
  {
    id: 3,
    path: "/roles",
    layout: "/admin",
    name: "نقش‌ها",
    icon: "pen-ruler",
    component: <RolesPage />,
  },
  {
    id: 4,
    collapse: true,
    // path: '/pamm',
    name: "دسته‌بندی محصولات",
    state: "openCat",
    icon: "table",
    subMenu: [
      {
        id: 5,
        path: "/categories",
        layout: "/admin",
        name: "لیست دسته‌بندی‌ها",
        component: <CategoriesPage />,
        icon: "rectangle-list",
      },
      {
        id: 6,
        path: "/categories/add-category",
        layout: "/admin",
        name: "دسته‌بندی جدید",
        component: <AddCategory />,
        icon: "square-plus",
      },
    ],
  },
  {
    id: 7,
    collapse: true,
    // path: '/pamm',
    name: "محصولات",
    state: "openProd",
    icon: "cubes",
    subMenu: [
      {
        id: 8,
        path: "/products",
        layout: "/admin",
        name: "لیست محصولات",
        component: <ProductsPage />,
        icon: "rectangle-list",
      },
      {
        id: 9,
        path: "/products/add-product",
        layout: "/admin",
        name: "محصول جدید",
        component: <AddProductPage />,
        icon: "square-plus",
      },
    ],
  },
  {
    id: 10,
    path: "/policies",
    layout: "/admin",
    name: "سیاست‌ها (policy)",
    icon: "check-double",
    component: <PolicyPage />,
  },
  {
    id: 11,
    path: "/users",
    layout: "/admin",
    name: "کاربران",
    icon: "person",
    component: <UsersPage />,
  },
  {
    id: 12,
    path: "/slider",
    layout: "/admin",
    name: "اسلایدر",
    icon: "images",
    component: <SliderPage />,
  },
  {
    id: 13,
    collapse: true,
    // state: "openProd",
    path: "/specification",
    layout: "/admin",
    name: "ویژگی‌ها",
    icon: "images",
    // component: <SpecificationPage />,
    subMenu: [
      {
        id: 8,
        path: "/specs",
        layout: "/admin",
        name: "مدیریت ویژگی‌ها",
        component: <SpecificationPage />,
        icon: "rectangle-list",
      },
      {
        id: 9,
        path: "/specs/groups",
        layout: "/admin",
        name: "مدیریت گروه ویژگی‌ها",
        component: <Groups />,
        icon: "square-plus",
      },
      {
        id: 10,
        path: "/specs/category",
        layout: "/admin",
        name: "مدیریت دسته‌بندی ویژگی‌ها",
        component: <Groups />,
        icon: "square-plus",
      },
    ],
  },
  {
    id: 14,
    path: "/comments",
    layout: "/admin",
    name: "نظرات",
    icon: "message",
    component: <CommentsPage />,
  },
  {
    invisible: true,
    id: 15,
    path: "/products/edit-product/:id",
    layout: "/admin",
    name: "نظرات",
    icon: "message",
    component: <AddProductPage />,
  },
  {
    invisible: true,
    id: 16,
    path: "/categories/edit-category/:id",
    layout: "/admin",
    name: "نظرات",
    icon: "message",
    component: <AddCategoryPage />,
  },
  {
    invisible: true,
    id: 17,
    path: "/policies/add-policy/",
    layout: "/admin",
    name: "نظرات",
    icon: "message",
    component: <AddNewPolicyPage />,
  },
  {
    invisible: true,
    id: 18,
    path: "/policies/edit-policy/:id",
    layout: "/admin",
    name: "نظرات",
    icon: "message",
    component: <AddNewPolicyPage />,
  },
  {
    invisible: true,
    id: 19,
    path: "/create-slider/",
    layout: "/admin",
    name: "نظرات",
    icon: "message",
    component: <CreateSlider />,
  },
  {
    invisible: true,
    id: 20,
    path: "/add-specification/",
    layout: "/admin",
    name: "ویژگی جدید",
    icon: "message",
    component: <AddSpecification />,
  },
  {
    invisible: true,
    id: 21,
    path: "/specification/groups/add-group",
    layout: "/admin",
    name: "گروه جدید",
    icon: "message",
    component: <AddGroupPage />,
  },
  {
    invisible: true,
    id: 22,
    path: "/specification/attributes/edit-attribute/:id",
    layout: "/admin",
    name: "ویرایش ویژگی",
    icon: "message",
    component: <AddSpecification />,
  },
  {
    invisible: true,
    id: 22,
    path: "/specification/groups/edit-group/:id",
    layout: "/admin",
    name: "ویرایش گروه",
    icon: "message",
    component: <AddGroup />,
  },
];

export default routes;
