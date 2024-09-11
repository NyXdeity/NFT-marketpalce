const router = require('express').Router();
const NFT = require('../models/nft.model');
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Please authenticate' });
  }
};

router.post('/create', auth, async (req, res) => {
  try {
    const { name, description, imageUrl, price } = req.body;
    const newNFT = new NFT({
      name,
      description,
      imageUrl,
      owner: req.userId,
      price,
    });
    await newNFT.save();
    res.status(201).json(newNFT);
  } catch (error) {
    res.status(400).json({ message: 'Error creating NFT' });
  }
});

router.get('/market', async (req, res) => {
  try {
    const nfts = await NFT.find().populate('owner', 'username');
    res.json(nfts);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching NFTs' });
  }
});

router.post('/buy/:id', auth, async (req, res) => {
  try {
    const nft = await NFT.findById(req.params.id);
    const buyer = await User.findById(req.userId);
    const seller = await User.findById(nft.owner);

    if (buyer.balance < nft.price) {
      return res.status(400).json({ message: 'Insufficient balance' });
    }

    buyer.balance -= nft.price;
    seller.balance += nft.price;
    nft.owner = buyer._id;

    await buyer.save();
    await seller.save();
    await nft.save();

    res.json({ message: 'NFT purchased successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error buying NFT' });
  }
});

module.exports = router;