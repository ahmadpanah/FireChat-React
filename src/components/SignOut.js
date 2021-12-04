import { Button } from '@material-ui/core'
import React from 'react'
import { auth } from '../firebase'

function SignOut() {
    return (
        <div>
            <Button onClick={() => auth.signOut()}> Log Out </Button>
        </div>
    )
}

export default SignOut
