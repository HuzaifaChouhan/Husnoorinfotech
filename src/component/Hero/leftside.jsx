export default function Leftside () {
    return (
        <>
            {/* LEFT SIDE — TEXT + BUTTON */}
      <div className="flex flex-col gap-6 w-full md:w-1/2 text-center md:text-left mt-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
          Accelerate Your Business Growth
        </h2>

        <p className="text-base md:text-lg text-gray-300 max-w-lg mx-auto md:mx-0">
          Strategic business development solutions tailored to help your company expand, scale, and dominate your market.
        </p>

        <div className="flex justify-center md:justify-start">
          <button className="mt-4 bg-purple-600 hover:bg-purple-700 transition-all px-8 py-4 rounded-xl font-semibold">
            Learn more
          </button>
        </div>
      </div>
        </>
    );
}