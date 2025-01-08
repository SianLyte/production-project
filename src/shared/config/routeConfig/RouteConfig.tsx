import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { NotFoundPage } from "pages/NotFoundPage"
import { RouteProps } from "react-router-dom"

const enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    NOT_FOUND = "not_found"
}



const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    //отработает если остальные не отработали. держим последним
    [AppRoutes.NOT_FOUND]: "/*"
}

export const RouteConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        element: <MainPage />,
        path: RoutePaths[AppRoutes.MAIN],
    },
    [AppRoutes.ABOUT]: {
        element: <AboutPage />,
        path: RoutePaths[AppRoutes.ABOUT],
    },
    //not-found должен быть последний
    [AppRoutes.NOT_FOUND]: {
        element: <NotFoundPage />,
        path: RoutePaths[AppRoutes.NOT_FOUND],
    },

}

