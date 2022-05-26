import React from "react";

function School() {
    return (
        <div>
            <label htmlFor="schoolName1">Name of Institution:</label>
            <input type="text" name="schoolName1" id="schoolName1"/>
            <label htmlFor="fieldOfStudy1">Field of Study:</label>
            <input type="text" name="fieldOfStudy1" id="fieldOfStudy1"/>
            <label htmlFor="startSchoolDate1">Start Date:</label>
            <input type="text" name="startSchoolDate1"    id="startSchoolDate1"/>
            <label htmlFor="endSchoolDate1">End Date:</label>
            <input type="text" name="endSchoolDate1"  id="endSchoolDate1"/>
            <label htmlFor="commentsOnEducation1">Comments on     Experience:</label>
            <textarea name="commentsOnEducation1"     id="commentsOnEducation1" rows="15"></textarea>
        </div>
    );
};

class Education extends React.Component {
    render() {
        return (
            <div>
                <fieldset>
                    <legend>Education</legend>
                    <School/>
                    <button type="button">+</button>
                </fieldset>
          </div>
        );
    };
};

export default Education;