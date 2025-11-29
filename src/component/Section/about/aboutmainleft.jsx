import adminmainleftphoto from '../../../assets/brave-wall-1.png'

export default function Aboutmainleft () {
    return(
        <div className="w-full md:w-[40%] p-4 md:p-10">
            <img
            className="w-full h-auto md:h-full object-cover"
            src={adminmainleftphoto}
            alt="Admin page photo"
            />
        </div>
    );
}