import { Switch, Route, Link } from 'react-router-dom'
const Portafolio = () => {
    return (
        <div>
            <h1>Portafolio</h1>
            <ul>
                <li>
                    <Link to="/portafolio/proyecto1">Proyecto1</Link>
                </li>
                <li>
                    <Link to="/portafolio/proyecto2">Proyecto2</Link>
                </li>
            </ul>
            <div>
                <Switch>
                    <Route path="/portafolio/proyecto1">
                        <h2>proyecto 1</h2>
                    </Route>
                    <Route path="/portafolio/proyecto2">
                        <h2>proyecto 2</h2>
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
