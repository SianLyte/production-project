import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss'
import { useCallback, useState } from 'react';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal(prev => !prev);
    }, [])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button onClick={onToggleModal}>{t("Войти")}</Button>
                <LoginModal isOpen={isAuthModal} onClose={onToggleModal} />
            </div>
        </div>
    )
}