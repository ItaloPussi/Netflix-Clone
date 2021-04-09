import { useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { FirebaseContext} from '../context/firebase'
import * as ROUTES from '../constants/routes'
const Browse = () => {
    const history = useHistory()
    const {firebase} = useContext(FirebaseContext)

    useEffect(()=>{
        if(!firebase.auth().currentUser){
            history.push(ROUTES.SIGN_IN)
        }
    }, [])
    return (
        <div>Browse</div>
    )
}
export default Browse