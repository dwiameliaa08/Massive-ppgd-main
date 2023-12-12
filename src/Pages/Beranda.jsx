import ProfilePicture from "../assets/Img/hai.png";
import Layout from "./Layout";
import { FaFirstAid } from "react-icons/fa";
import { RiHealthBookFill } from "react-icons/ri";

export default function Home() {
  return (
    <Layout>
      <div>
        <div className="flex min-h-screen items-center -mt-28">
          <div className="flex-col">
            <div className="font-bold text-8xl font-['Poppins'] px-40 mx-1 text-justify ">
              <h1>PPGD</h1>
            </div>
            <div className="leading-7 mx-2 px-40 text-2xl font-['Poppins'] text-justify justify-center">
              <p>
                Portal Pertolongan Gawat Darurat yang Diciptakan untuk Merespons
                Setiap Kondisi Kritis. Dengan Teknologi Canggih dan Layanan
                24/7, Kami Siap Membantu Anda di Setiap Detiknya. Panggilan
                Darurat yang Cepat dan Efisien, Karena Kami Percaya Setiap Detik
                Memiliki Arti Penting.
              </p>
            </div>
          </div>
          <div className="w-3/4 h-3/4 float-right">
            <img src={ProfilePicture} alt="" />
          </div>
        </div>
        <div className="font-extrabold mt-14 py-12 border bg-red-700 text-white text-4xl font-['Poppins'] text-center justify-center">
          <p>
            HUBUNGI NOMOR BERIKUT UNTUK <br></br> MENGAKSES NOMOR DARURAT SESUAI{" "}
            <br></br>DENGAN SITUASI ANDA
          </p>
        </div>
        <div className="flex justify-around">
          <div className="">
            <p className="text-[#BB2525] text-center text-[100px] font-extrabold font-['Inter']">
              911
            </p>
            <p className="text-[24px] font-normal font-['Poppins']">
              Nomor Tanggap <br />
              Gawat Darurat
            </p>
          </div>

          <div className="">
            <p className="text-[#BB2525] text-center text-[100px] font-extrabold font-['Inter']">
              110
            </p>
            <p className="text-[24px] font-normal font-['Poppins']">
              Nomor Kepolisian
            </p>
          </div>
          <div className="">
            <p className="text-[#BB2525] text-center text-[100px] font-extrabold font-['Inter']">
              113
            </p>
            <p className="text-[24px] font-normal font-['Poppins']">
              Nomor Kepolisian
            </p>
          </div>
        </div>
        <div className="flex justify-around ml-16">
          <div className="">
            <p className="text-[#BB2525] text-center text-[100px] font-extrabold font-['Inter']">
              115
            </p>
            <p className="text-[24px] font-normal font-['Poppins']">
              Nomor BASARNAS
            </p>
          </div>
          <div className="ml-12">
            <p className="text-[#BB2525] text-center text-[100px] font-extrabold font-['Inter'] ">
              118
            </p>
            <p className="text-[24px] font-normal font-['Poppins']">
              Nomor Ambulans
            </p>
          </div>
          <div className="">
            <p className="text-[#BB2525] text-center text-[100px] font-extrabold font-['Inter']">
              14080
            </p>
            <p className="text-[24px] font-normal font-['Poppins']">
              Nomor Jasa Marga
            </p>
          </div>
        </div>

        <div className="text-center mt-[100px] font-['Poppins'] font-bold text-[50px]">
          <h1>Jenis Pertolongan</h1>
        </div>

        <div className="w-full flex justify-evenly py-10 mb-32 ">
          <div className="w-96 h-64 bg-red-700 rounded-3xl flex flex-col justify-center items-center">
            <FaFirstAid className="w-56 h-40 text-white"></FaFirstAid>
            <p className="text-white text-2xl">Emergency</p>
          </div>
          <div className="w-96 h-64 bg-yellow-400 rounded-3xl flex flex-col justify-center items-center">
            <RiHealthBookFill className="w-56 h-40 text-white"></RiHealthBookFill>
            <p className="text-white text-2xl">Non-Emergency</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
