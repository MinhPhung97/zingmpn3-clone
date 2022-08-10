import config from '~/configs';

//Pages
import { Home, Personal, Following, Radio, Zingchart, NewMusic, Catalog, Top, MV } from '~/pages';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.personal, component: Personal },
    { path: config.routes.following, component: Following },
    { path: config.routes.radio, component: Radio },
    { path: config.routes.zingchart, component: Zingchart },
    { path: config.routes.newMusic, component: NewMusic },
    { path: config.routes.catalog, component: Catalog },
    { path: config.routes.top, component: Top },
    { path: config.routes.mv, component: MV },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
