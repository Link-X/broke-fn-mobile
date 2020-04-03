import React from 'react'
import { useHistory } from 'react-router-dom'

function Home(props: any): JSX.Element {
    const history = useHistory()
    const goTo = (): void => {
        history.push({
            pathname: '/login'
        })
    }
    const a = false
    if (a) {
        goTo()
    }
    return <div>123</div>
}

export default Home
