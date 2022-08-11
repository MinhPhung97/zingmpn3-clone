import classNames from 'classnames/bind';
import styles from './Buttons.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({ to, href, primary, outline, btn, large, children, className, onClick, ...passProps }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        btn,
        large,
    });

    return (
        <Comp className={classes} {...props}>
            {children}
        </Comp>
    );
}

export default Button;
