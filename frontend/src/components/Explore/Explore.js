import React, {useState} from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import "./Explore.css";
import Restaurants from './Restaurants/Restaurants'
import ThingsToDo from './ThingsToDo/ThingsToDo'

const Explore = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

    return (
      <div>
        <Nav tabs className="navbar2">
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' }), 'navlinks'}
              onClick={() => { toggle('1'); }}
            >
              Restaurants
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' }), 'navlinks'}
              onClick={() => { toggle('2'); }}
            >
              Things to Do
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <Restaurants/>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
            <Col sm="12">
                <ThingsToDo/>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }

  export default Explore;
