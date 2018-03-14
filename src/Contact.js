import React, { Component } from 'react';
import './Contact.css'

class Contact extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            formSent: null, 
        };

        this.titleHandler = this.titleHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    titleHandler(e) {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        let {name, email, subject, message} = this.state;
        fetch('/email', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                subject: subject,
                message: message
            })
        })
            .then((response) => response)
            .then((responseJson) => {
                    console.log(responseJson);
                    this.setState({ formSent: true })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        let { name, email, subject, message, formSent } = this.state;
        let divy = null;
        let containerStyle = 'Contact-Container';
        if (!formSent) {
            divy = 
                <form>
                        <h2 style={{ textAlign: 'center', fontSize: '2em' }}>Contact Me</h2>
                        <p style={{ textAlign: 'center', fontSize: '1.5em' }}>I'm all about reachin' out</p>
                        <div className="FormContents">
                            <label>
                                Your Name (required)
                                <input className="InputField"
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={this.titleHandler}
                                />
                            </label>
                            <label>
                                Your Email (required)
                                <input className="InputField"
                                    type="text"
                                    name="email"
                                    value={email}
                                    onChange={this.titleHandler}
                                />
                            </label>
                            <label>
                                Subject:
                                <input className="InputField"
                                    type="text"
                                    name="subject"
                                    value={subject}
                                    onChange={this.titleHandler}
                                />
                            </label>
                            <label>
                                Your Message:
                                <textarea className="textField"
                                    type="text"
                                    name="message"
                                    value={message}
                                    onChange={this.titleHandler}
                                />
                            </label>
                            <br />
                            <input className="submitButton"
                                type="submit"
                                value="Submit"
                                onClick={this.handleSubmit}
                            />
                        </div>
                        
                    </form>;

        } else {
            divy = <h2>Sent!</h2>;
            containerStyle = 'Contact-Container-Submitted w3-animate-top';
        }
            return (
                <div className={containerStyle}>
                        {divy}
                </div>
            );
    }
}

export default Contact;
