import Home from '~/pages/Home';
import Songs from '~/pages/Songs';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/bai-hat', component: Songs },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
