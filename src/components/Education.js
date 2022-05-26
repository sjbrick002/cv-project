import React from "react";

function School(i) {
    return (
        <div className="entry" id={`school-${i}`}>
            <label htmlFor={`schoolName-${i}`}>Name of Institution:</label>
            <input type="text" id={`schoolName-${i}`}/>
            <label htmlFor={`fieldOfStudy-${i}`}>Field of Study:</label>
            <input type="text" id={`fieldOfStudy-${i}`}/>
            <label htmlFor={`startSchoolDate-${i}`}>Start Date:</label>
            <input type="text" id={`startSchoolDate-${i}`}/>
            <label htmlFor={`endSchoolDate-${i}`}>End Date:</label>
            <input type="text" id={`endSchoolDate-${i}`}/>
            <label htmlFor={`commentsOnEducation-${i}`}>Comments on Experience:</label>
            <textarea id={`commentsOnEducation-${i}`} rows="15"></textarea>
        </div>
    );
};

function SchoolList(props) {
    let schoolEntries = [];
    for (let i = 0; i < props.schoolCount; i++) {
        schoolEntries.push(School(i));
    };
    let schoolList = schoolEntries.map(school => <div key={school.id}>{school}</div>);
    return (
        <div>
            {schoolList}
        </div>
    );
};

class Education extends React.Component {
    render() {
        return (
            <div>
                <fieldset>
                    <legend>Education</legend>
                    <SchoolList schoolCount={this.props.schoolCount}/>
                    <button type="button">+</button>
                </fieldset>
          </div>
        );
    };
};

export default Education;