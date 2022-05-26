import React from "react";
import "./styles/App.css";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Work from "./components/Work";

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
    this.state = {
      educationEntriesCount: 1,
      workEntriesCount: 1
    };
  };
  render() {
    return (
      <div className="App">
        <form>
          <Contact/>
          <Education/>
          <Work/>
          <button type="button">Submit</button>
          <button type="button">Edit</button>
          <button type="reset">Clear</button>
        </form>
      </div>
    );
  };
}

export default App;