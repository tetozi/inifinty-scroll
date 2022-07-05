import "./Product.css"


const Product = ({ product }) => {
      let price
      if (product.price == null) {
        price = 0.000
      }else{
        price = product.price.toFixed(4)
      }
      
    return (
        
              
                <div className='card'>

                    <img className="cardImage" src={product.image} alt="nft Image" />
                    <div className='cardHeader'>
                        <p >{product.collectionName}</p>
                        <p className="buyNow">buy now</p>
                    </div>
                    <div className='cardFooter'>
                        <p>{product.name}</p>
                        <span className="spacer"></span>
                        <p className='price'>{price}ETH </p>
                    </div>
                    <div className='cardBottom'>
                        <p>Utility type</p>
                        <p className="utility">{product.utilityType}</p>
                    </div>

                </div>
            
        

    )
}


export default Product