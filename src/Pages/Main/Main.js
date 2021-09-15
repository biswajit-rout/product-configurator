import React, { useState } from 'react'
import LeftPanel from '../LeftPanel/LeftPanel'
import RightPanel from '../RightPanel/RightPanel'
import productJson from '../../assets/json/product-data.json';

const Main = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const allProducts = productJson;
    const currentProduct = allProducts[0];
    return (
        <div className="container-fluid">
            <div className="row">
                <LeftPanel productData={currentProduct.product_data}  onItemSelect={(item) => {setSelectedItem(item) }}/>
                <RightPanel productSvg={currentProduct.stage_url} selectItem={selectedItem}/>
            </div>

        </div>
    )
}

export default Main
