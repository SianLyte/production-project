import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react';
import "app/styles/index.scss";


export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = "outline",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "backgroundInverted"
}


export enum ButtonSize {
    M = "size-m",
    L = "size-l",
    XL = "size-xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean
}


export const Button: FC<ButtonProps> = (props) => {
    const { children,
        className,
        square,
        theme,
        size,
        disabled,
        ...otherProps } = props;

    const mods: Record<string, boolean> = {
        [cls.square]: square,
        [cls.disabled]: disabled
    }

    return (
        <button
            className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
            {...otherProps}
            disabled={disabled}
        >
            {children}
        </button>
    )
}