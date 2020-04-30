import loadable from '@utils/withLoadable'

export default loadable(async () => import(/* webpackChunkName: "home" */ './index'))
