import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/navbar";
import { Sidebar } from "widgets/sidebar";
import { Suspense, useEffect } from "react";
import { PageLoader } from "widgets/PageLoader";
import { useAppDispatch } from "./providers/StoreProvider";
import { userActions } from "entities/User";



const App = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch])

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App