const { validationResult } = require('express-validator/check');

const Post = require('../models/post');

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
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed, data incorrect');
    error.statusCode = 422;
    throw error;
  }
  const title = req.body.title;
  const content = req.body.content;
  const post = new Post({
    title: title, 
      content: content,
      creator: {
        name: 'Nico'
      },
      imageUrl: 'images/nico-av.jpg',
      creator: { name: 'Nico' }
  });
  post
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: 'post created successfully!',
        post: result
      });
    })
    .catch(err => {
      if (error.statusCode){
        err.statusCode = 500;
      }
      next(err);
  });
};