import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import images from '~/assets/images/';
import Menu, { MenuItem } from './Menu';
import config from '~/configs';
import {
    PersonalIcon,
    DiscoverIcon,
    Zingchart,
    Radio,
    Following,
    PlayerIcon,
    LiveIcon,
    NewMusicIcon,
    CatalogIcon,
    TopIcon,
    MvIcon,
} from '~/components/Icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('logo')}>
                <Link to={config.routes.home}>
                    <img src={images.logo} alt="logo" className={cx('logo-img')} />
                </Link>
            </div>

            <div className={cx('sidebar-above')}>
                <Menu className={cx('inner')}>
                    <MenuItem title="Cá Nhân" to={config.routes.personal} icon={<PersonalIcon />}></MenuItem>
                    <MenuItem title="Khám Phá" to={config.routes.home} icon={<DiscoverIcon />}></MenuItem>
                    <MenuItem
                        title="#zingchart"
                        to={config.routes.zingchart}
                        icon={<Zingchart />}
                        playerIcon={<PlayerIcon />}
                    ></MenuItem>
                    <MenuItem
                        title="Radio"
                        to={config.routes.radio}
                        icon={<Radio />}
                        liveIcon={<LiveIcon />}
                        playerIcon={<PlayerIcon />}
                    ></MenuItem>
                    <MenuItem title="Theo Dõi" to={config.routes.following} icon={<Following />}></MenuItem>
                </Menu>
            </div>

            <div className={cx('sidebar-under')}>
                <div className={cx('menu-scroll')}>
                    <Menu>
                        <MenuItem
                            title="Nhạc mới"
                            to={config.routes.newMusic}
                            icon={<NewMusicIcon />}
                            playerIcon={<PlayerIcon />}
                        />
                        <MenuItem title="Thể loại" to={config.routes.catalog} icon={<CatalogIcon />} />
                        <MenuItem title="Top 100" to={config.routes.top} icon={<TopIcon />} />
                        <MenuItem title="MV" to={config.routes.mv} icon={<MvIcon />} />
                    </Menu>

                    <div className={cx('sidebar-under-login')}>
                        <div className={cx('login-text')}>Đăng nhập để khám phá playlist dành riêng cho bạn</div>
                        <button className={cx('login-btn')}>
                            <span>Đăng nhập</span>
                        </button>
                    </div>
                    <div className={cx('login-vip')}>
                        <div className={cx('login-text')}>Nghe nhạc không quảng cáo cùng kho nhạc VIP</div>
                        <a className={cx('login-vip-btn')} target="_blank" href="/">
                            NÂNG CẤP VIP
                        </a>
                    </div>
                </div>
            </div>

            <div className={cx('add-playlist')}>
                <button className={cx('add-btn')}>
                    <FontAwesomeIcon icon={faPlus} className={cx('add-icon')} />
                    <span className={cx('add-text')}>Tạo playlist mới</span>
                </button>
            </div>
        </aside>
    );
}

export default Sidebar;
