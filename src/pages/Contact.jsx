import Footer from "../components/Footer";
import { RiSendPlaneFill } from "react-icons/ri";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    if (name != "" && email != "" && message != "") {
      emailjs
        .sendForm(
          "service_kpsa2vz",
          "template_0rmkdjh",
          form.current,
          "QNEUhdOGVk4tFa6WV"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  return (
    <div className="h-screen flex flex-col justify-between">
      <div
        id="contact"
        className=" flex flex-col gap-[20px] items-center h-[70%] justify-center p-2"
      >
        <div className="  text-4xl h-[10%]">تواصل معنا</div>
        <div className=" h-[10%] text-lg text-right">
          مرحبا باقتراحاتكم لتطوير المنصة او الابلاغ عن الاخطاء و كتبها الله في
          ميزان حسناتكم
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-[100%] h-[80%] sm:w-[70%] border p-2 border-gray-200 rounded flex flex-col justify-between items-end"
        >
          <div className="w-[100%] h-[30%] sm:h-[15%] flex justify-between flex-col-reverse sm:flex-row-reverse ">
            <input
              onChange={(e) => setName(e.target.value)}
              placeholder="الاسم الكامل"
              className="h-[45%] sm:h-[100%] w-[100%] sm:w-[40%] text-right p-1 border outline-none"
              type="text"
              name="user_name"
              id=""
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="البريد الالكتروني"
              className="h-[45%] sm:h-[100%] text-right  w-[100%] sm:w-[40%] p-1 border outline-none"
              type="email"
              name="user_email"
              id=""
            />
          </div>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            placeholder="مضمون الرسالة "
            className="text-right h-[50%] sm:h-[60%] w-[100%] p-1 border outline-none"
            name="message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 cursor-pointer text-white rounded h-[12%] sm:h-[15%] w-[100%] sm:w-[20%] py-1 bg-green-700"
          >
            <span>
              <RiSendPlaneFill />
            </span>
            <span>ارسال</span>
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
