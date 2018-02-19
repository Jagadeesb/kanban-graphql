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
    addTask: (root, {id, title, description, status, dueDate}) => {
      const task = new taskModel({id: id, title: title, description: description, status: status, dueDate: dueDate});
      return task.save();
    },
    deleteBoard: (root, {id}) => {
      return boardModel.findOneAndRemove({id: id})
    },
    deleteTask: (root, {taskId}) => {
      return  taskModel.findOneAndRemove({taskId: taskId})
    },
    updateBoard: (root, {id, name}) => {
      return boardModel.findOneAndUpdate({id: id}, {name: name})
    },
    editTask: (root, {taskId, id, title, description, status, dueDate}) => {
      return taskModel.findOneAndUpdate({taskId: taskId}, {id: id, title: title, description: description, status: status, dueDate: dueDate} )
    }
  }
}

export default resolvers;