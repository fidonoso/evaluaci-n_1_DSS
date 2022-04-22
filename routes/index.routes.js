const express = require('express')
const router = express.Router();
// const utils = require('../src/utils')
const main=require('../controllers/MainController.js')

//Rutas

router.get('/', main.getIndex);
// router.post('/login', main.setLogin);
router.post('/post', main.getPost);

// router.post('/comentar', main.postComments)
// router.get('/getPosts', main.getComments)


module.exports = router;