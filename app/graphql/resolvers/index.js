const Author = require('../../models/author.model');

module.exports = {
  //author by name
  author: async (args, parent) => {
    try {
      const { name } = args;
      return await Author.findOne({ name });
    } catch (error) {
      throw error;
    }
  },
  // all authors details
  authors: async () => {
    try {
      return Author.find({});
    } catch (error) {
      throw error;
    }
  },
  // create new author
  createAuthor: async (args, parent) => {
    try {
      const author = new Author({ ...args.author });
      return await author.save();
    } catch (error) {
      throw error;
    }
  },
};
