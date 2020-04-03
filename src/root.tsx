import { renderRoutes } from 'react-router-config'
import { hot } from 'react-hot-loader/root'
import { setConfig } from 'react-hot-loader'
import routes from './router'
console.log(routes)
const RouterComponent = (): JSX.Element => renderRoutes(routes)

setConfig({ logLevel: 'debug' })

const Root = hot(RouterComponent)

export default Root
