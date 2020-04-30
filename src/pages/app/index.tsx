import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { HOMEDATAACTION } from '@/reducers/home'

interface actionTyp {
    setData: (params: string) => void
}

interface defaultStateType {
    a: string
}

interface stateType {
    home: defaultStateType
}

interface HomeProps extends React.FC {
    home: defaultStateType
    setData: actionTyp
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

const Home: HomeProps = (props): JSX.Element => {
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
                props.setData('eeee')
            }}
        >
            321 {props.home.a}
        </div>
    )
}

export default connect(mapStateToProps, mapActiontoProps)(Home)
