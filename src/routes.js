import Login from './pages/Login'
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
        path: '/login',
        layout: '/auth',
        name: 'Login Page',
        mini: 'LP',
        component: Login,
        invisible: true,
      },
    {
        path: '/dashboard',
        layout: '/admin',
        name: 'داشبورد',
        icon: 'house',
        component: Dashboard,
      },
      {
        path: '/roles',
        layout: '/admin',
        name: 'نقش‌ها',
        icon: 'pen-ruler',
        component: RolesPage,
      },
      {
        collapse: true,
        // path: '/pamm',
        name: 'دسته‌بندی محصولات',
        state: 'openCat',
        icon: 'table',
        subMenu: [  
          {
            path: '/categories',
            layout: '/admin',
            name: 'لیست دسته‌بندی‌ها',
            component: CategoriesPage,
            icon: 'rectangle-list',
          },
          {
            path: '/categories/add-category',
            layout: '/admin',
            name: 'دسته‌بندی جدید',
            component: AddCategory,
            icon: 'square-plus',
          },
        ],
      },
      {
        collapse: true,
        // path: '/pamm',
        name: 'محصولات',
        state: 'openProd',
        icon: 'cubes',
        subMenu: [  
          {
            path: '/products',
            layout: '/admin',
            name: 'لیست محصولات',
            component: ProductsPage,
            icon: 'rectangle-list',
          },
          {
            path: '/products/add-product',
            layout: '/admin',
            name: 'محصول جدید',
            component: AddProductPage,
            icon: 'square-plus',
          },
        ],
      },
      {
        path: '/policies',
        layout: '/admin',
        name: 'سیاست‌ها (policy)',
        icon: 'check-double',
        component: PolicyPage,
      },
      {
        path: '/users',
        layout: '/admin',
        name: 'کاربران',
        icon: 'preson',
        component: UsersPage,
      },
      {
        path: '/slider',
        layout: '/admin',
        name: 'اسلایدر',
        icon: 'images',
        component: SliderPage,
      },
      {
        path: '/specification',
        layout: '/admin',
        name: 'ویژگی‌ها',
        icon: 'images',
        component: SpecificationPage,
      },
      {
        path: '/comments',
        layout: '/admin',
        name: 'نظرات',
        icon: 'message',
        component: CommentsPage,
      },
]

export default routes;