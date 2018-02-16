import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
  type Boards {
    id: String
    name: String
    openTasks: Int
    allTasks: Int
  }

  type Board {
    id: String
    name: String
    tasks: [Task]
  }

  type Task {
    taskId: String
    title: String
    description: String
    status: String
    dueDate: String
  }

  type Query {
    boards: [Boards]
    board(id: String!): [Board]
  }

  type Mutation {
    addBoard(name: String!) : Board
    addTask(title: String!, description: String, status: String!, dueDate: String!): Task
    deleteBoard(id: String!) : Board
    deleteTask(id: String!) : Task
    updateBoard(id: String!, name: String!): Board
    editTask(id: String!, title: String!, description: String, status: String!, dueDate: String!): Task
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;