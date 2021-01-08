import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/main';



class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/portfolio-react">My Portfolio</Link>} scroll>
            <Navigation>
                <Link to="./commponents/resume">My Resume</Link>
                <Link to="./commponents/aboutme">About Me</Link>
                <Link to="./commponents/projects">My Projects</Link>
                <Link to="./commponents/contact">Contact Me</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/portfolio-react">My Portfolio</Link>}>
            <Navigation>
              <Link to="./commponents/resume">My Resume</Link>
              <Link to="./commponents/aboutme">About Me</Link>
              <Link to="./commponents/projects">My Projects</Link>
              <Link to="./commponents/contact">Contact Me</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
