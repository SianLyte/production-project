import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    to="/about" className={cls.mainLink}
                >
                    AboutABOUTABOUT
                </AppLink>

                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    to="/"
                >
                    Главная
                </AppLink>
            </div>
        </div>
    )
}