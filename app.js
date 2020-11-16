class Incrementer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            increment: props.start
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
        this.setState((state, props) => (
            {
                increment: state.increment + 1
            }
        ))
    }

    render() {
        const {increment} = this.state
        return <div>Ceci est l'incrément : {increment}</div>
    }
}

ReactDOM.render(
    <Incrementer start={10}/>,
    document.querySelector('#app')
)