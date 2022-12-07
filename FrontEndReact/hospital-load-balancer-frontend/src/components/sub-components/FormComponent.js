
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

export default class FormComponent extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.formSubmit}>
                    {this.props.formInput.map(item => <input type="text" placeholder={item} />
                    )}
                    <button className="btn btn-outline-primary w-100 mt-2">{this.props.formSubmitDescription}</button>
                </form>
            </div>
        )
    }
}

FormComponent.defaultProps = {
    formInput: ["nome", "idade", "endereço"],
    formSubmit: event => {
        event.preventDefault();
		console.log('form submitted ✅');
    },
    formSubmitDescription: "Submit"
}