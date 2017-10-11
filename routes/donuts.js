const express = require('express');
const router = express.Router();
const knex = require('../db/knex.js');

router.get('/', (req, res) => {
  knex('donuts').then((donuts) => {
    res.render('./donuts/show.ejs',{donuts});
  });
});
router.get('/new', (req, res) => {
  res.render('./donuts/new.ejs');
});

router.get('/:id', (req, res) => {
  knex('donuts').where({id:req.params.id}).first()
  .then((donut) => {
    res.render('./donuts/index.ejs',{donut});
  });
});

router.get('/:id/edit', (req, res) => {
  knex('donuts').where({id:req.params.id}).first()
  .then((donut) => {
    res.render('./donuts/edit.ejs',{donut});
  });
});


router.post('/', (req, res) => {
  knex('donuts')
  .insert({
    name: req.body.name,
    topping: req.body.topping,
    price: parseInt(req.body.price),
  })
  .then(() => {
    res.redirect('/donuts');
  })
});

router.patch('/:id', (req, res) => {
  knex('donuts')
  .where({id:req.params.id})
  .update({
    topping: req.body.topping,
    price: parseInt(req.body.price)
  })
  .then(() => {
    res.redirect(`/donuts/${req.params.id}`);
  });
});

router.delete('/', (req, res) => {
  let curID = Object.keys(req.body)[0].substring(1);
  knex('donuts')
  .where({id: curID}).first()
  .del()
  .then(()=> {
    res.redirect('/donuts');
  })
});

module.exports = router;
