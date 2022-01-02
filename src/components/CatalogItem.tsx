import React, { useCallback } from 'react';
import { addProductToCart } from '../store/modules/cart/actions';
import { Product } from '../store/modules/cart/types';
import { useDispatch } from 'react-redux';

interface Props {
  product: Product
}

const CatalogItem: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch()
  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product))
  }, [dispatch, product]);
  
       return (
        <article>
          <strong>{product.title}</strong>{' - '}
          <span>{product.price}</span> {'  '}

          <button 
            type="button"
            onClick={handleAddProductToCart}
          >Comprar</button>
        </article>
       )
}

export default CatalogItem;