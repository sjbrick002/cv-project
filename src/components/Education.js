import React from "react";

function School(i) {
    return (
        <div className="entry" id={`school-${i}`}>
            <label htmlFor={`schoolName-${i}`}>Name of Institution:</label>
            <input type="text" id={`schoolName-${i}`}/>
            <label htmlFor={`fieldOfStudy-${i}`}>Field of Study:</label>
            <input type="text" id={`fieldOfStudy-${i}`}/>
            <label htmlFor={`startSchoolDate-${i}`}>Start Date:</label>
            <input type="date" id={`startSchoolDate-${i}`}/>
            <label htmlFor={`endSchoolDate-${i}`}>End Date:</label>
            <input type="date" id={`endSchoolDate-${i}`}/>
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

function Education(props) {
    let buttonSet;
    if (props.schoolCount > 1) {
        buttonSet = <div className="button-set">
            <button type="button" onClick={props.addEntry}>Add</button>
            <button type="button" onClick={props.removeEntry}>Remove</button>
            </div>
    } else {
        buttonSet = <div className="button-set"><button type="button" onClick={props.addEntry}>Add</button></div>
    };
    return (
        <div>
            <fieldset>
                <legend>Education</legend>
                <SchoolList schoolCount={props.schoolCount}/>
                {buttonSet}
            </fieldset>
      </div>
    );
};

//class Education extends React.Component {
//    render() {
//        let buttonSet;
//        if (this.props.schoolCount > 1) {
//            buttonSet = <div className="button-set">
//                <button type="button" onClick={this.props.addEntry}>Add</button>
//                <button type="button" onClick={this.props.removeEntry}>Remove</button>
//                </div>
//        } else {
//            buttonSet = <div className="button-set"><button type="button" onClick={this.props.addEntry}>Add</button></div>
//        };
//        return (
//            <div>
//                <fieldset>
//                    <legend>Education</legend>
//                    <SchoolList schoolCount={this.props.schoolCount}/>
//                    {buttonSet}
//                </fieldset>
//          </div>
//        );
//    };
//};

export default Education;