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
                increment: state.increment + props.step
            }
        ))
    }

    render() {
        const {increment} = this.state
        return <div>Ceci est l'incrément : {increment}</div>
    }
}

Incrementer.defaultProps = {
    start: 0,
    step: 1
}

ReactDOM.render(
    <Incrementer step={2}/>,
    document.querySelector('#app')
)