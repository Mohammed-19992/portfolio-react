import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Mohammed from './Mohammed.jpg';
import './landingpage.css';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Mohammed Arafat</h2>
            <img id="img" src={Mohammed} style={{height: '250px', width: '250px'}} alt="Mohammed"/>
             <p style={{ width: '80%', margin: 'auto', paddingTop: '1em', fontSize: '20px'}}>Front-end web developer with demonstrated problem-solving skills looking to join the industry that will shape the future</p>
          </Cell>

          <Cell col={4}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '130%', fontFamily: 'Impact'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/> <a id="contact" href="tel:5713438212">(571) 343-8212</a>
                  </ListItemContent>
                </ListItem>              
                <ListItem>
                  <ListItemContent style={{fontSize: '130%', fontFamily: 'Impact', padding: 'auto'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/> <a id="contact" href="mailto:mohammed.salah.arafat@gmail.com">Email Me</a>
                    
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '130%', fontFamily: 'Impact', padding: 'auto'}}>
                    <i className="fa fa-whatsapp" aria-hidden="true"/><a id="contact" href="https://api.whatsapp.com/send?phone=+5713438212">1 571 343 8212</a>
                    
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
