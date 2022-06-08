import { lazy } from 'react'

const Home = lazy(() => import('../components/Home/Home'))

const PublicRoutes = [
    {
        name: 'Home',
        path: '/',
        exact: true,
        resctricted: false,
        Component: Home,
    }
]

export default PublicRoutes
