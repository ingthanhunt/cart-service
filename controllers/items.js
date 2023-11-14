const items = {"price":[1,2,3,4,5],"item":["apple","banana","pineapple","mango",""],"count":[1,2,3,4,5]};

//@desc     Get all items
//@route    GET /api/v1/items
exports.getItems= async (req,res,next)=>{
  try {
    res.status(200).json(items);
  } catch (err) {
    res.status(400).json({success:false});        
  }
};

//@desc     Get single item
//@route    GET /api/v1/items/:id
exports.getItem= async (req,res,next)=>{
  try {
    const item = { price: items.price[req.params.id], item: items.item[req.params.id], count: items.count[req.params.id] };
    res.status(200).json(item);
  } catch (err) {
    res.status(400).json({success:false});
  }
};


/*
//@desc     Create new item
//@route    POST /api/v1/items
exports.addItem= async (req,res,next)=>{
  items.push(req.body);
  res.status(201).json({
    success: true,
    data: items
  });
};

//@desc     Update item
//@route    PUT /api/v1/items/:id
exports.updateItem= async (req,res,next)=>{
  try {
    items[req.params.id] = req.body;
    res.status(200).json({success:true, data:items[req.params.id]});
  } catch (err) {
    res.status(400).json({success:false});
  }
}

//@desc     Delete Item
//@route    DELETE /api/v1/items/:id
exports.deleteItem= async (req,res,next)=>{
  try {
    items.filter((item) => item.id !== req.params.id)
    res.status(200).json({success:true, data:{} });
  } catch (err) {
    res.status(400).json({success:false});
  }
};
*/