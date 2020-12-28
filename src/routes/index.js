import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Redirect
  } from "react-router-dom";
import Movie from 'views/Movie'
import Anagram from 'views/Anagram'
const indexRouter=()=>{
    return(
        <Router>
            <Switch>
                <Route path='/' exact component={Movie}/>
                <Route path='/anagram' exact component={Anagram}/>
            </Switch>
        </Router>
    )
}

export default indexRouter