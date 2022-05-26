import React from "react";

function Job() {
    return (
        <div>
            <label htmlFor="company">Company:</label>
            <input type="text" name="employer" id="company"/>
            <label htmlFor="positionTitle">Position Title:</label>
            <input type="text" name="positionTitle" id="positionTitle"/>
            <label htmlFor="startWorkDate1">Start Date:</label>
            <input type="text" name="startWorkDate1"        id="startWorkDate1"/>
            <label htmlFor="endWorkDate1">End Date:</label>
            <input type="text" name="endWorkDate1" id="endWorkDate1"/>
            <label htmlFor="responsibilities">Position      Responsibilities:</label>
            <textarea name="responsibilities" id="responsibilities"     rows="15"></textarea>
        </div>
    );
};

class Work extends React.Component {
    render() {
        return (
            <div>
                <fieldset>
                    <legend>Work History</legend>
                    <Job/>
                    <button type="button">+</button>
                </fieldset>
          </div>
        );
    };
}

export default Work;