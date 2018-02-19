import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class CreateBoard extends Component {
  state = {
    name: ''
  };

  _createBoard = async() => {
    const { name } = this.state;
    await this.props.AddBoardMutation({
      variables: {
        name
      }
    })
  };

  render() {
    return (
      <div className="flex flex-column mt3">
        <input
          className="mb2"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
          type="text"
          placeholder="A title for the Board"
        />
        <div className="flex flex-column mt3">
          <button onClick={() => this._createBoard()}>Submit</button>
          <button>Add Task</button>
        </div>
      </div>
    );
  }
}

const ADDBOARD_MUTATION = gql `
  mutation AddBoardMutation($name: String!) {
    addBoard(name: $name) {
      id
      name
    }
  }
`;

export default graphql(ADDBOARD_MUTATION, { name: 'AddBoardMutation' })(CreateBoard);