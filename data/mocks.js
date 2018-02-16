import casual from 'casual';

const mocks = {
  String: () => 'It works!',
  Query: () => ({
    board: (root, args) => {
      return { name: args.name };
    }
  }),
  Board: () => ({ name: () => casual.name, tasks: () => casual.task }),
  Task: () => ({ title: () => casual.title, description: () => casual.description, status: () => casual.status, dueDate: () => casual.dueDate })
};

export default mocks;
