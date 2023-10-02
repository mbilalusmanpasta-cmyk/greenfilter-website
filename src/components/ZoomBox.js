import { useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ZoomBox = (props) => {


    const {dataArr, data, imageVar,  imageIndex, setImageIndex, state, imageWidth, imageHeight, image, event, zoom} = props;

    useEffect(()=>{
        if(state)
        {
            document.querySelector("body").style.overflow = "hidden";
        }
        else
        {
            document.querySelector("body").style.overflow = "unset";
        }
    },[state])

    const  CloseIcon  = () => {
        return (
            <div style={{display:"inline-block", marginLeft:"40px",marginTop:"-40px", verticalAlign:"top"}}>
                <AiOutlineCloseCircle onClick={()=> {event(false, null)} } style={{fontSize:"26px"}} />
            </div>
        )
    };

    return (
        state ?
        <div style={{position:"fixed",top:"0px",left:"0px",height:"100vh",width:"100vw",background:"rgba(0,0,0,0.3)"}}>
            <div style={{
                    transform:"translate(-50%,-50%)",
                    top:"50%",left:"50%",
                    // width:imageWidth ? `calc(${imageWidth} + 50px)` : "500px",
                    // height:imageHeight ? `calc(${imageHeight} + 50px)` : "500px",
                    position:"absolute",
                }}
            >

                
                {   
                    (dataArr && dataArr.length > 0 && parseInt(imageIndex) > -1) ?
                    <img src={dataArr[imageIndex]} alt="ZoomBox" style={{zoom: zoom || "2", display:"inline-block"}}/>
                    :
                    (data) ? 
                    <img src={imageVar ? data[imageIndex]?.[imageVar] : data[imageIndex]?.image } alt="ZoomBox" style={{zoom:zoom || "2", display:"inline-block"}}/> 
                    :
                    (image) ?
                    <img src={image} alt="ZoomBox" style={{zoom:zoom || "2"}} />
                    :
                    <>
                    </>

                }

                <CloseIcon />

            </div>
        </div>
        :
        <>
        
        </>
    );
}
 
export default ZoomBox;