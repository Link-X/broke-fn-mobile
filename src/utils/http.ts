import axios from 'axios'
import { getToken } from '../utils'
import qs from 'qs'

const Http = axios.create({
    baseURL: '/',
    withCredentials: true
})

Http.interceptors.request.use(
    (config): any => {
        return config
    },
    async (error): Promise<any> => {
        return Promise.reject(error).catch((): void => {
            console.log('err')
        })
    }
)
Http.interceptors.response.use(
    async (response): Promise<any> => {
        const { isSkip }: any = response.config.headers
        if (isSkip) {
            return response
        }
        const res = response.data
        if (Number(res.retCode) === 0 || Number(res.code) === 200 || res.result) {
            return res.data || res
        }
        return Promise.reject(res.data || res)
    },
    async (error): Promise<any> => {
        return Promise.reject(error).catch((): void => {
            console.log('err')
        })
    }
)
function addParams(params: any): void {
    const token = getToken()
    params.token = params.token || token
    return params
}

export const get = async (
    path: string,
    options: any = {
        params: {}
    }
): Promise<any> => {
    if (!options.params) {
        options.params = {}
    }
    options.params = addParams({ ...options.params })
    return Http.get(path, options).catch((): void => {
        console.log('err')
    })
}

export const post = async (
    path: string,
    data: any,
    options: any = {
        params: {}
    }
): Promise<any> => {
    options.params = addParams({ ...options.params })
    data = addParams({ ...data })
    return Http.post(path, qs.stringify(data), options).catch((): void => {
        console.log('err')
    })
}

export default Http
