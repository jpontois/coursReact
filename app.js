class Formulaire extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            firstName: undefined,
            lastName: undefined,
            sub: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form>
                <label htmlFor="firstName">Nom</label>
                <input
                    name="firstName"
                    type="text"
                    onChange={this.handleChange}
                />
                <br/>
                <label htmlFor="lastName">Prénom</label>
                <input name="lastName" type="text"/>
                <br/>
                <label htmlFor="sub">S'abonner à la newsletter</label>
                <input name="sub" type="checkbox"/>
            </form>
        )
    }
}

ReactDOM.render(
    <Formulaire/>,
    document.querySelector('#app')
)