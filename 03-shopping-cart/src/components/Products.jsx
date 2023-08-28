import React from 'react'
import { AddToCartIcon } from './Icons.jsx'

export const Products = ({ products }) => {
  return (
    <main className='min-w-full'>
      <ul className='grid-template-auto'>
        {
            products.map(product => (
              <li key={product.id} className='flex flex-col items-center gap-5 border border-black rounded-md bg-zinc-900 p-2 shadow-lg'>
                <img src={product.thumbnail} alt={product.title} width={200} height='auto' />
                <div>
                  <strong>{product.title}</strong>
                </div>
                <div>
                  <button>
                    <AddToCartIcon />
                  </button>
                </div>
              </li>
            ))
          }
      </ul>
    </main>
  )
}
