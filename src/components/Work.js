import React from "react";

function Job(i) {
    return (
        <div className="entry" id={`company-${i}`}>
            <label htmlFor={`companyName-${i}`}>Company:</label>
            <input type="text" name="employer" id={`companyName-${i}`}/>
            <label htmlFor={`positionTitle-${i}`}>Position Title:</label>
            <input type="text" name="positionTitle" id={`positionTitle-${i}`}/>
            <label htmlFor={`startWorkDate-${i}`}>Start Date:</label>
            <input type="text" name="startWorkDate" id={`startWorkDate-${i}`}/>
            <label htmlFor={`endWorkDate-${i}`}>End Date:</label>
            <input type="text" name="endWorkDate" id={`endWorkDate-${i}`}/>
            <label htmlFor={`responsibilities-${i}`}>Position      Responsibilities:</label>
            <textarea name="responsibilities" id={`responsibilities-${i}`} rows="15"></textarea>
        </div>
    );
};

function JobList(props) {
    let jobEntries = [];
    for (let i = 0; i < props.workCount; i++) {
        jobEntries.push(Job(i));
    };
    let jobList = jobEntries.map(job => <div key={job.id}>{job}</div>);
    return (
        <div>
            {jobList}
        </div>
    );
};

class Work extends React.Component {
    render() {
        return (
            <div>
                <fieldset>
                    <legend>Work History</legend>
                    <JobList workCount={this.props.workCount}/>
                    <button type="button">+</button>
                </fieldset>
          </div>
        );
    };
}

export default Work;