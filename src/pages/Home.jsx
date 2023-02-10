import cover from "../assets/cover.jpg";
import {
  BsFacebook,
  BsInstagram,
  BsFillTelephoneFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <div
      style={{ backgroundImage: `url(${cover})` }}
      className="w-[100%] h-screen bg-center bg-cover bg-no-repeat text-white"
    >
      <div className="w-[100%] h-[100%] bg-[rgba(0,0,0,0.5)] ">
        <Navbar />
        <div className="h-[93%]  flex flex-col items-center justify-center">
          <div className="text-2xl w-[60%] text-right ">
            موقع بَلِّغْنِي عبارة عن موقع ديني إسلامي يقدم مجموعة من الخدمات
            كمواقيت الصلاة , أذكار , أحاديث و آيات من القرآن الكريم . 
            ويهدف الى زرع القيم الحسنة والعقيدة السليمة في المجتمع المسلم{" "}
            <p className="mt-[10px] font-mono font-bold">
              {" "}
              قال تعالى:"ٱلَّذِينَ ءَامَنُواْ وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ
              ٱللَّهِ ۗ أَلَا بِذِكْرِ ٱللَّهِ تَطْمَئِنُّ ٱلْقُلُوبُ" (الرعد -
              28)
            </p>
            <div className="text-sm mt-[50px]">
              <a
                className="px-2 py-1 border border-white border-1 rounded-md "
                href="#contact"
              >
                تواصل معنا
              </a>
              <a
                className="px-2 py-1 border border-white border-1 rounded-md m-3"
                href="#salat"
              >
                مواقيت الصلاة
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
