import mongoose from 'mongoose';
import boardModel from './models/board';
import taskModel from './models/task';

const resolvers = {
  Query: {
    boards: () => {
      return boardModel.find({})
    },
    board: (root, {id}) => {
      return boardModel.find({id: id})
    }
  },
  Mutation: {
    addBoard: (root, {name}) => {
      const board = new boardModel({name: name});
      return board.save();
    },
    addTask: (root, {title, description, status, dueDate}) => {
      const task = new taskModel({title: title, description: description, status: status, dueDate: dueDate});
      return task.save();
    },
    deleteBoard: (root, {id}) => {
      return boardModel.findOneAndRemove({id: id})
    },
    deleteTask: (root, {id}) => {
      return  taskModel.findOneAndRemove({id: id})
    },
    updateBoard: (root, {id, name}) => {
      return boardModel.findOneAndUpdate({id: id}, {name: name})
    },
    editTask: (root, {id, title, description, status, dueDate}) => {
      return taskModel.findOneAndUpdate({id: id}, {title: title, description: description, status: status, dueDate: dueDate} )
    }
  }
}

export default resolvers;