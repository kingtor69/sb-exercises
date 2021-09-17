const express = require("express")
const router = new express.Router()
const ExpressError = require("./expressError")
const items = require("./fakeDb")

router.get("/", (req,res) => {
  return res.json({items});
});

router.get("/:name", function (req, res, next) {
    try {
        const foundItem = items.find(item => item.name === req.params.name);
        if(foundItem === undefined){
            throw new ExpressError("Item not found", 404)
        };
        res.json({ item: foundItem });
    } catch(e) {
        next(e);
    };
  });
  
  router.post("/", function (req, res, next) {
  try {
    if (!req.body.name || !req.body.price) throw new ExpressError("Item must have a name and a price", 400);
    const newItem = { name: req.body.name, price: req.body.price }
    items.push(newItem)
    return res.status(201).json({ added: newItem })
  } catch(e) {
    return next(e)
  }
})

router.patch("/:name", function (req, res, next) {
    try {
      const foundItem = items.find(item => item.name === req.params.name)
      if (foundItem === undefined) {
          throw new ExpressError("Item not found", 404)
        }
        if (req.body.name) foundItem.name = req.body.name;
        if (req.body.price) foundItem.price = req.body.price;
        return res.json({ updated: foundItem });
    } catch (e) {
        next(e);
    };
});

router.delete("/:name", function (req, res, next) {
    try {
        const foundItem = items.findIndex(item => item.name === req.params.name)
        if (foundItem === -1) throw new ExpressError("Item not found", 404)
        items.splice(foundItem, 1)
        return res.json({ message: "Deleted" })
    } catch (e) {
        next(e);
    };
});

module.exports = router;