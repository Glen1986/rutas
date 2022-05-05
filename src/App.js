import { Switch, Route, NavLink, useRouteMatch } from 'react-router-dom'

const Proyecto = () => {
    const match = useRouteMatch()
    const { proyecto_id } = match.params
    return <h1>proyecto {proyecto_id}</h1>
}
const Portafolio = () => {
    const match = useRouteMatch()
    return (
        <div>
            <h1>Portafolio</h1>
            <ul>
                <li>
                    <NavLink
                        activeClassName="on"
                        exact
                        to={`${match.url}/proyecto1`}
                    >
                        Proyecto1
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeStyle={{ fontSize: 24 }}
                        activeClassName="on"
                        exact
                        to={`${match.url}/proyecto2`}
                    >
                        Proyecto2
                    </NavLink>
                </li>
            </ul>
            <div>
                <Switch>
                    <Route path={`${match.path}/:proyecto_id`}>
                        <Proyecto />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}
function App() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName="on" exact to="/">
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="on" exact to="/portafolio">
                            Portafolio
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <section>
                <Switch>
                    <Route path="/portafolio">
                        <Portafolio />
                    </Route>
                    <Route path="/">
                        <h1>Inicio</h1>
                    </Route>
                </Switch>
            </section>
        </div>
    )
}

export default App
