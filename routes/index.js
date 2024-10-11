var express = require('express');
var router = express.Router();
const getListingsByCategory = require('../getListings');

function calculateSellThroughRate(soldItems, totalItemsListed) {
  if (totalItemsListed === 0) return 0;
  return (soldItems / totalItemsListed) * 100;
}

/* GET home page. */
router.get('/', async function(req, res, next) {
  

  res.render('index', { title: 'Express' });
});

router.get('/sell-through-rate/:category', async function(req,res, next){
  //
  const category = req.params.category;

    try {
        const items = await getListingsByCategory(category);
        
        const totalItemsListed = items.length;
        const soldItems = items.filter(item => item.sellingStatus && item.sellingStatus.sold).length;
        
        const sellThroughRate = calculateSellThroughRate(soldItems, totalItemsListed);
        
        res.json({
            categoryId,
            totalItemsListed,
            soldItems,
            sellThroughRate
        });
    } catch (error) {
        res.status(500).send('Error calculating sell-through rate: /n'+ error);
    }

})

module.exports = router;
