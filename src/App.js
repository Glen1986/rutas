import { Switch, Route, Link, useLocation } from 'react-router-dom'

function useQuery() {
    return new URLSearchParams(useLocation().search)
}
function App() {
    // const location = useLocation()
    const query = useQuery()
    const chancho = query.get('chanchito')
    const nombre = query.get('nombre')

    console.log({ chancho, nombre })
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/perfil">Perfil</Link>
                    </li>
                </ul>
            </nav>
            <section>
                <Switch>
                    <Route exact path="/">
                        <h1>Inicio</h1>
                    </Route>
                    <Route exact path="/perfil">
                        <h1>Perfil</h1>
                    </Route>
                    <Route path="*">404: ruta no encontrada</Route>
                </Switch>
            </section>
        </div>
    )
}

export default App
