import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import Button from '~/components/Buttons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('header')}>
            <div>
                <Button primary to="/login" onClick={() => alert('hi')}>
                    Log in
                </Button>
            </div>
        </header>
    );
}

export default Header;
