import React from 'react'
import {useHistory} from 'react-router-dom'

const NotFound = () => {
    const history = useHistory()
    return (
        <div className="notfound">
            <h1 className="notfound__text">404</h1>
            <p className="notfound__link" onClick={() => history.push('/')}>
                Back home
            </p>
        </div>
    )
}

export default NotFound
