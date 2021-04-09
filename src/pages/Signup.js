import { useContext, useState } from "react"
import {useHistory} from 'react-router-dom'
import { Form } from "../components"
import { FooterContainer } from "../containers/Footer"
import { HeaderContainer } from "../containers/Header"
import { FirebaseContext} from '../context/firebase'
import * as ROUTES from '../constants/routes'

const Signup = () => {
    const history = useHistory()
    const {firebase} = useContext(FirebaseContext)

    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const isInvalid = firstName === '' || password === '' || email === ''

    const handleSignUp = event => {
        event.preventDefault()

        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(result => {
            result.user
            .updateProfile({
                displayName: firstName,
                photoURL: Math.floor(Math.random() * 5) +1
            }).then(()=>{
                history.push(ROUTES.BROWSE)
            })
        })
        .catch(error=> {
            setError(error.message)
        })
    }

    return (
        <>
            <HeaderContainer>
            <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignUp}>
                        <Form.Input 
                            placeholder="First name"
                            value={firstName}
                            onChange={({target})=> setFirstName(target.value)}
                        />
                        <Form.Input 
                            placeholder="Email Address"
                            value={email}
                            onChange={({target})=> setEmail(target.value)}
                        />

                        <Form.Input 
                            type="password"
                            autoComplete="off"
                            placeholder="Password"
                            value={password}
                            onChange={({target})=> setPassword(target.value)}
                        />

                        <Form.Submit disabled={isInvalid} type="submit">
                            Sign In
                        </Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        Already a user? <Form.Link to="signin">Sign in now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>This page is protected by Google ReCAPTCHA to ensure you're not a bot. Learn More.</Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}
export default Signup