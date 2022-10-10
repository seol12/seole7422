const express = require('express');
const db = require('../models');

const router = express.Router();


router.get('/', async (req, res, next) => { 
  
  try {
    let where = {};
    if(parseInt(req.query.lastId, 10)) {
      where = {
        id: {
          [db.Sequelize.Op.lt]: parseInt(req.query.lastId, 10), 
        },
      };
    }
    const posts = await db.Post.findAll({
      where,
      include: [{
        model: db.User,
        attributes: ['id', 'nickname'],
      }, {
        model: db.Image,
      }, {
        model: db.User,
        through: 'PostLike',
        as: 'PostLikers',
        attributes: ['id'],
      }, {
        model: db.Comment,
        include: [{
          model: db.User,
          attributes: ['id', 'nickname'],
        }],
      }],
      order: [['createdAt', 'DESC']], 
      limit: parseInt(req.query.limit, 10),
    });
    return res.json(posts);
  }catch(e) {
    console.error(e);
    next(e);
  }

});


module.exports = router;