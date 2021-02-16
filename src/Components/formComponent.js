import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import LoginSchema from '../Validations/LoginValidation'
import loginSchema from '../Validations/LoginValidation';

class formComponent extends React.Component{
    state = {
        email: '',
        password: ''
    }

    handleUseremailChange = (event) =>{
        this.setState({
            email: event.target.value
        })
        
    }
    handleUserpasswordChange = (event) =>{
        this.setState({
            password: event.target.value
        })
        
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        console.log(this.state.email,'tttttt')
        let loginData = {
            email: this.state.email,
            password: this.state.password
        }
        const isValid = await loginSchema.isValid(loginData);
        console.log(isValid)
    }

    render(){
        console.log(this.state)
        return(
            
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={this.handleUseremailChange}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={this.handleUserpasswordChange} />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}

export default formComponent
