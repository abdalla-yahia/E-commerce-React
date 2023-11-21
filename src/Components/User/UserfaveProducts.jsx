import {CartItem} from '..'

function UserfaveProducts() {
  return (
    <div className='d-flex flex-column mb-3 p-3' style={{backgroundColor:'#fff'}}>
  <CartItem dell={true} favCount={true}/>
  <CartItem dell={true} favCount={true}/>
  <CartItem dell={true} favCount={true}/>
  </div>
  )
}

export default UserfaveProducts