import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Images.module.scss';

const Images = forwardRef(({ src, alt, className, ...props }, ref) => {
    const [fallback, setFallBack] = useState([]);

    const handleError = () => {
        setFallBack(images.noImage);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            {...props}
            alt={alt}
            onError={handleError}
        />
    );
});

export default Images;
