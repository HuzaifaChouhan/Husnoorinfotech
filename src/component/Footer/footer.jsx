import Footerfour from "./footerfour";
import Footerone from "./footerone";
import Footerthree from "./footerthree";
import Footertwo from "./footertwo";


export default function Footer () {
    return(
        <>
            <div className="w-full h-100 flex flex-col md:flex-row">
                <Footerone/> 
                <Footertwo/>
                <Footerthree/>
                <Footerfour/>
            </div>
        </>
    );
}