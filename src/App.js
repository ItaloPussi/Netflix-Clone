import * as ROUTES from './constants/routes'
import {BrowserRouter as Router} from 'react-router-dom'
import {Home, Browse, Signin, Signup} from './pages'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

function App() {
  const {user} = useAuthListener()
  return (
    <Router>
      {/* LOGGED USER REDIRECT */}
      <IsUserRedirect 
        user={user} 
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.HOME}
        exact
      >
          <Home />
      </IsUserRedirect>
      
      <IsUserRedirect 
        user={user} 
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_IN}
        exact
      >
          <Signin />
      </IsUserRedirect>

      <IsUserRedirect 
          user={user} 
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
          exact
        >
            <Signup />
        </IsUserRedirect>

      {/* NON LOGGED IN USER REDIRECT */}
      <ProtectedRoute 
          path={ROUTES.BROWSE}
          user={user}
          exact
      >
        <Browse />
      </ProtectedRoute>
    </Router>
  );
}

export default App;
