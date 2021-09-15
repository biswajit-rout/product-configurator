import axios from "axios";

export const setProductData = productData => ({
    type: SET_CHANNELS,
    payload: productData
});

export const fetchProductDetails = () => {
    return dispatch => {
        axios.get('../../assets/json/product-data.json')
        .then(response => {
            console.log('Product Data');
        })
        .catch( error => {
            console.log('error', error);
        })
    }
}