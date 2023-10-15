import Login from './auth/Login'
import Dashboard from './pages/Dashboard'
import RolesPage from './pages/roles/RolesPage'
import CategoriesPage from './pages/categories/CategoriesPage'
import AddCategory from './pages/categories/addCategory/AddCategory'
import ProductsPage from './pages/products/Products'
import AddProductPage from './pages/products/AddProduct'
import PolicyPage from './pages/policy/PolicyPage'
import UsersPage from './pages/users/UsersPage'
import SliderPage from './pages/slider/SliderPage'
import SpecificationPage from './pages/specification/SpecificationPage'
import CommentsPage from './pages/comments/CommentsPage'
const routes = [
    {
        id:1,
        path: '/login',
        layout: '/auth',
        name: 'Login Page',
        mini: 'LP',
        component: <Login />,
        invisible: true,
      },
    {
        id:2,
        path: '/dashboard',
        layout: '/admin',
        name: 'داشبورد',
        icon: 'house',
        component: <Dashboard />,
      },
      {
        id:3,
        path: '/roles',
        layout: '/admin',
        name: 'نقش‌ها',
        icon: 'pen-ruler',
        component: <RolesPage />,
      },
      {
        id:4,
        collapse: true,
        // path: '/pamm',
        name: 'دسته‌بندی محصولات',
        state: 'openCat',
        icon: 'table',
        subMenu: [  
          {
            id:5,
            path: '/categories',
            layout: '/admin',
            name: 'لیست دسته‌بندی‌ها',
            component: <CategoriesPage />,
            icon: 'rectangle-list',
          },
          {
            id:6,
            path: '/categories/add-category',
            layout: '/admin',
            name: 'دسته‌بندی جدید',
            component: <AddCategory />,
            icon: 'square-plus',
          },
        ],
      },
      {
        id:7,
        collapse: true,
        // path: '/pamm',
        name: 'محصولات',
        state: 'openProd',
        icon: 'cubes',
        subMenu: [  
          {
            id:8,
            path: '/products',
            layout: '/admin',
            name: 'لیست محصولات',
            component: <ProductsPage />,
            icon: 'rectangle-list',
          },
          {
            id:9,
            path: '/products/add-product',
            layout: '/admin',
            name: 'محصول جدید',
            component: <AddProductPage />,
            icon: 'square-plus',
          },
        ],
      },
      {
        id:10,
        path: '/policies',
        layout: '/admin',
        name: 'سیاست‌ها (policy)',
        icon: 'check-double',
        component: <PolicyPage />,
      },
      {
        id:11,
        path: '/users',
        layout: '/admin',
        name: 'کاربران',
        icon: 'person',
        component: <UsersPage />,
      },
      {
        id:12,
        path: '/slider',
        layout: '/admin',
        name: 'اسلایدر',
        icon: 'images',
        component: <SliderPage />,
      },
      {
        id:13,
        path: '/specification',
        layout: '/admin',
        name: 'ویژگی‌ها',
        icon: 'images',
        component: <SpecificationPage />,
      },
      {
        id:14,
        path: '/comments',
        layout: '/admin',
        name: 'نظرات',
        icon: 'message',
        component: <CommentsPage />,
      },
]

export default routes;