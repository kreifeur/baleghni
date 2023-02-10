import axios from "axios";
import { useEffect, useState } from "react";
const Adhkar = () => {
  const [adhkar, setAdhkar] = useState("");
  const [type, setType] = useState("PostPrayer_azkar");
  useEffect(() => {
    axios
      .get(`https://ahegazy.github.io/muslimKit/json/${type}.json`)
      .then((res) => setAdhkar(res.data));
  }, [type]);
  return (
    <div
      id="adhkar"
      className="p-2 flex flex-col gap-[20px] items-center h-screen justify-center"
    >
      <div className="text-4xl">اذكار الصباح و المساء</div>
      <div className="text-lg text-right">
        قال تعالى:"ٱلَّذِينَ ءَامَنُواْ وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ
        ٱللَّهِ ۗ أَلَا بِذِكْرِ ٱللَّهِ تَطْمَئِنُّ ٱلْقُلُوبُ"
      </div>
      <ul className="w-[100%] sm:w-[70%] flex justify-between  ">
        <li
          onClick={() => setType("azkar_sabah")}
          className="cursor-pointer w-[30%] text-center py-2 bg-green-700 text-white font-bold rounded"
        >
          “أذكار الصباح”
        </li>
        <li
          onClick={() => setType("azkar_massa")}
          className="cursor-pointer w-[30%] text-center py-2 bg-green-700 text-white font-bold rounded"
        >
          “أذكار المساء”
        </li>
        <li
          onClick={() => setType("PostPrayer_azkar")}
          className="cursor-pointer w-[30%] text-center py-2 bg-green-700 text-white font-bold rounded"
        >
          “أذكار بعد الصلاة”
        </li>
      </ul>
      <div className="w-[100%] h-[70%] sm:w-[70%] shadow-lg rounded overflow-hidden p-2 text-center flex flex-col items-center">
        <h1 className="h-[6%] text-2xl mb-3 text-green-700">{adhkar.title}</h1>
        {adhkar.content ? (
          <div className="h-[89%] overflow-hidden">
            {adhkar.content.map((e,index) => {
              return (
                <ul key={index} className="mt-2 border text-right border-1 border-black p-1 w-[100%]">
                  <li>{e.zekr}</li>
                  <li className="text-green-700"><span className="mx-2 text-black">{e.repeat}</span>عدد التكرارات</li>
                </ul>
              );
            })}
          </div>
        ) : (
          <div className="bg-red-700">no data</div>
        )}
        <h1 className="h-[5%] w-[100%] cursor-pointer text-left px-2 text-green-700 underline">عرض المزيد</h1>
      </div>
    </div>
  );
};

export default Adhkar;
