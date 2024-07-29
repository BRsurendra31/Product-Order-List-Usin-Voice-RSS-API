import React from 'react';

const ProductRow = ({ index, product, onChange }) => {
  const productOptions = ['Pencil', 'Eraser', 'Pens','Notebooks','Diaries', 'Calculators', 'Punching', 'Envelopes']; // Add more products as needed
  const quantityOptions = [0, 1, 2, 3, 4, 5];

  return (
    <div>
      <select
        value={product.name}
        onChange={(e) => onChange(index, 'name', e.target.value)}
      >
        <option value="">Choose Product</option>
        {productOptions.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      <select
        value={product.quantity}
        onChange={(e) => onChange(index, 'quantity', Number(e.target.value))}
      >
        <option value="">Choose Quantity</option>
        {quantityOptions.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default ProductRow;
