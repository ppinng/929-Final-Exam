import React, { Component } from 'react';
import { FormFeedback, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 1,
            name: '',
            comment: '',

        };
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleclick = this.handleclick.bind(this)
        
    }
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleclick(event) {
        event.preventDefault()
        console.log(this.state)
        this.props.onSubmit(this.state)

    }
    

    validate() {
        const errors = {
            name: '',
            comment:''
        }
        if (this.state.name.length < 3 ) {
            errors.name = ' Name should be >= 3 characters';
        } else if (this.state.name.length > 15) {
            errors.name = ' Name should be <=15 characters';
        }
        if (this.state.comment.length < 3 ) {
            errors.comment = ' Comment length should be >= 3 characters';
        } else if (this.state.comment.length > 55) {
            errors.comment = ' Name should be <=55 characters';
        }
        return errors;
    }
    render() {
        const errors = this.validate();
        return (
            <div>
                <Form>
                    <FormGroup row>
                        <Col md={12}>
                            <Label>How many points would you give?</Label>
                            <Input type="select" name="rating" id="exampleSelect"
                                onChange={this.handleInputChange}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col md={12}>
                            <Label>Your Name</Label>
                            <Input
                                type='text'
                                id="name"
                                name="name"
                                placeholder='Your Name'
                                value={this.state.name}
                                valid={errors.name === ''}
                                invalid={errors.name !== ''}
                                onChange={this.handleInputChange}
                            >
                            </Input>
                            <FormFeedback>{errors.name}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col md={12}>
                            <Label>Comment</Label>
                            <Input type='textarea' rows="6" name="comment"
                                value={this.state.comment}
                                valid={errors.comment === ''}
                                invalid={errors.comment !== ''}
                                onChange={this.handleInputChange}>

                            </Input>
                            <FormFeedback>{errors.comment}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        {/* <div className='col-2 d-flex justify-content-start'>
                        <button onClick={() => alert("You liked this picture")}>
                            Like
                        </button>
                        </div> */}

                        <div className='col-3'>
                            <Button type="submit" color="primary" onClick={this.handleclick}>
                                Submit
                            </Button>
                        </div>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default Comment;