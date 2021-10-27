import { Switch, BrowserRouter, Route } from "react-router-dom"
import Accueil from "../view/Accueil"

function RoutesComponent(params) {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Accueil} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default RoutesComponent;