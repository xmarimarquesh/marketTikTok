"use client";

import React, { useState, useEffect } from 'react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';

// Importe suas imagens aqui
import product1 from '../assets/product1.webp';
import product2 from '../assets/product2.webp';
import product3 from '../assets/product3.webp';

interface Produto {
  name: string;
  price: number;
  image: string | StaticImageData;
  freeshiping: string;
}

const produtos: Produto[] = [
  {
    name: "Produto 1",
    price: 29.99,
    image: product1,
    freeshiping: "Free Shipping"
  },
  {
    name: "Produto 2",
    price: 19.99,
    image: product2,
    freeshiping: "Free Shipping"
  },
  {
    name: "Produto 3",
    price: 39.99,
    image: product3,
    freeshiping: "Free Shipping"
  }
];

const Carrossel: React.FC = () => {
  const [indexAtual, setIndexAtual] = useState(0);

  const proximoProduto = () => {
    setIndexAtual((prevIndex) => (prevIndex + 1) % produtos.length);
  };

  const produtoAtual = produtos[indexAtual];

  return (
    <div>
      {produtoAtual && (
        <div>
          <Image 
            src={produtoAtual.image} 
            alt={produtoAtual.name} 
            width={100} 
            height={100} 
          />
          <h2>{produtoAtual.name}</h2>
          <p>{produtoAtual.price}</p>
          <p>{produtoAtual.freeshiping}</p>
          <button onClick={proximoProduto}>Next</button>
        </div>
      )}
    </div>
  );
};

export default Carrossel;
