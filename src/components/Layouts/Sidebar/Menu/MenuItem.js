import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, playerIcon, liveIcon, onClick }) {
    return (
        <NavLink to={to} onClick={onClick} className={(nav) => cx('menu-item', { active: nav.isActive })}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('title')}>{title}</span>
            <span className={cx('live-icon')}>{liveIcon}</span>
            <span className={cx('player-icon')}>{playerIcon}</span>
        </NavLink>
    );
}

export default MenuItem;
