const express = require('express');
const router  = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express - Generated with IronGenerator' });
});

router.get ("/", (req, res) => {
  Post
    .find()
    .then(showPost => res.json(showPost))
})
router.post('/', (req, res) => {
  Post 
    .create({
      content: req.body.content,
      creatorId:  req.body.creatorId,
      picPath: req.body.picPath,
      picName: req.body.picName
    })
    .then(newPost => res.json(newPost))
    .catch(err => res.json(err))
});



module.exports = router;
