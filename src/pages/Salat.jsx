import axios from "axios";
import { useEffect, useState } from "react";
const Salat = () => {
  const [wilaya,setWilaya]=useState('')
  const [blad,setBlad]=useState('')
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [data, setData] = useState("");
  const getdata = async (e) => {
    e.preventDefault();
    await axios
      .get(
        `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}%20Arab%20Emirates&method=8`
      )
      .then((res) => setData(res.data.data.timings));
      setWilaya(city)
      setBlad(country)
    setCity("");
    setCountry("");
  };
  return (
    <div id="salat" className="p-2 flex flex-col gap-[20px] items-center min-h-screen justify-center ">
      <div className="text-4xl">مواقيت الصلاة</div>
      <div className="text-lg text-right">
        قال تعالى:"فَإِذَا قَضَيْتُمُ الصَّلَاةَ فَاذْكُرُوا اللَّهَ قِيَامًا
        وَقُعُودًا وَعَلَىٰ جُنُوبِكُمْ ۚ فَإِذَا اطْمَأْنَنْتُمْ فَأَقِيمُوا
        الصَّلَاةَ ۚ إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا
        مَوْقُوتًا "
      </div>
      <form className="p-2 border bg-gray-100 w-[70%] flex sm:justify-between sm:flex-row sm:flex-row-reverse flex-col gap-[10px] ">
        <input
          onChange={(e) => setCountry(e.target.value)}
          value={country}
          placeholder="البلد"
          className="text-right px-2 py-1 border-b border-b-2 outline-none"
          type="text"
        />
        <input
          onChange={(e) => setCity(e.target.value)}
          value={city}
          placeholder="الولاية"
          className="text-right px-2 py-1 border-b border-b-2  outline-none"
          type="text"
        />
        <input
          onClick={getdata}
          className="ease-linear duration-700 cursor-pointer rounded px-2 py-1 hover:bg-black hover:text-white border border-2 outline-none border-black"
          type={"submit"}
          value="تحديد وقت الصلاة"
        />
      </form>
      {data == "" ? (
        <div className="h-[50%] flex items-center justify-center">لم يتم تحديد البلد و الولاية بعد</div>
      ) : (
        <div className="h-[50%] w-[70%] p-5">
          <div className="text-right">
            مواقيت الصلاة الخاصة بولاية <span>{wilaya}</span> - <span>{blad}</span>
          </div>
          <div className=" p-2 flex sm:flex-row flex-col sm:justify-between mt-3 gap-[10px]">
            <div className="p-2 sm:w-[15%] w-[90%] flex flex-col items-center justify-center rounded border border-2 border-black">
              <div>صلاة الفجر</div>
              <div className="text-xl">{data.Fajr}</div>
            </div>
            <div className="p-2 sm:w-[15%] w-[90%]  flex flex-col items-center justify-center rounded border border-2 border-black">
              <div>صلاة الظهر</div>
              <div className="text-xl">{data.Dhuhr}</div>
            </div>
            <div className="p-2 sm:w-[15%] w-[90%]  flex flex-col items-center justify-center rounded border border-2 border-black">
              <div>صلاة العصر</div>
              <div className="text-xl">{data.Asr}</div>
            </div>
            <div className="p-2 sm:w-[15%] w-[90%]  flex flex-col items-center justify-center rounded border border-2 border-black">
              <div>صلاة المغرب</div>
              <div className="text-xl">{data.Maghrib}</div>
            </div>
            <div className="p-2 sm:w-[15%] w-[90%]  flex flex-col items-center justify-center rounded border border-2 border-black">
              <div>صلاة العشاء</div>
              <div className="text-xl">{data.Isha}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Salat;
