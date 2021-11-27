import React from 'react'
import firebase from 'firebase'
import {auth} from '../firebase.js'
import {Button} from 'material-ui/FlatButton'

function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <div>
            <Button onClick={signInWithGoogle}>Sign in With Google</Button>
        </div>
    )
}

export default SignIn
