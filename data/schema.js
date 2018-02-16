import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import mocks from './mocks';

const typeDefs = `
type Query {
  board(name: String): Board
  allBoards: [Board]
  getFortuneCookie: String #we'll use this later
}

type Board {
  id: Int
  name: String
  openTasks: [Task]
  allTasks: [Task]
}

type Task {
  id: Int
  title: String
  description: String
  status: String
  dueDate: String
}
`;

const schema = makeExecutableSchema({ typeDefs });

addMockFunctionsToSchema({ schema, mocks });

export default schema;
