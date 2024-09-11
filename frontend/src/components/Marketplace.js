import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Marketplace() {
  const [nfts, setNFTs] = useState([]);

  useEffect(() => {
    fetchNFTs();
  }, []);

  const fetchNFTs = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/nfts/market');
      setNFTs(res.data);
    } catch (error) {
      console.error('Error fetching NFTs', error);
    }
  };

  const handleBuy = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(`http://localhost:5000/api/nfts/buy/${id}`, {}, { headers: { Authorization: `Bearer ${token}` } });
      alert('NFT purchased successfully');
      fetchNFTs();
    } catch (error) {
      alert('Error buying NFT');
    }
  };

  return (
    <div>
      <h2>NFT Marketplace</h2>
      {nfts.map((nft) => (
        <div key={nft._id}>
          <h3>{nft.name}</h3>
          <p>{nft.description}</p>
          <img src={nft.imageUrl} alt={nft.name} style={{ maxWidth: '200px' }} />
          <p>Price: {nft.price}</p>
          <p>Owner: {nft.owner.username}</p>
          <button onClick={() => handleBuy(nft._id)}>Buy</button>
        </div>
      ))}
    </div>
  );
}

export default Marketplace;
