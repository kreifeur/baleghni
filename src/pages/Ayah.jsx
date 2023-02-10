import { useEffect, useState } from "react";
import axios from "axios";

const Ayah = () => {
    const [aya,setAya]=useState('')
    const [ayaEng,setAyaEng]=useState('')
  const recievedata = async () => {
    let surahNumber = Math.floor(Math.random() * 114);
    const data = await axios.get(
      `https://api.alquran.cloud/v1/surah/${surahNumber}`
    );
    const englishdata = await axios.get(
        `https://api.alquran.cloud/v1/surah/${surahNumber}/en.sahih`
      );
    let ayahNumber = Math.floor(Math.random() * data.data.data.numberOfAyahs);
    setAya(data.data.data.ayahs[ayahNumber].text)
    setAyaEng(englishdata.data.data.ayahs[ayahNumber].text)
  };
  useEffect(() => {
    recievedata();
  }, []);
  return (
    <div
      id="ayah"
      className="p-2 flex flex-col  items-center h-screen justify-around bg-gray-200 "
    >
      <div className="text-4xl h-[3%] text-green-700">آية من القرآن</div>
      <div className="mt-3 text-right text-xl">عَنْ عَبْدِ اللَّهِ بْنِ عَمْرٍو رَضِيَ اللَّهُ عَنْهُمَا أَنَّ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: بَلِّغُوا عَنِّي وَلَوْ آيَةً</div>
      <div className="font-sans text-right flex items-center justify-center rounded-lg w-[100%] sm:w-[70%] border border-1 border-black p-2 text-lg  min-h-[30%]">
        {aya}
      </div>
      <div className="text-left flex items-center justify-center rounded-lg w-[100%] sm:w-[70%] border border-1 border-black p-2 text-lg   min-h-[30%]">
        {ayaEng}
      </div>
      <div className="w-[70%] h-[10%] flex justify-center">
        <button onClick={recievedata} className="bg-green-700 py-1 h-[75%] rounded text-white w-[50%] sm:w-[30%]">
          آية اخرى
        </button>
      </div>
    </div>
  );
};

export default Ayah;
