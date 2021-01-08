import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu } from 'react-mdl';
import './project.css';
import demo from './demo.gif';
import github from './github.gif';
import BudgetTracker from './BudgetTracker.png';
import FitnessTracker from './FitnessTracker.png';
import NoteTaker from './NoteTaker.png';
import table from './table.png';
import Weather from './Weather.png';
import UserDirectory from './UserDirectory.png';
import arrow2 from './arrow2.gif';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (
        
        <div className="projects-grid">
                  <h5 id="a"> Here are six of my projects that I worked on. Two buttons below each project are provided; demo and GitHub Repo</h5>
          <br></br>
          <img id="img" src={arrow2} alt="arrow"/>

          {/* First Project */}
          <Card shadow={5} style={{margin: 'auto', maxWidth:'100%', width: '700px'}}>
            <CardTitle><img src={BudgetTracker} alt="budget tracker app" height="100%" width="100%" /></CardTitle>
            <CardText style={{ color: 'black', textAlign: 'left' }}>
              <h3>Budget Tracker</h3>
              <hr></hr>
              <h5 id="h5">This app is built with mongodb, Express, JavaScript, HTML, and CSS. The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online. </h5></CardText>
            <CardActions border>
              <a href="https://shielded-sea-28939.herokuapp.com/" id="line"><img src={demo} alt="demo icon" height="80px" width="80px" /></a>
              <a href="https://github.com/Mohammed-19992/budget-tracker" id="line"><img src={github} alt="github icon" height="60px" width="60px" /></a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>

            </CardMenu>
          </Card>
          <br></br>
          <br></br>

          {/* Second Project */}
          <Card shadow={5} style={{margin: 'auto', maxWidth:'100%', width: '700px'}}>
            <CardTitle><img src={FitnessTracker} alt="Fitness tracker app" height="100%" width="100%" /></CardTitle>
            <CardText style={{ color: 'black', textAlign: 'left' }}>
              <h3>Fitness Tracker</h3>
              <hr></hr>
              <h5 id="h5">This app is built with Mongo database, a Mongoose schema and handle routes with Express. Fitness Tracker allows the user to view, create and track daily workouts. It makes them able to log multiple exercises in a workout on a given day, and it gives them the ability to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, the user should be able to track their distance traveled.</h5></CardText>
            <CardActions border>
              <a href="https://shielded-lake-04888.herokuapp.com" id="line"><img src={demo} alt="demo icon" height="80px" width="80px" /></a>
              <a href="https://github.com/Mohammed-19992/fitness-tracker" id="line"><img src={github} alt="github icon" height="60px" width="60px" /></a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>

            </CardMenu>
          </Card>
          <br></br>
          <br></br>

          {/* Third Project */}
          <Card shadow={5} style={{margin: 'auto', maxWidth:'100%', width: '700px'}}>
            <CardTitle><img src={NoteTaker} alt="Note Taker App" height="100%" width="100%" /></CardTitle>
            <CardText style={{ color: 'black', textAlign: 'left' }}>
              <h3>Note Taker</h3>
              <hr></hr>
              <h5 id="h5">This app is built with a code using EXPRESS, that allows users to enter whatever information they want, save them, and then use them later.</h5></CardText>
            <CardActions border>
              <a href="https://note-taker-mohammed.herokuapp.com/" id="line"><img src={demo} alt="demo icon" height="80px" width="80px" /></a>
              <a href="https://github.com/Mohammed-19992/note-taker" id="line"><img src={github} alt="github icon" height="60px" width="60px" /></a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              
            </CardMenu>
          </Card>
          <br></br>
          <br></br>

          {/* Fourth Project */}
          <Card shadow={5} style={{margin: 'auto', maxWidth:'100%', width: '700px'}}>
            <CardTitle><img src={table} alt="scheduler app" height="100%" width="100%" /></CardTitle>
            <CardText style={{ color: 'black', textAlign: 'left' }}>
              <h3>Work Day Scheduler</h3>
              <hr></hr>
              <h5 id="h5">This Calender/Scheduler application runs in the browser responsively, and it's powered by jQuery. Using the Moment.js library to work with date and time, this application allows users to save events and important events for each hour of the day. When the user views the timeblocks of the current day, each timeblock is color-coded to indicate whether it is in the past, present, or future. The past is light pink, the present is light brown, and the future is light green. When the user enters an event, they can save that event in local storage, which means that they can refresh thier page and the saved events persist.</h5></CardText>
            <CardActions border>
              <a href="https://mohammed-19992.github.io/scheduler/" id="line"><img src={demo} alt="demo icon" height="80px" width="80px" /></a>
              <a href="https://github.com/Mohammed-19992/scheduler" id="line"><img src={github} alt="github icon" height="60px" width="60px" /></a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              
            </CardMenu>
          </Card>
          <br></br>
          <br></br>

          {/* Fifth Project */}
          <Card shadow={5} style={{margin: 'auto', maxWidth:'100%', width: '700px'}}>
            <CardTitle><img src={UserDirectory} alt="user directory app" height="100%px" width="100%px" /></CardTitle>
            <CardText style={{ color: 'black', textAlign: 'left' }}>
              <h3>User Directory</h3>
              <hr></hr>
              <h5 id="h5">This app is built with react using react-build-app and deployed with Heroku. When the user loads the page, a table of employees renders, and the user is able to sort the table by the name alphabetically (from A to Z or from Z to A). The user also has the ability to search for the name of the user using the search bar.</h5></CardText>
            <CardActions border>
              <a href="https://rocky-hollows-15070.herokuapp.com/" id="line"><img src={demo} alt="demo icon" height="80px" width="80px" /></a>
              <a href="https://github.com/Mohammed-19992/user-directory" id="line"><img src={github} alt="github icon" height="60px" width="60px" /></a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
            
            </CardMenu>
          </Card>
          <br></br>
          <br></br>

          {/* Sixth Project */}
          <Card shadow={5} style={{margin: 'auto', maxWidth:'100%', width: '700px'}}>
            <CardTitle><img src={Weather} alt="weather dashboard app" height="100%px" width="100%px" /></CardTitle>
            <CardText style={{ color: 'black', textAlign: 'left' }}>
              <h3>Weather Dashboard</h3>
              <hr></hr>
              <h5 id="h5">I created this weather dashboard that helps the user to indicate what the weather looks like in a city they search for. It also shows the next five days's weather forecast. I started with creating a navigation bar that includes the name of the app, which is Weather Checker, and then the body, which includes the search bar, and the dashboard itself, and the cards that show the weather forecast for the next five days of the searched city. </h5></CardText>
            <CardActions border>
              <a href="https://mohammed-19992.github.io/weather-dashboard/" id="line"><img src={demo} alt="demo icon" height="80px" width="80px" /></a>
              <a href="https://github.com/Mohammed-19992/weather-dashboard" id="line"><img src={github} alt="github icon" height="60px" width="60px" /></a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              
            </CardMenu>
          </Card>
          <br></br>
          <br></br>
        </div>



      )
    }

  }


  render() {
    return (
      <div>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>


      </div>
    )
  }
}

export default Projects;
