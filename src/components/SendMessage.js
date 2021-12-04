import { Button, Input } from '@material-ui/core'
import {db , auth} from '../firebase'
import firebase from 'firebase'
import React , {useState} from 'react'

function SendMessage({scroll}) {
    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        e.preventDefault()

        const {uid, photoUrl} = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            // photoUrl,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView( { behavior: 'smooth'})

    }

    return (
        <div>
            <form onSubmit={sendMessage}>
                <Input style={{ width: '78%', fontSize: '15px' , marginLeft: '5px' , marginBottom: '-3px'}} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Type Your Message..." />
                <Button style={{ width: '18%' , fontSize: '15px' , maxWidth: '200px' , margin: '4px 5% -13 px 5%'}} type="submit">Send!</Button>
            </form>
        </div>
    )
}

export default SendMessage
