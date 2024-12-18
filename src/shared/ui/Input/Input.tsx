import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss'
import { InputHTMLAttributes, memo, useEffect, useRef } from 'react';


type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

// eslint-disable-next-line react/display-name
export const Input = memo((props: InputProps) => {
  const { value,
    className,
    onChange,
    type = "text",
    autofocus,
    ...otherProps } = props;

  const inputRef = useRef<HTMLInputElement>(null)


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChangeHandler = (e: any) => {
    onChange?.(e.target.value);
  }


  useEffect(() => {
    if (autofocus) {
      inputRef.current.focus();
    }
  }, [autofocus])

  return (
    <div className={classNames(cls.Input, {}, [className])}>
      <input
        ref={inputRef}
        onChange={onChangeHandler}
        value={value}
        {...otherProps}
        type={type} />

    </div>
  )
})