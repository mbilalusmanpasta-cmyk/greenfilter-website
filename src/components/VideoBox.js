import { useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ReactPlayer from 'react-player'

const VideoBox = (props) => {


    const {state, video,  event} = props;

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
            <div style={{display:"inline-block", cursor:"pointer", marginRight:"40px",paddingTop:"30px", verticalAlign:"top",float:'right'}} onClick={()=> {event(false, null)} }>
                <AiOutlineCloseCircle  style={{ verticalAlign:"middle", fontSize:"26px"}} /> <span style={{display:"inline-block"}}> Close Me </span>
            </div>
        )
    };

    return (
        state ?
        <div style={{position:"fixed",top:"0px",left:"0px",height:"100vh",width:"100vw",background:"rgba(0,0,0,0.3)"}}>
            <div style={{
                    transform:"translate(-50%,-50%)",
                    top:"50%",left:"50%",
                    // width:"650px",
                    background:"#fff",
                    // width:imageWidth ? `calc(${imageWidth} + 50px)` : "500px",
                    // height:imageHeight ? `calc(${imageHeight} + 50px)` : "500px",
                    position:"absolute",
                    paddingBottom:"30px"
                }}
            >

                
                {
                    video &&
                    <ReactPlayer url={video} />
                }

                <CloseIcon />

            </div>
        </div>
        :
        <>
        
        </>
    );
}
 
export default VideoBox;