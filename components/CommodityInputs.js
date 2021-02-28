import React from "react"
const CommodityInputs = (props) => {
  return (
    props.commodities.map((val, idx)=> {
      let commodityId = `commodity-${idx}`, priceId = `price-${idx}`
      return (
        <div key={idx}>
          <label htmlFor={commodityId}>{`Commodity #${idx + 1}`}</label>
          <input
            type="text"
            name={commodityId}
            data-id={idx}
            id={commodityId}
            value={props.commodities[idx].name} 
            className="name"
          />
          <label htmlFor={priceId}>Price</label>
          <input
            type="text"
            name={priceId}
            data-id={idx}
            id={priceId}
            value={props.commodities[idx].price} 
            className="price"
          />
        </div>
      )
    })
  )
}
export default CommodityInputs


export default CommodityInputs;