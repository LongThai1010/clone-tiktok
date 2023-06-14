import Tippy from '@tippyjs/react/headless'; // different import path!

import 'tippy.js/dist/tippy.css'; // optional
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defautFn = () => {};

function Menu({ children, items = [], onChange = defautFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            visible
            interactive
            delay={[0, 500]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            ></Header>
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
