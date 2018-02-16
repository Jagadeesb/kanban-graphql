import mongoose from 'mongoose';
import uuid from 'node-uuid';
const schema = mongoose.Schema;

const boardSchema = new schema({
  id: {type: String, default: uuid.v1},
  name: String,
  tasks: [String]
});

const model = mongoose.model('board', boardSchema);

export default model