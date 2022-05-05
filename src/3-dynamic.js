import { Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom'

const Proyecto = () => {
    const match = useRouteMatch()
    const params = useParams()
    console.log({ match, params })
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
                    <Link to={`${match.url}/proyecto1`}>Proyecto1</Link>
                </li>
                <li>
                    <Link to={`${match.url}/proyecto2`}>Proyecto2</Link>
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
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/portafolio">Portafolio</Link>
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
