import Servieshead from "./servieshead";
import ScrollStack, { ScrollStackItem } from './servicesmain';
import servicescardphoto1 from '../../../assets/brave-wall-1.png';
import servicescardphoto2 from '../../../assets/brave-wall-2.png';
import servicescardphoto3 from '../../../assets/brave-wall-3.png';
import servicescardphoto4 from '../../../assets/brave-wall-4.png';
import servicescardphoto5 from '../../../assets/brave-wall-5.png';
import servicescardphoto6 from '../../../assets/brave-wall-5.png';


export default function Services () {
    return(
        <>
            <Servieshead
            animationDuration={0.5}
            ease='back.inOut(2)'
            scrollStart='center bottom+=0%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.02}
            >
            Our Services
            </Servieshead>
            <ScrollStack>
              <ScrollStackItem className="relative w-[95%] max-w-sm mx-auto rounded-xl overflow-hidden">
              <img
                className="w-full object-cover absolute inset-0 h-100 p-5 -z-1 rounded-4xl"
                src={servicescardphoto1}
                alt="section card photo 1"
                />
                <h2 className="font-bold text-2xl mb-1">Market Strategy</h2>
                <p className="text-sm leading-snug">
                  Comprehensive market analysis and strategy development to identify new
                  opportunities and optimize positioning.
                </p>
              </ScrollStackItem>
              <ScrollStackItem className="relative w-[95%] max-w-sm mx-auto rounded-xl overflow-hidden">
              <img
                className="w-full object-cover absolute inset-0 h-100 p-5 -z-1 rounded-4xl"
                src={servicescardphoto2}
                alt="section card photo 1"
                />
                <h2 className="font-bold text-2xl mb-1">Partnership Development</h2>
                <p className="text-sm leading-snug">
                  Strategic alliance and partnership building to expand 
                  your network and create new business opportunities.
                </p>
              </ScrollStackItem>
              <ScrollStackItem className="relative w-[95%] max-w-sm mx-auto rounded-xl overflow-hidden">
              <img
                className="w-full object-cover absolute inset-0 h-100 p-5 -z-1 rounded-4xl"
                src={servicescardphoto3}
                alt="section card photo 1"
              />
                <h2 className="font-bold text-2xl mb-1">Expansion Planning</h2>
                <p className="text-sm leading-snug">
                  Customized expansion strategies for entering new markets or
                  scaling existing operations sustainably.
                </p>
              </ScrollStackItem>
              <ScrollStackItem className="relative w-[95%] max-w-sm mx-auto rounded-xl overflow-hidden">
              <img
                className="w-full object-cover absolute inset-0 h-100 p-5 -z-1 rounded-4xl"
                src={servicescardphoto4}
                alt="section card photo 1"
              />
                <h2 className="font-bold text-2xl mb-1">Innovation Consulting</h2>
                <p className="text-sm leading-snug">
                  Transformative innovation strategies to future-proof your business and 
                  create competitive advantages.
                </p>
              </ScrollStackItem>
              <ScrollStackItem className="relative w-[95%] max-w-sm mx-auto rounded-xl overflow-hidden">
              <img
                className="w-full object-cover absolute inset-0 h-100 p-5 -z-1 rounded-4xl"
                src={servicescardphoto5}
                alt="section card photo 1"
              />
                <h2 className="font-bold text-2xl mb-1">Performance Analytics</h2>
                <p className="text-sm leading-snug">
                  Data-driven insights and performance metrics to optimize your 
                  business processes and maximize ROI.
                </p>
              </ScrollStackItem>
            </ScrollStack>
            </>
    );
}
