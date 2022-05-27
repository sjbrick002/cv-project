import React from "react";
import "./styles/App.css";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Work from "./components/Work";

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      educationEntriesCount: 1,
      workEntriesCount: 1
    };
    this.addSchoolEntries = this.addSchoolEntries.bind(this);
    this.removeSchoolEntries = this.removeSchoolEntries.bind(this);
    this.addWorkEntries = this.addWorkEntries.bind(this);
    this.removeWorkEntries = this.removeWorkEntries.bind(this);
    this.resetEntries = this.resetEntries.bind(this);
    this.submit = this.submit.bind(this);
    this.edit = this.edit.bind(this);
  };
  addSchoolEntries() {
    this.setState({educationEntriesCount: this.state.educationEntriesCount + 1});
  };
  removeSchoolEntries() {
    this.setState({educationEntriesCount: this.state.educationEntriesCount - 1});
  };
  addWorkEntries() {
    this.setState({workEntriesCount: this.state.workEntriesCount + 1});
  };
  removeWorkEntries() {
    this.setState({workEntriesCount: this.state.workEntriesCount - 1});
  };
  resetEntries() {
    this.setState({educationEntriesCount: 1, workEntriesCount: 1});
  };
  submit() {
    let formItemList = document.querySelectorAll("input, textarea, div.button-set > button");
    formItemList.forEach(item => item.setAttribute("disabled",""));
  };
  edit() {
    let formItemList = document.querySelectorAll("input, textarea, button");
    formItemList.forEach(item => item.removeAttribute("disabled"));
  };
  render() {
    return (
      <div className="App">
        <form>
          <Contact/>
          <Education schoolCount={this.state.educationEntriesCount} addEntry={this.addSchoolEntries} removeEntry={this.removeSchoolEntries}/>
          <Work workCount={this.state.workEntriesCount} addEntry={this.addWorkEntries} removeEntry={this.removeWorkEntries}/>
          <button type="button" onClick={this.submit}>Submit</button>
          <button type="button" onClick={this.edit}>Edit</button>
          <button type="reset" onClick={this.resetEntries}>Clear</button>
        </form>
      </div>
    );
  };
}

export default App;