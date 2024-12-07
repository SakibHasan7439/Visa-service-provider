import studentVisa from "../assets/student.png";
import workingVisa from "../assets/certificate (1).png";
import touristVisa from "../assets/globe.png";
import familyVisa from "../assets/certificate.png";
import { Fade } from "react-awesome-reveal";

const CompanyBackground = () => {
  return (
    <div className="mb-8 lg:mb-12 bg-[#f5f5f5] py-6 md:py-12 lg:py-20">
      <div className="md:w-5/6 lg:w-2/3 mx-auto mb-8">
        <Fade cascade>
            <h1 className="text-2xl font-semibold md:text-4xl text-center mb-3">
                Why Visa Portal
            </h1>
            <p className="lg:text-xl text-center">
                Since our founding, our primary goal has been to provide visas in all
                over country and universities. Our impact is speak louder than our
                word.
            </p>
        </Fade>
      </div>

      <div className="grid grid-cols-12 md:gap-10">
        <div className="col-span-12 md:col-span-6 px-4 lg:col-span-3 text-center">
          <img className="w-16 mx-auto mb-4" src={workingVisa} alt="" />
          <p className="text-3xl lg:text-4xl font-bold">1200+</p>
          <p className="mb-4">Working Visa</p>
          <p>
            Empowering professionals worldwide! We’ve successfully helped over
            1200 individuals secure working visas, unlocking global
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 md:px-4 lg:col-span-3 text-center">
          <img className="w-16 mx-auto mb-4" src={studentVisa} alt="" />
          <p className="text-3xl lg:text-4xl font-bold">800+</p>
          <p className="mb-4">Student Visa</p>
          <p>
            Helping over 600 students pursue their educational aspirations, we
            specialize in student visas that open doors to world-class
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 md:px-4 lg:col-span-3 text-center">
          <img className="w-16 mx-auto mb-4" src={touristVisa} alt="" />
          <p className="text-3xl lg:text-4xl font-bold">900+</p>
          <p className="mb-4">Tourist Visa</p>
          <p>
            With a proven track record, we make travel dreams come true. Whether
            for leisure or exploration, we provide seamless tourist
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 md:px-4 lg:col-span-3 text-center">
          <img className="w-16 mx-auto mb-4" src={familyVisa} alt="" />
          <p className="text-3xl lg:text-4xl font-bold">500+</p>
          <p className="mb-4">Family Visa</p>
          <p>
            Reuniting families is our priority! We’ve facilitated countless
            family visas, ensuring loved ones can stay close while
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyBackground;
