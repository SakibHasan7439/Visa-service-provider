import client1 from "../assets/client1.jpeg"
import client2 from "../assets/client2.webp"
import client3 from "../assets/client3.jpg"
import flag1 from "../assets/flag1.png"
import flag2 from "../assets/flag2.webp"
import flag3 from "../assets/flag3.webp"

const ClientSay = () => {
    return (
        <div className="grid grid-cols-12 mb-8 lg:mb-12 gap-4 lg:gap-10">
            <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#fceecc] rounded-md p-4 md:p-10 flex flex-col justify-center text-black">
                <img className="w-10 mx-auto h-10 object-cover md:w-16 md:h-16 rounded-full mb-4" src={client1} alt="client_image" />
                <p className="mb-4 text-lg text-center">
                 Thanks to your excellent visa services, I was able to secure my work visa for Russia without any hassle. The team guided me through every step and made the entire process stress-free.I highly recommend your service to anyone looking for professional and reliable assistance!
                </p>
                <img className="w-6 h-6 mx-auto rounded-full" src={flag1} alt="flag image" />
                <p className="text-xl text-center">DUSTIN A. MORGAN</p>
                <p className="text-center">( Russia Working Visa )</p>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#fceecc] rounded-md p-4 md:p-10 flex flex-col justify-center text-black">
            <img className="w-10 mx-auto h-10 object-cover md:w-16 md:h-16 rounded-full mb-4" src={client2} alt="client_image" />
                <p className="mb-4 text-lg text-center">
                Your visa service helped me reunite with my family in America. I was overwhelmed by the paperwork, but your teams support and expertise simplified everything. I am forever grateful for your outstanding service!
                </p>

                <img className="w-6 h-6 mx-auto rounded-full" src={flag2} alt="flag image" />
                <p className="text-xl text-center">ROGER N. TOWLE</p>
                <p className="text-center">( America student Visa )</p>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#fceecc] rounded-md p-4 md:p-10 flex flex-col justify-center text-black">
            <img className="w-10 object-cover mx-auto h-10 md:w-16 md:h-16 rounded-full mb-4" src={client3} alt="client_image" />
                <p className="mb-4 text-lg text-center">
                I had an amazing experience with your team! They helped me get my student visa for the South Africa quickly and efficiently. Their attention to detail and quick responses made me feel confident throughout the process. Thank you for making my dream come!
                </p>

                <img className="w-6 h-6 mx-auto rounded-full" src={flag3} alt="flag image" />
                <p className="text-xl text-center">Ahmed jaber</p>
                <p className="text-center">( South Africa student Visa )</p>
            </div>
        </div>
    );
};

export default ClientSay;