/* let n = 0

const render = () => {
    const list = [
        'Jon',
        'Jim',
        'Jôsé'
    ]

    const title = <React.Fragment> 
        <h1 className="title" id="title">
            Bonjour tout le monde <span>{n}</span>
        </h1>
        <ul>
{list.map((val, i) => <li key={i}>{val}</li>)}
        </ul>
    </React.Fragment>

    ReactDOM.render(title, document.querySelector('#app'))
}

render()

window.setInterval(() => {
    n++
    render()
}, 1000) */

const Welcome = ({name, children}) => (
    <div>
        <h1>Bijour {name}</h1>
        <p>{children}</p>
    </div>
)

const App = () => (
    <div>
        <Welcome name="Brigitte">
            Ceci est Brigitte
        </Welcome>
        <Welcome name="Madelaine">
            Madelaine de proustage
        </Welcome>
    </div>
)

ReactDOM.render(
    <App/>,
    document.querySelector('#app')
)