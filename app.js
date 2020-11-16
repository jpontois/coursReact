class ManualIncrementer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            n: 0,
            timer: null
        }
    }

    play () {
        window.clearInterval(this.state.timer)
        this.setState({
            timer: window.setInterval(() => this.tick(), 1000),
        })
    }

    pause () {
        window.clearInterval(this.state.timer)
        this.setState({
            timer: null,
        })
    }

    label () {
        return (this.state.label) ? 'Démarrer' : 'Arrêter'
    }

    reset () {
        this.pause()
        this.setState()
        this.play()
    }

    tick() {
        this.setState((state, props) => ({n: state.n + 1}))
    }

    toggle() {
        (this.state.timer) ? this.pause() : this.play()
    }

    render() {
        return (
            <div>
                Valeur : {this.state.n}
                <br/>
                <button onClick={this.toggle.bind(this)}>{this.label}</button>
                {(this.state.timer) ? <button onClick={this.toggle.bind(this)}>{this.label}</button> : ''}
            </div>
        )
    }
}

ReactDOM.render(
    <ManualIncrementer/>,
    document.querySelector('#app')
)