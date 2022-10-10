const express = require('express');
const multer = require('multer');
const path = require('path');
const AWS = require('aws-sdk');
const multerS3 = require('multer-s3');
const db = require('../models');
const { isLoggedIn} = require('./middleware');


const router = express.Router();
AWS.config.update({
  
  region: 'ap-northeast-2',
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,

});

const upload = multer({

  storage: multerS3({
    s3: new AWS.S3(),
    bucket: 'seolcat',
    key(req, file, cb){
      cb(null, `original/${+new Date()}${path.basename(file.originalname)}`);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024},

});


router.post('/', isLoggedIn, upload.none(), async (req, res, next) => { 
  
  try {
    const newPost = await db.Post.create({
      content: req.body.content, 
      UserId: req.user.id,
    });
    if(req.body.image) { 
      if(Array.isArray(req.body.image)) {
        const images = await Promise.all(req.body.image.map((v) => {
          return db.Image.create({ src: v});
        }));
        await newPost.addImages(images);
      }else { 
        const image = await db.Image.create({ src: req.body.image});
        await newPost.addImage(image);
      }
    }
    const fullPost = await db.Post.findOne({
      where: { id: newPost.id},
      include: [{
        model: db.User,
        attributes: ['id', 'nickname'],
      }, {
        model: db.Image,
      }, {
        model: db.User,
        as: 'PostLikers',
        attributes: ['id'],
      }, {
        model: db.Comment,
        include: [{
          model: db.User,
          attributes: ['id', 'nickname'],
        }],
      }],
    });
    return res.json(fullPost);
  }catch(e) {
    console.error(e);
    next(e);
  }

});

router.post('/images', upload.array('image'), (req, res) => {

  return res.json(req.files.map((v) => { return v.location}));

});

router.get('/:id', async (req, res, next) => {
  
  try {
    const post = await db.Post.findOne({
      where: { id: req.params.id},
      include: [{
        model: db.User,
        attributes: ['id', 'nickname'],
      }, {
        model: db.Image,
      }, {
        model: db.User,
        through: 'PostLike',
        as: 'PostLikers',
        attributes:['id']
      }, {
        model: db.Comment,
        include: [{
          model: db.User,
          attributes: ['id','nickname'],
        }],
      }],
    });
    return res.json(post);
  }catch(e) {
    console.error(e);
    next(e);
  }

});

router.delete('/:id', isLoggedIn, async (req, res, next) => {
  
  try {
    const post = await db.Post.findOne({ where: { id: req.params.id}});
    if(!post) {
      return res.status(404).send('포스트가 존재하지 않습니다.');
    }
    await db.Post.destroy({ where: { id: req.params.id}});
    return res.send(req.params.id);
  }catch(e) {
    console.error(e);
    next(e);
  }

});

router.post('/:id/comment', isLoggedIn, async (req, res, next) => { 

  try {
    const post = await db.Post.findOne({ where: { id: req.params.id}});
    if(!post) {
      return res.status(404).send('포스트가 존재하지 않습니다.');
    }
    const newComment = await db.Comment.create({
      PostId: post.id,
      UserId: req.user.id,
      content: req.body.content,
    });
    await post.addComment(newComment.id);
    const comment = await db.Comment.findOne({
      where: {
        id: newComment.id,
      },
      include: [{
        model: db.User,
        attributes: ['id', 'nickname'],
      }],
    });
    return res.json(comment);
  }catch(e) {
    console.error(e);
    return next(e);
  }

});

router.post('/:id/like', isLoggedIn, async (req, res, next) => {

  try {
    const post = await db.Post.findOne({ where: { id: req.params.id}});
    if(!post) {
      return res.status(404).send('포스트가 존재하지 않습니다.');
    }
    await post.addLiker(req.user.id);
    return res.json({ userId: req.user.id});
  }catch(e) {
    console.error(e);
    next(e);
  }

});

router.delete('/:id/like', isLoggedIn, async (req, res, next) => {

  try {
    const post = await db.Post.findOne({ where: { id: req.params.id}});
    if(!post) {
      return res.status(404).send('포스트가 존재하지 않습니다.');
    }
    await post.removeLiker(req.user.id);
    return res.json({ userId: req.user.id});
  }catch(e) {
    console.error(e);
    next(e);
  }

});

router.delete('/comment/:id', isLoggedIn, async (req, res, next) => {
  
  try {
    await db.Comment.destroy({ where: { id: req.params.id }});
    return res.send(req.params.id);
  }catch(e) {
    console.error(e);
    next(e);
  }

});


module.exports = router;