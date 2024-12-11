import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss'
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/themeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { RouteConfig } from 'shared/config/routeConfig/RouteConfig';
import MainIcon from "shared/assets/icons/main.svg"
import AboutIcon from "shared/assets/icons/about.svg"
import { useTranslation } from 'react-i18next';


interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const {t} = useTranslation()

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>

            <Button data-testid="sidebar-toggle"
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square={true}
                size={ButtonSize.L}
                onClick={onToggle}
                >
                
                {collapsed ? ">" : "<"}
            </Button>
            <div className={cls.items}>
                    <AppLink
                        theme={AppLinkTheme .PRIMARY}
                        to={RouteConfig.about.path}
                        className={cls.link}
                    >
                        <AboutIcon className={cls.icon}/> 
                        <span className={cls.text}>{t("О сайте")}</span>
                    </AppLink>
                    <AppLink
                        theme={AppLinkTheme.PRIMARY}
                        to={RouteConfig.main.path}
                        className={cls.link}
                    >
                    <MainIcon className={cls.icon}/>                        
                    <span className={cls.text}>{t("Главная")}</span>
                    </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    short={collapsed}
                    className={cls.lang} 
                />
            </div>
        </div>
    )
}