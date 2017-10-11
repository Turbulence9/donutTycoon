const express = require('express');
const router = express.Router();
const knex = require('../db/knex.js');

router.get('/', (req, res) => {
  knex('shops').then((shops) => {
    res.render('./shops/show.ejs',{shops});
  });
});
router.get('/new', (req, res) => {
  res.render('./shops/new.ejs');
});

router.get('/:id', (req, res) => {
  knex('shops_donuts')
  .select('shops.id','shops.name as shop_name','shops.city','donuts.name as donut_name','donuts.topping','donuts.price')
  .innerJoin('donuts', 'shops_donuts.donut_id', 'donuts.id')
  .innerJoin('shops', 'shops_donuts.shop_id', 'shops.id')
  .where('shops.id',req.params.id)
  .then((shopsDonuts) => {
    if(shopsDonuts.length !== 0){
      res.render('./shops/index.ejs',{SD: shopsDonuts});
    } else {
      knex('shops')
      .select('shops.id','shops.name as shop_name','shops.city')
      .where('shops.id',req.params.id)
      .then((shop) => {
        res.render('./shops/index.ejs',{SD: shop});
      })
    }
  });
});

router.get('/:id/edit', (req, res) => {
  knex('shops').where({id:req.params.id}).first()
  .then((shop) => {
    res.render('./shops/edit.ejs',{shop});
  });
});


router.post('/', (req, res) => {
  knex('shops')
  .insert({
    name: req.body.name,
    city: req.body.city
  })
  .then(() => {
    res.redirect('/shops');
  })
});

router.patch('/:id', (req, res) => {
  knex('shops')
  .where({id:req.params.id})
  .update({
    city: req.body.city
  })
  .then(() => {
    res.redirect(`/shops/${req.params.id}`);
  });
});

router.delete('/', (req, res) => {
  let curID = Object.keys(req.body)[0].substring(1);
  knex('shops')
  .where({id: curID}).first()
  .del()
  .then(()=> {
    res.redirect('/shops');
  })
});

module.exports = router;
