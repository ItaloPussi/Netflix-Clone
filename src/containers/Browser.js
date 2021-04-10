import { useContext, useEffect, useState } from "react";
import { SelectProfileContainer } from "./Profiles";
import { FirebaseContext} from '../context/firebase'
import { Loading, Header } from "../components";

export function BrowserContainer({slides}){
    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },3000)
    }, [profile.displayName])

    const {firebase} = useContext(FirebaseContext)
    const user = firebase.auth().currentUser || {}

    return  profile.displayName ? (
        <>
            {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
            <Header src="joker1">
                Hello
            </Header>
        </>
    ) : (
        <SelectProfileContainer 
            user={user}
            setProfile={setProfile}
        />
    )
}