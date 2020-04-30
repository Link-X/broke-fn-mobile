import Index from './pages/app/loadable'
import Home from './pages/home/loadable'

const routes = [
    {
        component: Index,
        routes: [
            {
                path: '/a',
                exact: true,
                component: Home
            }
        ]
    }
]

export default routes
