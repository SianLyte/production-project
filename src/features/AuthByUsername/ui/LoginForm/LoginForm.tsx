import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { loginActions } from "../..";
import { memo, useCallback } from 'react';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { Text, TextTheme } from 'shared/ui/Text/Text';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { username, password, isLoading, error } = useSelector(getLoginState);

  const onChangeUsername = useCallback((val: string) => {
    dispatch(loginActions.setUsername(val))
  }, [dispatch])

  const onChangePassword = useCallback((val: string) => {
    dispatch(loginActions.setPassword(val))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title='Авторизация'></Text>
      {error && <div>{<Text text={error} theme={TextTheme.ERROR} />}</div>}
      <Input
        autofocus
        placeholder={t("Введите логин")}
        className={cls.input}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        className={cls.input}
        placeholder={t("Введите пароль")}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        className={cls.loginBtn}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t("Войти")}
      </Button>
    </div>
  )
})