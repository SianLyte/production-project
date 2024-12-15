import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";

import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/navbar";
import { Sidebar } from "widgets/sidebar";
import { Suspense } from "react";
import { PageLoader } from "widgets/PageLoader";
import { Counter } from "entities/Counter";



const App = () => {
    const { theme } = useTheme();


    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <div className="content-page">
                    <Counter />
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App