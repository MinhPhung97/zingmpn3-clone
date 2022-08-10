import classNames from 'classnames/bind';
import Header from '~/components/Layouts/Header';
import styles from './DefaultLayout.module.scss';
import Sidebar from '~/components/Layouts/Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Sidebar />
            <div className={cx('container')}>
                <Header />
                <div className={cx('main-page')}>{children}</div>
            </div>
            <div></div>
        </div>
    );
}

export default DefaultLayout;
