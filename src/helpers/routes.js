import {Route, Redirect} from 'react-router-dom'

export function IsUserRedirect({user, loggedInPath, children, ...rest}){
    return (
        <Route 
            {...rest}
            render={()=>(
                user ? (
                    <Redirect 
                        to={{
                            pathname: loggedInPath
                        }}
                    />
                ) : children
            )}
        ></Route>
    )
}

export function ProtectedRoute({user, children, ...rest}){
    return (
        <Route 
            {...rest}
            render={()=>(
                !user ? (
                    <Redirect 
                        to={{
                            pathname: "/signin"
                        }}
                    />
                ) : children
            )}
        ></Route>
    )
}