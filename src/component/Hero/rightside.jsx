import Carousel from '../Hero/caroual';

export default function Rightside() {
    return (
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-10">
            <div className="max-w-[300px] sm:max-w-[350px] md:max-w-[350px] lg:max-w-[420px]">
              <Carousel 
                baseWidth={300}
                autoplay={true}
                autoplayDelay={2500}
                pauseOnHover={true}
                loop={true}
              />
            </div>
        </div>
    );
}