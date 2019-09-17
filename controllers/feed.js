exports.getPosts = (req, res, next) => {
  res.status(200).json({ 
    title: 'first post!', content: 'this is the first post!'
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  // Create post in database
  res.status(201).json({
    message: 'post created successfully!',
    post: { 
      id: new Date().toISOString(), 
      title: title, 
      content: content
    }
  });
};