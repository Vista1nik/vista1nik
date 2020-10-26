import React, {useEffect} from 'react'
import Router from 'next/router'

export default props => {
    useEffect(() => {
        if (navigator.language == 'ru') {
            Router.push('/ru')
        }
    }, [])

    return <div />
}