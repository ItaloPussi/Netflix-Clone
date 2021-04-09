import { useContext, useState, useEffect } from "react"
import {useHistory} from 'react-router-dom'
import { Form } from "../components"
import { FooterContainer } from "../containers/Footer"
import { HeaderContainer } from "../containers/Header"
import { FirebaseContext} from '../context/firebase'
import * as ROUTES from '../constants/routes'

const Signin = () => {
    const history = useHistory()
    const {firebase} = useContext(FirebaseContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    useEffect(() => {
        if(firebase.auth().currentUser){
            history.push(ROUTES.BROWSE)
        }
    }, [])

    const handleSignIn = (event) => {
        event.preventDefault()
        
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(()=>{
            history.push(ROUTES.BROWSE)
        }).catch((error)=>{
            setEmail("")
            setPassword("")
            setError(error.message)
        })
    }

    const isInvalid = password === '' || email === ''
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignIn}>
                        <Form.Input 
                            placeholder="email Address"
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
                        New to Netflix? <Form.Link to="signup">Sign up now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>This page is protected by Google ReCAPTCHA to ensure you're not a bot. Learn More.</Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}
export default Signin