import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/266555495_1088418351983202_9171577576454690549_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=ot8mRFOvHHMAX-RtjJo&_nc_ht=scontent.fhan14-2.fna&oh=00_AfCJSFU6n6fTyiyqR8vlT08c6oifntKfZ837bHDJrSjWiw&oe=648DF2E8" alt="Quynh" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Long Thai</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>Long Thai </span>
            </div>
        </div>
    );
}

export default AccountItem;
