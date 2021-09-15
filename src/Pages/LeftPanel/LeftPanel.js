import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import './LeftPanel.scss';

const LeftPanel = (props) => {
    const dispatch = useDispatch();
    const [productData, setproductData] = useState([]);
    useEffect(() => {
        // const productData = productJson;
        console.log(props.productData)
        if (props.productData) {
            setproductData(props.productData);
        }
        // const getProduct = vv1x ,A
        // axios.get(props.productSvg)
        // .then(response => {
        //     console.log('Product Data', response.data);
        // })
        // .catch( error => {
        //     console.log('error', error);
        // })
        // return () => {
        //     // cleanup
        // }
    }, [props.productData])

    const onItemClickHandler = (item, category_id, type) => {
        console.log('done', item);
        props.onItemSelect({ item, category_id, type });
    }
    return (
        <div className="col-sm-4 left-panel">
            <div className="row">
                <div className="col-sm-12 category-panel">
                    {
                        productData && productData.map(product => {
                            return <div className="category-items" key={product.category_id}>
                                <h6 className="custom-header">{product.category_name}</h6>
                                {product.category_subtype && product.category_subtype.map(subtype => {
                                    return (
                                        <div className="subtypes" key={subtype.name}>
                                            <div className="subtype_type">{subtype.name}</div>
                                            <div className="item-list">

                                                {
                                                    subtype && subtype.item_list.map(items => {
                                                        return (
                                                            <div onClick={() => onItemClickHandler(items, product.category_id, subtype.type)} className="img-panel" key={items.item_id}>
                                                                {
                                                                    subtype.type === 'color' ? <div className="color-item" style={{
                                                                        backgroundColor: items.item_color
                                                                    }}></div> : <img src={items.item_url} alt="" />
                                                                }

                                                            </div>
                                                        )
                                                        // {JSON.stringify(items)}
                                                    })
                                                }

                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default LeftPanel
