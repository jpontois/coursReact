class Incrementer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            increment: props.start
        }
        this.timer = null
        this.step = props.step || 1
    }

    componentDidMount() {
        this.timer = window.setInterval(() => this.tick(), this.step * 1000)
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

ReactDOM.render(
    <Incrementer start={10} step={2}/>,
    document.querySelector('#app')
)