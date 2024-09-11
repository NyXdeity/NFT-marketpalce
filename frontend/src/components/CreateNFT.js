import React, { useState } from 'react';
import axios from 'axios';

function CreateNFT() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    imageUrl: '',
    price: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:5000/api/nfts/create',
        { ...formData, price: Number(formData.price) },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('NFT created successfully');
    } catch (error) {
      alert('Error creating NFT');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
      <input type="text" name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} />
      <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
      <button type="submit">Create NFT</button>
    </form>
  );
}

export default CreateNFT;
