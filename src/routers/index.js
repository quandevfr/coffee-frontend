import Home from 'src/pages/home';
import Products from 'src/pages/products';

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
];

// Private Router
const privateRoutes = [];

export { publicRoutes, privateRoutes };
