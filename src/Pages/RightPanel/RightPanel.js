import React, { useEffect, useRef, useState } from 'react'
import './RightPanel.scss';
import $ from 'jquery';
import { createBackgroundImage, findSvg, createBackgroundColor, initStageSvg, captureSvg } from '../../Utils/editor-lib';
import axios from 'axios';
import Modal from '../../Components/UI/Modal/Modal';

const RightPanel = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const svgContainer = useRef(null);
    const [imgUrl, setimgUrl] = useState(null)
    useEffect(() => {
        if (props.productSvg) {
            axios.get(props.productSvg)
                .then(response => {
                    console.log('Product SVG', response.data);
                    initStageSvg(svgContainer.current, response.data);
                })
                .catch(error => {
                    console.log('error', error);
                })
        }
        // return () => {
            
        // }
    }, [props.productSvg])
    useEffect(() => {
        console.log($('.rightPanel'), props.selectItem);
        if (props.selectItem) {
            const { item, category_id, type } = props.selectItem;
            console.log($(`[data-id=${category_id}]`))
            console.log(svgContainer);
            if (findSvg(svgContainer.current)) {
                if (['pattern', 'image'].includes(type)) {
                    const img = new Image();
                    img.onload = function () {
                        console.log(this.height);
                        const imgData = {
                            height: this.height,
                            width: this.width,
                            url: item.item_url
                        }
                        createBackgroundImage(findSvg(svgContainer.current), category_id, imgData, type);
                    }
                    img.src = item.item_url;
                } else {
                    createBackgroundColor(findSvg(svgContainer.current), category_id, item.item_color)
                }
            }
        }

        return () => {
            // cleanup
        }
    }, [props.selectItem, props.productSvg])

    const captureStage = () => {
        captureSvg(svgContainer.current, (data) => {
            // console.log(data);
            setimgUrl(data);
            setModalShow(true);
        });
    }

    return (
        <div className="col-sm-8 rightPanel">
            <div className="rightPanel__editorPanel">
                <div className="designContainer" ref={svgContainer}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="500" version="1.1" width="500" x="0px" y="0px" viewBox="0 0 500 500">
                        <g>
                            <path data-id="cat001" fill="red" stroke="#0000ff" d="M248.7,381.2C227.2,380.8,197.79999999999998,380.09999999999997,171.29999999999998,380C136.89999999999998,379.9,65.19999999999999,384,48.499999999999986,381.8C31.699999999999985,379.6,24.299999999999986,372.6,24.699999999999985,349.1S26.799999999999986,323.70000000000005,28.899999999999984,301C30.999999999999986,278.4,40.29999999999998,272.6,61.29999999999998,269C67.99999999999999,267.9,133.5,261.9,160.79999999999998,252.8C188.1,243.70000000000002,218.39999999999998,225.3,242.29999999999998,213.20000000000002C244.39999999999998,212.10000000000002,246.6,211.00000000000003,248.79999999999998,209.8L248.7,381.2Z" transform="matrix(1,0,0,1,-21,-208)" />
                            <path data-id="cat002" fill="blue" stroke="#000000" d="M251.3,381.2C272.8,380.8,302.2,380.09999999999997,328.70000000000005,380C363.1,379.9,434.80000000000007,384,451.50000000000006,381.8C468.30000000000007,379.6,475.70000000000005,372.6,475.30000000000007,349.1S473.20000000000005,323.70000000000005,471.1000000000001,301C469.00000000000006,278.4,459.7000000000001,272.6,438.7000000000001,269C432.0000000000001,267.9,366.5000000000001,261.9,339.2000000000001,252.8C311.9000000000001,243.70000000000002,281.6000000000001,225.3,257.7000000000001,213.20000000000002C255.6000000000001,212.10000000000002,253.4000000000001,211.00000000000003,251.2000000000001,209.8L251.3,381.2Z" transform="matrix(1,0,0,1,-21,-208)" />
                        </g>
                    </svg>
                </div>
            </div>
            <button className='btn btn-primary' onClick={() => captureStage()}>Capture</button>
            <Modal show={modalShow} onHide={() => setModalShow(false)}>
                <div className="capture-img-area text-center" >
                    <img src={imgUrl}/>
                </div>
            </Modal>
        </div>
    )
}

export default RightPanel
