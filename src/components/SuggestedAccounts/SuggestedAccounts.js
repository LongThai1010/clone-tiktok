import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccounts({ lable }) {
    return (
        <div className={cx('wrraper')}>
            <p className={cx('lable')}>{lable}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            

            <p className={cx('more-btn')}>See more</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    lable: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
