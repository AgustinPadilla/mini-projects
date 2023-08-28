import { Products } from './components/Products'
import { products } from './mocks/products.json'
function App () {
  return (
    <div className='flex flex-col items-center w-full gap-4 min-w-full'>
      <h1>Shopping cart</h1>
      <Products products={products} />
    </div>
  )
}

export default App
