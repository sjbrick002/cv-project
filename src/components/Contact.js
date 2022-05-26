import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <div>
                <fieldset>
                    <legend>Contact Info</legend>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name"/>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email"/>
                        <label htmlFor="phone">Phone Number:</label>
                        <input type="tel" name="phone" id="phone"/>
                    </div>
                </fieldset>
            </div>
        );
    };
}

export default Contact;