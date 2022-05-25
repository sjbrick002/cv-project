import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.applicant = {
      contactInfo: {
        name: "Samuel Brick",
        email: "samuelbrick3@gmail.com",
        phoneNumber: "(815) 616-2789"
      },
      education: [
        {
          school: "University of Iowa",
          location: "Iowa City, IA",
          degree: "Undergraduate Program",
          fieldOfStudy: "Chemistry/Pre-Pharmacy",
          startDate: "August 2020",
          endDate: "November 2021",
          gpa: "3.88 out of 4.00",
          achievements: [
            "Experienced with designing and following safe studies in academic lab sttings for both chemistry and biology",
            "Involved in developing clear and accurate lab reports and presentations to peers both familiar and unfamiliar with a chosen experiment"
          ]
        },
        {
          school: "Hononegah Community High School",
          location: "Rockton, IL",
          degree: "High school Diploma",
          fieldOfStudy: "General Studies",
          startDate: "August 2016",
          endDate: "May 2020",
          gpa: "4.7 out of 5.0",
          achievements: [
            "Ranked 13th out of 438 students (Top 3% of the class of 2020)",
            "AP Courses with Score (#/5) - Biology (4/5), Chemistry (4/5), Statistics (5/5), ..."
          ]
        }
      ],
      workHistory: [
        {
          employer: "CVS Health",
          location: "Roscoe, IL",
          positionTitle: "Pharmacy Technician & Store Supervisor",
          startDate: "February 2020",
          endDate: "November 2021",
          responsibilities: [
            "Practiced in navigating various electronic databases to acquire key information",
            "Experience in interactions with hazardous medication",
            "Honed strong communication between colleagues to ensure friendly and accurate service for patients",
            "Developed strong ability to balance multiple tasks at once to complete projects",
            "Maintained store organization and cleanliness of products and packaging",
            "Managed store drawers and product security",
            "Comfortable working multiple roles to maintain team integrity and success"
          ]
        }
      ],
      projects: [
        {
          title: "FPWC Eagle Scout Project",
          description: "Forest Preserves of Winnebago County Service Project",
          Role: "Project Leader",
          startDate: "May 2019",
          endDate: "July 2019",
          milestones: [
            "Successfully spearheaded a team of 8 fellow scouts in constructing 12 cedar wood duck nesting houses for donation to the FPWC",
            "Acquired and budgeted $500+ worth of materials and donations",
            "Organized dates, times, and locations of the project activities"
          ]
        }
      ],
      skills: [
        "Proficient with Microsoft Excel",
        "Effective writing and oratory abilities"
      ],
      awards: [
        {
          title: "Illinois Pharmacy Technician License"
        },
        {
          title: "Eagle Scout Rank",
          description: "Highest achievable rank in the Boy Scouts of America"
        },
        {
          title: "U of Iowa College of Pharmacy Assured Admission Student",
          description: "Earned a guaranteed seat in the class of 2026"
        }
      ],
      languages: [
        {
          lang: "English",
          fluency: "native"
        }
      ]
    };
    this.state = {};
  };
  render() {
    return (
      <div className="App">
        <form>
          <fieldset>
            <legend>Contact Info</legend>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name"/>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email"/>
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" name="phone" id="phone"/>
          </fieldset>
          <fieldset>
            <legend>Education</legend>
            <label htmlFor="schoolName1">Name of Institution:</label>
            <input type="text" name="schoolName1" id="schoolName1"/>
            <label htmlFor="fieldOfStudy1">Field of Study:</label>
            <input type="text" name="fieldOfStudy1" id="fieldOfStudy1"/>
            <label htmlFor="startSchoolDate1">Start Date:</label>
            <input type="text" name="startSchoolDate1" id="startSchoolDate1"/>
            <label htmlFor="endSchoolDate1">endDate:</label>
            <input type="text" name="endSchoolDate1" id="endSchoolDate1"/>
            <label htmlFor="commentsOnEducation1">Comments on Experience:</label>
            <textarea name="commentsOnEducation1" id="commentsOnEducation1"></textarea>
            <button type="button">+</button>
          </fieldset>
          <fieldset>
            <legend>Work History</legend>
            <label htmlFor="company">Company:</label>
            <input type="text" name="employer" id="company"/>
            <label htmlFor="positionTitle">Position Title:</label>
            <input type="text" name="positionTitle" id="positionTitle"/>
            <label htmlFor="startWorkDate1">Start Date:</label>
            <input type="text" name="startWorkDate1" id="startWorkDate1"/>
            <label htmlFor="endWorkDate1">endDate:</label>
            <input type="text" name="endWorkDate1" id="endWorkDate1"/>
            <label htmlFor="responsibilities">Position Responsibilities:</label>
            <textarea name="responsibilities" id="responsibilities"></textarea>
            <button type="button">+</button>
          </fieldset>
          <button type="button">Submit</button>
          <button type="button">Edit</button>
          <button type="reset">Clear All</button>
        </form>
      </div>
    );
  };
}

export default App;
