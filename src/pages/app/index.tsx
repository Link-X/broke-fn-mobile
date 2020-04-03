import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { HOMEDATAACTION } from '@/reducers/home'

interface actionTyp {
    setData: Function
}

interface defaultStateType {
    a: string
}

interface stateType {
    home: defaultStateType
}

const mapActiontoProps = (dispatch: any): actionTyp => ({
    setData(params: string) {
        const promise = HOMEDATAACTION(params)
        dispatch(promise)
    }
})

const mapStateToProps = (state: stateType): stateType => {
    return {
        home: state.home
    }
}

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
    return (
        <div
            className="home"
            onClick={() => {
                props.setData('bbcce')
            }}
        >
            321
        </div>
    )
}

export default connect(mapStateToProps, mapActiontoProps)(Home)
