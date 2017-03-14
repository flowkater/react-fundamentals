import React, { Component } from 'react';

class ContactCreate extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            phone: ''
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(e){
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleClick(){
        const contact = {
            name: this.state.name,
            phone: this.state.phone
        };

        this.props.onCreate(contact);

        this.setState({
            name: '',
            phone: ''
        });

        this.nameInput.focus();
    }

    handleKeyPress(e) {
        if(e.charCode === 13) {
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    ref={(ref) => {this.nameInput = ref;}} />
                    
                <input
                    type="text"
                    name="phone"
                    placeholder="phone"
                    value={this.state.phone}
                    onChange={this.handleChange} 
                    onKeyPress={this.handleKeyPress} />
                <button onClick={this.handleClick}>create</button>
            </div>
        );
    }
}

ContactCreate.propTypes = {
    onCreate: React.PropTypes.func
};

ContactCreate.defaultProps = {
    onCreate: () => {console.error('onCreate is not defined');}
};

export default ContactCreate;