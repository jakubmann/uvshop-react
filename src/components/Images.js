import React, { useEffect, useState } from 'react'

const Images = props => {
    const images = props.images
    const [preview, selectPreview] = useState(images[0])
    const [previewIndex, setPreviewIndex] = useState(0)

    const previewTranslate = (index) => {
        if (index === 0) {
            return 0
        }
        else if (index === images.length-1) {
            return -((index-2) * 33.3333)
        }
        else {
            return -((index-1) * 33.3333)
        }
    }

    return(
        <div className="images">
            <div
                className="images__large"
                style={{backgroundImage: `url('${preview.src}')`}}
            >
            </div>
            <div className="images__small" 
                style={{
                    transform: `translate(${previewTranslate(previewIndex)}%)`,
                }}
            >
                {images.map((img, imgNum) => {
                    return (
                        <div 
                            className="smallimage"
                            onClick={() => {
                                selectPreview(img)
                                setPreviewIndex(imgNum)
                            }}
                            style={{backgroundImage: `url('${img.src}')`}}
                        >
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Images