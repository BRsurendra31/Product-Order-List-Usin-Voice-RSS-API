import React from 'react';

const OrderList = ({ order }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {order.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderList;
