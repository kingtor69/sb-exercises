const express = require("express")
const router = new express.Router()
const ExpressError = require("./expressError")
const cats = require("./fakeDb")

router.get("/", (req,res) => {
  return res.json({items});
});

router.get("/:name", function (req, res) {
    const foundItem = items.find(item => item.name === req.params.name);
    if(foundItem === undefined){
      throw new ExpressError("Item not found", 404)
    };
    res.json({ item: foundItem });
  });
  
  router.post("/", function (req, res) {
  try {
    if(!req.body.name) throw new ExpressError("Name is required", 400);
    const newCat = { name: req.body.name }
    cats.push(newCat)
    return res.status(201).json({ cat: newCat })
  } catch(e) {
    return next(e)
  }
})

router.patch("/:name", function (req, res) {
  const foundCat = cats.find(cat => cat.name === req.params.name)
  if (foundCat === undefined) {
    throw new ExpressError("Cat not found", 404)
  }
  foundCat.name = req.body.name 
  res.json({ cat: foundCat })
})

router.delete("/:name", function (req, res) {
  const foundCat = cats.findIndex(cat => cat.name === req.params.name)
  if (foundCat === -1) {
    throw new ExpressError("Cat not found", 404)
  }
  cats.splice(foundCat, 1)
  res.json({ message: "Deleted" })
})

module.exports = router;