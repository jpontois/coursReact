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

class Clock extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            date: new Date()
        }
        this.timer = null
    }
    
    componentDidMount() {
        this.timer = window.setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        window.clearInterval(this.timer)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        const {date} = this.state
        return <p>Il est {date .toLocaleDateString()} {date.toLocaleTimeString()} </p>
    }
}

ReactDOM.render(
    <Clock/>,
    document.querySelector('#app')
)