import Home from 'src/pages/home';
import Products from 'src/pages/products';
import Abouts from 'src/pages/abouts';
import Contact from 'src/pages/contact/index ';
import LogIn from 'src/layouts/logIn';

// Public Router
const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/products',
    component: Products,
  },
  {
    path: '/blog',
    component: Abouts,
  },
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '/login',
    component: LogIn,
  },
];

// Private Router
const privateRoutes = [];

export { publicRoutes, privateRoutes };
