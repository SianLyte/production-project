import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RouteConfig } from 'shared/config/routeConfig/RouteConfig'
import { PageLoader } from 'widgets/PageLoader'

const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader/>}>
            <Routes>
                {Object.values(RouteConfig).map(({ element, path }) =>
                    <Route key={path} path={path}
                        element={
                            <div className='page-wrapper'>
                                {element}
                            </div>
                        }
                    />)}
            </Routes>
        </Suspense>
    )
}

export default AppRouter