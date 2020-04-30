import React, { lazy, Suspense } from 'react'
import Loading from '@/common/loading/index'

const loadable = (importFunc: any, options?: { fallback: JSX.Element }): object => {
    const Temp = (props: object): JSX.Element => {
        const LazyComponent = lazy(importFunc)
        const { fallback } = options || {}
        console.log('fallback,', fallback)
        return (
            <Suspense fallback={fallback ? fallback : <Loading />}>
                <LazyComponent {...props} />
            </Suspense>
        )
    }
    return Temp
}

export default loadable
