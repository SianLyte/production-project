import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss'
import { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';

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
                <Modal isOpen={isAuthModal} onClose={onToggleModal}><div>asd</div></Modal>
            </div>
        </div>
    )
}