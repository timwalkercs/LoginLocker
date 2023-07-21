import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {

    //Layout Component, arranges the layout of the webpage
        //The NavMenu is placed across the top and another component can be passed into the container to be displayed dynamically

  static displayName = Layout.name;
  render() {
    return (
        <div>
        <NavMenu />
        <Container>
          {this.props.children  /* The component that will be passed into the container */}
        </Container>
      </div>
    );
  }
}
