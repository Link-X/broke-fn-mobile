import Index from './pages/app/index'
import Home from './pages/home/loadable'

const routes = [
    {
        component: Index,
        routes: [
            {
                path: '/',
                exact: true,
                component: Home
            }
        ]
    }
]

export default routes
