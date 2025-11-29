import Services from "./services/servies";
import About from "./about/about";

export default function Section () {
    return(
        <>
            <div className="w-full h-160 flex flex-col bg-cyan-900">
                <Services/>
            </div>
            <div className="w-full flex flex-col">
                <About/>
            </div>
        </>
    );
}