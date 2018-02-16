import mongoose from 'mongoose';
import uuid from 'node-uuid';
const schema = mongoose.Schema;

const taskSchema = new schema({
  taskId: {type: String, default: uuid.v1},
  title: String,
  description: String,
  status: String,
  dueDate: String
});

const model = mongoose.model('task', taskSchema);

export default model