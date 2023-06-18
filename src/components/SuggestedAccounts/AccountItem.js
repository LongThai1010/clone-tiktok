import Tippy from '@tippyjs/react/headless'; // different import path!

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);
function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        // Using a wrapper <div> or <span> tag around the reference element (fix warning tippy)
        // solves this by creating a new parentNode context.
        <div>
            <Tippy interactive placement="bottom" offset={[-20, 0]} delay={[800, 0]} render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/7036545171088998401.jpeg?x-expires=1687150800&x-signature=GO3F8g7uGEB%2BulmrEpFYaJRFSzQ%3D"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>Long thai</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Skateboarding (ToS)</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}


export default AccountItem;
