import $ from "jquery";


const svg_ns = "http://www.w3.org/2000/svg";
const xlink_ns = "http://www.w3.org/1999/xlink";
const svgns = "http://www.w3.org/2000/svg",
    xmlns = "http://www.w3.org/XML/1998/namespace",
    xmlnsns = "http://www.w3.org/2000/xmlns/", // see http://www.w3.org/TR/REC-xml-names/#xmlReserved
    se_ns = "http://svg-edit.googlecode.com",
    htmlns = "http://www.w3.org/1999/xhtml",
    mathns = "http://www.w3.org/1998/Math/MathML";
// var getType = "bgptrn_"+ stageElem.getAttribute('id').replace('layer_',"");
// var bgPatternGrp = $(stageElem).find("g[type="+getType+"]");
const createDefElement = () => {
    return document.createElementNS(svg_ns, 'defs');
}
const createSvgElement = ({ elem, id, x, y, width, height, preserveAspectRatio, patternUnits, href }) => {
    var newElem = document.createElementNS(svg_ns, elem);
    newElem.setAttribute("id", id);
    if (x) newElem.setAttribute("x", x);
    if (y) newElem.setAttribute("y", y);
    if (width) newElem.setAttribute("width", width);
    if (height) newElem.setAttribute("height", height);
    newElem.setAttribute("xmlns:xlink", xlink_ns);
    if (preserveAspectRatio) {
        newElem.setAttribute("preserveAspectRatio", preserveAspectRatio);
    }
    if (patternUnits) {
        newElem.setAttribute("patternUnits", patternUnits);
    }
    if (href) {
        newElem.setAttributeNS(xlink_ns, "xlink:href", href);
    }
    return newElem;
}
export const createBackgroundColor = (svg, category_id, color) => {
    // Check if pattern exist
    const patternId = 'pattern_' + category_id;
    if ($(`#${patternId}`)) $(`#${patternId}`).remove();
    $(`[data-id=${category_id}]`).attr('fill', color);
}

export const createBackgroundImage = (svg, category_id, imageData, type) => {
    if (!findDefs(svg)) {
        const defs = createDefElement();
        svg.appendChild(defs);
    }

    const patternId = 'pattern_' + category_id;
    const patternObj = {
        elem: 'pattern',
        // patternUnits: 'none', //'userSpaceOnUse',
        width: type != 'pattern' ? '100%' : 100,
        height: type != 'pattern' ? '100%' : 100,
        id: patternId
    }
    const pattern = createSvgElement(type != 'pattern' ? patternObj : { ...patternObj, ...{ patternUnits: 'userSpaceOnUse' } });

    const { width, height } = $(`[data-id=${category_id}]`)[0].getBBox();

    const imageObj = {
        elem: 'image',
        href: imageData.url,
        x: 0,
        y: 0,
        width: type != 'pattern' ? width : 100,
        height: type != 'pattern' ? height : 100,
        preserveAspectRatio: 'none'
    }
    const image = createSvgElement(imageObj);

    pattern.appendChild(image);
    if ($(`#${patternId}`)) $(`#${patternId}`).remove();
    findDefs(svg).appendChild(pattern);
    $(`[data-id=${category_id}]`).attr('fill', `url(#${patternId})`)
}
export const findDefs = (svg) => {
    return $(svg).find("defs")[0];
}
export const findSvg = (elem) => {
    return $(elem).find("svg")[0];
}
export const initStageSvg = (svgContainer, svgString) => {
    if (svgString) {
        const dummySvg = createSvgElement({ elem: 'svg' });
        dummySvg.innerHTML = svgString;
        const svgElem = createSvgElement({
            elem: 'svg',
            width: '500px',
            height: '500px'
        });
        $(svgElem).attr({
            xmlns: svgns,
            "xmlns:se": se_ns,
            "xmlns:xlink": xlink_ns
        }).append(createSvgElement({ elem: 'g' }));


        const paths = $(dummySvg).find('path');
        paths.map((indx, path) => {
            $(path).removeAttr('class');
            $(svgElem).find('g').append(path.cloneNode(true));
        });
        $(svgContainer).html(svgElem);
        // console.log($(svgElem).find('path'));

    }

}
export const captureSvg = async (svg, callback) => {
    if (svg) {
        const cloneSvg = findSvg(svg).cloneNode(true);
        const images = cloneSvg.getElementsByTagName('image');
        for (let i = 0; i < images.length; i++) {
            const imgBase64 = await convertImageToBase64(images[i].getAttribute("xlink:href"));
            // await imgBase64;
            images[i].setAttribute("xlink:href", imgBase64.result);
        }
        console.log(cloneSvg);
        // Capture to png
        svgToPng(cloneSvg, callback);
    }
}
const convertImageToBase64 = async function (url, callback) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function () {
            var reader = new FileReader();
            reader.onloadend = function () {
                // callback(this);
                resolve(this);
            }
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.send();
    });
}
const svgToPng = (svg, callback) => {
    if(svg) {
        const svgObjUrl = URL.createObjectURL(new Blob([svg.outerHTML], { type: 'image/svg+xml' }));
        const svgImg = new Image();
        svgImg.onload = function(){
            const canvas = document.createElement('canvas');
            canvas.height = 500;
            canvas.width = 500;
            const canContext = canvas.getContext('2d');
            canContext.drawImage(svgImg,0,0);
            if(callback) {
                callback(canvas.toDataURL('image/png'));
            }
        };
        svgImg.src = svgObjUrl;

    }
}
//  Editor =  {
//     createElement: createElement,
//     createDefElement: createDefElement,
//     createBackgroundImage: createBackgroundImage,
//     findSvg: findSvg
// }
// export default Editor;