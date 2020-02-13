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
            checked: true,
            validation: false,
            errorName: '',
            errorPassword: '',
            errorMail: '',
        }
    }

    handleSubmit(e) {
        if (!this.state.name || this.state.name === ' ' ||
            this.state.name.match(/\d+/)) {
            this.setState({
                validation: false
            })
        } else if (this.state.password === '' || this.state.password === ' ' ||
            this.state.password.includes('{')) {
            this.setState({
                validation: false
            })
        } else if (this.state.checked === false) {
            this.setState({
                validation: false
            })
        } else if (this.state.email === '' || this.state.email === ' ' ||
            !this.state.email.match(/^.+@.+\..+$/igm)) {
            this.setState({
                validation: false
            })
        } else {
            this.setState({
                validation: true
            })
        }
        if (this.state.validation) alert(`You are awesome!`);
        e.preventDefault();
    }

    handleName(e) {
        this.setState({
            name: e.target.value
        })
        if (this.state.name.match(/\d+/)) {
            this.setState({
                errorName: 'Numbers is forbidden',
                validation: false,
            })
        } else if (!this.state.name.match(/\d+/)) {
            this.setState({ errorName: '' })
        };


    };

    handlePassword(e) {
        this.setState({
            password: e.target.value
        })
        if (this.state.password.includes('{')) {
            this.setState({
                errorPassword: '\'{\' sign is forbidden',
                validation: false,
            })
        } else if (!this.state.password.includes('/')) {
            this.setState({ errorPassword: '' })
        };
        console.log(this.state.password)
    };

    handleCheck(e) {
        this.setState({
            checked: !this.state.checked
        })
        console.log(this.state.checked)
    };

    handleMail(e) {
        this.setState({
            email: e.target.value
        })
        if (!this.state.email.match(/^.+@.+\..+$/igm)) {
            this.setState({
                errorMail: 'Not correct email',
                validation: false,
            })
        } else if (!this.state.password.match(/^.+@.+\..+$/igm)) {
            this.setState({ errorMail: '' })
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
                    <label for="checkbox">Keep me signed in</label>
                </div>
                <button type="submit">SIGN IN</button>
            </form>
        );

    }

}

export default Form