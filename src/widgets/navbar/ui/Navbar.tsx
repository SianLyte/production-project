import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss'
import { useCallback, useState } from 'react';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { useAppDispatch } from 'app/providers/StoreProvider';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();

    const onToggleModal = useCallback(() => {
        setIsAuthModal(prev => !prev);
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch])

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button onClick={onLogout}>{t("Вsйти")}</Button>
            </div>
        )

    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button onClick={onToggleModal}>{t("Войти")}</Button>
                <LoginModal isOpen={isAuthModal} onClose={onToggleModal} />
            </div>
        </div>
    )
}