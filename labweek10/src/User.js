import React, { Component } from 'react'

export default class User extends Component {

    constructor(props){
        super(props)

        this.state = {
            email: '',
            name: '',
            address: '',
            address2: '',
            city: '',
            province: '',
            postalCode: ''
        }
    }
    provinces = ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"]


    submitData = (e) => {
        e.preventDefault()
        this.setState({email: e.target.elements.email.value})
        this.setState({address: e.target.elements.address.value})
        this.setState({name: e.target.elements.name.value})
        this.setState({address2: e.target.elements.address2.value})
        this.setState({city: e.target.elements.city.value})
        this.setState({province: e.target.elements.province.value})
        this.setState({postalCode: e.target.elements.postalCode.value})
    }

    render() {
        return (
            <div>
                <h1>Data Entry Form</h1>
                <form onSubmit={this.submitData}>
                    <div class="form">
                        <div class="form-row">
                            <div>
                                <label>Email</label>
                                <br/>
                                <input type="email" placeholder="Enter email" name="email"></input>
                            </div>
                            <div>
                                <label>Name</label>
                                <br/>
                                <input name="name" type="text" placeholder="Full Name"></input>
                            </div>
                        </div>
                        <div>
                            <label>Address</label>
                            <br/>
                            <input type="text" name="address" placeholder="1234 Main St"></input>
                        </div>
                        <div>
                            <label>Address 2</label>
                            <br/>
                            <input type="text" name="address2" placeholder="Apartment, studio, or floor"></input>
                        </div>
                        <div class="form-row">
                            <div>
                                <label>City</label>
                                <br/>
                                <input type="text" name="city" placeholder=""></input>
                            </div>
                            <div>
                                <label>Province</label>
                                <br/>
                                <select name="province">
                                    <option value="">Choose...</option>
                                    {
                                        this.provinces.map(name => (
                                            <option value={name} key={name}>{name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div>
                                <label>Postal Code</label>
                                <br/>
                                <input type="text" name="postalCode" placeholder=""></input>
                            </div>
                        </div>
                        <div>
                        <input type="checkbox" value="agree"/><label>Agree Terms & Condition?</label>
                    </div>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>

                <div>
                    <p><span>Email</span>: {this.state.email}</p>
                    <p><span>Full Name</span>: {this.state.name}</p>
                    <p><span>Address</span>: {this.state.address}</p>
                    <p><span>City</span>: {this.state.city}</p>
                    <p><span>Province</span>: {this.state.province}</p>
                    <p><span>Postal Code</span>: {this.state.postalCode}</p>
                </div>
            </div>
        )
    }
}
