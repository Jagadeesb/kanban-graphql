import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Boards extends Component {
  render() {
  
    if (this.props.boardsQuery && this.props.boardsQuery.loading) {
      return <div>Loading...</div>
    }

    if (this.props.boardsQuery && this.props.boardsQuery.error) {
      return <div>Error</div>
    }

    const boardsToRender = this.props.boardsQuery.boards;
    

   return (
      <div>
        <h1>All Boards</h1>
        <ul>
          {boardsToRender.map(board => 
            <li key={board.id}>
              <h2>{board.name}</h2>
              <p>
                <span> Open Tasks: <strong>{(!board.openTasks) ? 0 : board.openTasks} </strong></span>
                <span> All Tasks: <strong>{(!board.allTasks) ? 0 : board.allTasks}</strong></span>
              </p>
            </li> 
          )}
        </ul>
      </div>
    );
  }
}

const BOARDS_QUERY = gql `
  query BoardsQuery {
    boards {
      id
      name
      openTasks
      allTasks
    }
  }
`;

export default graphql(BOARDS_QUERY, { name: 'boardsQuery' }) (Boards);