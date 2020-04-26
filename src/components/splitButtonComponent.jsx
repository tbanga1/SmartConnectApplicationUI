import React, { Component } from "react";
import { SplitButton, Dropdown } from "react-bootstrap";

class SplitButton extends Component {
  render() {
    return (
      <div>
        <SplitButton bsSize="large" title="Default Block">
          <Dropdown.Item eventKey="Primary Block" onSelect={this.chooseTheme}>
            Primary Theme
          </Dropdown.Item>
          <Dropdown.Item eventKey="Danger Block" onSelect={this.chooseTheme}>
            Danger Theme
          </Dropdown.Item>
          <Dropdown.Item eventKey="Success Block" onSelect={this.chooseTheme}>
            Success Theme
          </Dropdown.Item>
          <Dropdown.Item divider />
          <Dropdown.Item eventKey="Reset Block" onSelect={this.chooseTheme}>
            Default Theme
          </Dropdown.Item>
        </SplitButton>
      </div>
    );
  }
}
