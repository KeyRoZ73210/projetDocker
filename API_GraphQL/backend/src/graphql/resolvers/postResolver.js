const { Post } = require("../../models/Post");

module.exports = {
  Query: {
    posts: async (parent, args) => {
      const order = args.order || 'asc';
      const sortOrder = order === 'desc' ? -1 : 1;
      const posts = await Post.find().sort({ createdAt: sortOrder });
      return posts;
    },
    postById: async (parent, args) => {
      return await Post.findById(args.id);
    },
  },
  Mutation: {
    createPost: async (parent, args) => {
      try {
        const { title, author, link } = args;
        const post = new Post({ title, author, link });
        await post.save();
        return post;
      } catch (error) {
        console.log(error);
      }
    },

    deletePost: async (parent, args) => {
      try{
        const deletePost = await Post.findByIdAndDelete(args.id);
        return deletePost.id;
      }catch(error){
        console.log(error);
      }
    },
  },
};

