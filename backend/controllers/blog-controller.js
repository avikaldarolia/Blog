import Blog from '../models/Blog';

export const getAllBlogs = async (req, res, next) => {
  let blogs;
  try {
    blogs = await Blog.find();
  } catch (error) {
    return console.log(error);
  }
  if (!blogs) {
    return res.status(404).json({ message: 'No blogs found!' });
  }
  return res.status(200).json({ blogs });
};

export const addBlog = async (req, res, next) => {
  const { title, image, description, user } = req.body;
  const blog = new Blog({
    title,
    description,
    image,
    user,
  });
  try {
    await blog.save();
  } catch (error) {
    return console.log(error);
  }
  return res.status(200).json({ blog });
};

export const updateBlog = async (req, res, next) => {
  const { title, description } = req.body;
  const blogId = req.params.id;
  let blog;
  try {
    blog = await Blog.findByIdAndUpdate(blogId, {
      title,
      description,
    });
  } catch (error) {
    return console.log(error);
  }
  if (!blog) {
    return res.status(500).json({ message: 'Unable to update the blog' });
  }
  return res.status(200).json({ blog });
};

export const getById = async (req, res, next) => {
  const blogId = req.params.id;
  let blog;
  try {
    blog = await Blog.findById(blogId);
  } catch (error) {
    return console.log(error);
  }
  if (!blog) {
    return res.status(404).json({ message: 'No Blog Found' });
  }
  return res.status(200).json({ blog });
};

export const deleteBlog = async (req, res, next) => {
  const blogId = req.params.id;
  let blog;
  // if it exists
  try {
    blog = await Blog.findByIdAndRemove(blogId);
  } catch (error) {
    return console.log(error);
  }
  if (!blog) {
    return res.status(500).json({ message: 'Unabel To Delete' });
  }
  return res.status(200).json({ message: 'Blog Deleted Succesfully' });
};
