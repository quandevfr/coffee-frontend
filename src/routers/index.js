import Home from 'src/pages/home';
import Products from 'src/pages/products';
import Abouts from 'src/pages/abouts';
import Contact from 'src/pages/contact/index ';

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
    path: '/abouts',
    component: Abouts,
  },
  {
    path: '/contact',
    component: Contact,
  },
];

// Private Router
const privateRoutes = [];

export { publicRoutes, privateRoutes };
