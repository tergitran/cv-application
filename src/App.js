import React from 'react';
import './App.css';
import GeneralInfor from './components/GeneralInformation/GeneralInformation';
import EducationalExperience from './components/EducationalExperience/EducationalExperience';
import PracticalExperience from './components/PracticalExperience/PracticalExperience';
import Button from './components/Button/Button';
import Display from './components/Display/Display';
class App extends React.Component {

  constructor() {
    super();

    this.state = {
      generalInfor: {
        name: 'Trần Dần',
        email: 'Tergitran@gmail.com',
        phoneNumber: '0982548515'
      },
      educationalExp: {
        school: 'UIT',
        titleOfStudy: 'Information Technology',
        dateOfStudy: '1998-11-02'
      },
      practicalExp: {
        company: 'KMS Technology',
        positionTitle: 'ReactJS developer ',
        mainTasks: 'Design UI using vanila CSS and Material-ui framework. Manipulate between components by ReactJS',
        periodOfTime: {
          start: '',
          end: ''
        }
      },
      isEditing: false
    };
  }

  handleChange = (e, section)=> {
    const name = e.target.name;
    let value = e.target.value;

    let inputChanged = null;

    switch(section) {
      case 'generalInfor':
        inputChanged = {...this.state.generalInfor};
        break;
      case 'educationalExp':
        inputChanged = {...this.state.educationalExp};
        break;
      case 'practicalExp':
        inputChanged = {...this.state.practicalExp};
        break;
    }


    if(name==='start'||name==='end') {
      inputChanged.periodOfTime[name] = value;
    } else {
      inputChanged[name] = value;
    }

    this.setState({
      [section]: inputChanged
    })
    // console.log(value);
  }

  togglePage = ()=> {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  render() {

    let page = <Display infor={this.state}/>;
    if(this.state.isEditing) {
      page = <div>
      <GeneralInfor 
        handleChange={this.handleChange} 
        generalInfor={this.state.generalInfor} 
        section='generalInfor'></GeneralInfor>
      <EducationalExperience 
        handleChange={this.handleChange} 
        educationalExp={this.state.educationalExp} 
        section='educationalExp'></EducationalExperience>
      <PracticalExperience 
        handleChange={this.handleChange} 
        practicalExp = {this.state.practicalExp }
        section='practicalExp'
        ></PracticalExperience>
    </div>
    }

    return (
      <div className="App">
          {/* <h1>CV Application</h1> */}
          {page}
          <div>
            <Button clicked = {this.togglePage}>{this.state.isEditing?"Submit":"Edit"}</Button>
            {/* <Button>Submit</Button> */}
          </div>
          
      </div>
    );
  }
}

export default App;
