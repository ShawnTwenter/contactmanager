import React, { Component } from 'react'
import Contact from './Contact';
 class Contacts extends Component {

    state = {
            contacts: [
                {
                    id: 1,
                    name: 'John Doe',
                    email: 'jdoe@gmail.com',
                    phone: '555-555-5555'
                },
                {
                    id: 2,
                    name: 'Fred Ted',
                    email: 'fted@gmail.com',
                    phone: '555-555-9999'
                },
                {
                    id: 3,
                    name: 'Kate Durfenson',
                    email: 'kdurf@gmail.com',
                    phone: '555-555-1111'
                }
            ]
        }
    
    deleteContact = (id) => {
        const { contacts } = this.state;
        this.setState({
            contacts: contacts.filter(c => c.id !== id)
        })
    }

    render() {
        const { contacts } = this.state;
        return (
            <React.Fragment>
                {contacts.map(contact => 
                     <Contact 
                        key={contact.id} 
                        contact={contact} 
                        onDeleteClickHandler={this.deleteContact.bind(this, contact.id)}
                        />
                )}
            </React.Fragment>
        )
    }
}


export default Contacts;