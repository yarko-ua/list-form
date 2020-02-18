import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleMail = this.handleMail.bind(this);
        this.state = {
            name: '',
            password: '',
            email: '',
            checked: false,
            validation: false,
            errorName: '',
            errorPassword: '',
            errorMail: '',
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let validation;
        if (!this.state.name || this.state.name === ' ') {
            validation = false;
        } else if (!this.state.password || this.state.password === ' ') {
            validation = false;

        } else if (!this.state.checked) {
            validation = false;

        } else if (!this.state.email || this.state.email === ' ') {
            validation = false;
        } else {
            validation = true;
        };

        this.setState({ validation: validation })
        if (validation) alert(`You are awesome!`);

    }

    handleName(e) {
        if (e.target.value.match(/\d+/)) {
            this.setState({
                errorName: 'Numbers is forbidden',
                name: '',
            })
        } else if (!e.target.value.match(/\d+/)) {
            this.setState({
                errorName: '',
                name: e.target.value
            })
        };
    };

    handlePassword(e) {
        this.setState({

        })
        if (e.target.value.includes('{')) {
            this.setState({
                errorPassword: '\'{\' sign is forbidden',
                password: ''
            })
        } else if (!e.target.value.includes('{')) {
            this.setState({
                errorPassword: '',
                password: e.target.value
            })
        };
        console.log(this.state.password);
        console.log(e.target.value.length);
    };

    handleCheck(e) {
        this.setState({
            checked: !this.state.checked
        })
        console.log(this.state.checked)
    };

    handleMail(e) {
        if (!e.target.value.match(/^.+@.+\..+$/igm)) {
            this.setState({
                errorMail: 'Not correct email',
                email: ''
            })
        } else if (e.target.value.match(/^.+@.+\..+$/igm)) {
            this.setState({
                errorMail: '',
                email: e.target.value
            })
        };
        console.log(this.state.email)
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" onChange={this.handleName}
                    // value={this.state.name}
                    placeholder="your name" />
                <p>{this.state.errorName}</p>
                <input type="text" name="password" onChange={this.handlePassword}
                    // value={this.state.password}
                    placeholder="password" />
                <p>{this.state.errorPassword}</p>
                <input type="text" name="email"
                    onChange={this.handleMail}
                    placeholder="email@inbox.com"
                />
                <p>{this.state.errorMail}</p>
                <div className="checkBox">
                    <input type="checkbox" name="checkbox" id="checkbox" onChange={this.handleCheck}
                        checked={this.state.checked} />
                    <label htmlFor="checkbox">Keep me signed in</label>
                </div>
                <button type="submit">SIGN IN</button>
            </form>
        );

    }

}

export default Form