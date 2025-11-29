import Abouthead from "./abouthead";
import Aboutmain from "./aboutmain";

export default function About () {
    return(
        <>
            <div className="w-full h-max">   
                <div className="w-full h-30 border rounded-b-full">
                    <Abouthead
                    animationDuration={0.5}
                    ease='back.inOut(2)'
                    scrollStart='center bottom+=0%'
                    scrollEnd='bottom bottom-=80%'
                    stagger={0.02}
                    >
                    About Us
                    </Abouthead>
                </div>
                <div className="w-full"> 
                    <Aboutmain/>
                </div>
            </div>
        </>
    );
}