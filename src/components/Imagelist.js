import React from 'react'

const Imagelist = (props)=>{
    console.log(props);
    const images=props.images
    return(
        <>
        {images.map((image)=>(<img src={image.previewURL} key={image.id} />))}
        </>
    )
} 

export default Imagelist;