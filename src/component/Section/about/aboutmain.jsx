import Aboutmainleft from "./aboutmainleft";
import Aboutmainright from "./aboutmainright";


export default function Aboutmain () {
    return (<>
        <div className="flex flex-col md:flex-row">
        <Aboutmainleft/>
        <Aboutmainright/>
        </div>
    </>);
}