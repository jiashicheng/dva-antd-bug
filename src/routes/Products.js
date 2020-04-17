/*import React from 'react';
import ProductsCom from '../components/Products';
const Products = (props) => {
  return <h2><ProductsCom/>List of Products add By jsc</h2>
};
export default Products;*/

import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/Products';

const Products = ({ dispatch, productsLL }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={productsLL} />
    </div>
  );
};

// export default Products;
export default connect(({ productsLL }) => ({
  productsLL,
}))(Products);