import React, { Component } from 'react';
import ContactInfo from './ContactInfo';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: '',
            contactData: [
                {name: 'Abit', phone: '010-0000-0001'},
                {name: 'Bbit', phone: '010-0000-0002'},
                {name: 'Dbit', phone: '010-0000-0004'},
                {name: 'Cbit', phone: '010-0000-0003'}
            ]
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            keyword: e.target.value
        });
    }

    render() {
        const mapToComponents = (data) => {
            data.sort();
            data = data.filter(
                (contact) => {
                    return contact.name.toLowerCase()
                        .indexOf(this.state.keyword.toLowerCase()) > -1;
                }
            );
            return data.map((contact, i) => {
                return <ContactInfo contact={contact} key={i} />;
            });
        };

        return (
            <div>
                <h1>Contacts</h1>
                <input name="keyword" placeholder="Search"
                        value={this.state.keyword} onChange={this.handleChange}/>
                {mapToComponents(this.state.contactData)} 
            </div>
        );
    }
}

export default Contact;