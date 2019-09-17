exports.getPosts = (req, res, next) => {
  res.status(200).json({ 
    posts: [
      {
        _id: '1',
        title: 'first post!', 
        content: 'this is the first post!',
        imageUrl: 'images/nico-av.jpg',
        creator: {
          name: 'Nico'
        },
        createdAt: new Date()
      }
    ]
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  // Create post in database
  res.status(201).json({
    message: 'post created successfully!',
    post: { 
      _id: new Date().toISOString(), 
      title: title, 
      content: content,
      creator: {
        name: 'Nico'
      },
      createdAt: new Date()
    }
  });
};