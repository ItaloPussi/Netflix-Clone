import {useEffect, useState, useContext} from 'react'
import {FirebaseContext} from '../context/firebase'

export default function useContent(target){
    const [content, setContent] = useState([])
    const {firebase} = useContext(FirebaseContext)

    useEffect(()=>{
        firebase.firestore()
            .collection(target)
            .get()
            .then(snapshot => {
                const results = snapshot.docs.map(result => ({
                    ...result.data(),
                    docId: result.id
                }))

                setContent(results)
            })
            .catch((error)=> {
                console.log(error.message)
            })
        
    },[target, firebase])

    return {[target]:content}
}