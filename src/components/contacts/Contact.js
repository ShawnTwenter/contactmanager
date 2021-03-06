import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Consumer} from '../../context';
class Contact extends Component {
    state = {
        showContactInfo: false
    }
    
    onShowClick = () => {
       this.setState( {
        showContactInfo: !this.state.showContactInfo
       });
    }

     onDeleteClick = async (id, dispatch) => {

        try {
            const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
            if(res.status === 200) {
                dispatch({
                    type: 'DELETE_CONTACT', 
                    payload: id
                });
            }
            

        } catch (error) {
            console.log(error);
        }
       
    }

    render() {
        
        const { name, email, phone, id } = this.props.contact;
        const { showContactInfo } = this.state;



        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3">
                        <h4>{name}{' '} <i 
                                onClick={this.onShowClick} 
                                className="fas fa-sort-down" 
                                style={{cursor: 'pointer'}}
                                />
                                
                                <i className="fas fa-times" 
                                style={{coursor: 'pointer', float: 'right', color: 'red'}} 
                                onClick={this.onDeleteClick.bind(this, id, dispatch)}
                                />
                                <Link to={`contact/edit/${id}`}>
                                    <i 
                                        className="fas fa-pencil-alt" 
                                        style={
                                            {
                                                cursoor: 'pointer',
                                                float: 'right',
                                                color: 'black',
                                                marginRight: '1rem'
                                            }
                                        }
                                    ></i>
                                </Link>
                        </h4>
                        {
                            
                            showContactInfo && 
                            
                                <ul className="list-group">
                                    <li className="list-group-item">Email: {email}</li>
                                    <li className="list-group-item">Phone: {phone}</li>
                                </ul>
                            
                        }
                    </div>
                    )
                }}
            </Consumer>  
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
}

export default Contact;