import React from "react";
import { FaHospital } from "react-icons/fa6";

const Maps = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full flex flex-col items-center justify-center my-10">
        <FaHospital className="inline-block w-64 h-64 text-zinc-900" />
        <p className="font-bold text-4xl">Cari Rumah Sakit Terdekat</p>
      </div>
      <div className="w-full flex flex-col px-32">
        <p className="font-bold text-2xl">Pilih nama kota</p>
        <select className="w-fit mt-8 border-2 p-2">
          <option value="">Pilih Kota</option>
          <option value="Batam">Batam</option>
          <option value="Kudus">Kudus</option>
          <option value="Malang">Malang</option>
        </select>
      </div>
      <div className="w-full flex flex-col gap-10 mt-10 justify-center items-center px-32 mb-16">
        <p className=" font-bold text-4xl">
          Daftar Rumah Sakit dan Nomor Telepon
        </p>
        <div className="w-3/4 mx-auto grid grid-cols-2 gap-3">
          <div className=" h-32 flex flex-col bg-red-50 p-10 rounded-2xl shadow-md">
            <p className="font-bold text-xl">RS Mitra Keluarga Bekasi</p>
            <p className="font-normal text-xs">Jl. Ahmad Yani, RT.002/RW.011</p>
            <p className="w-full text-right font-normal text-xs ">
              Lebih lanjut
            </p>
          </div>
          <div className=" h-32 flex flex-col bg-red-50 p-10 rounded-2xl shadow-md">
            <p className="font-bold text-xl">RS Mitra Keluarga Bekasi</p>
            <p className="font-normal text-xs">Jl. Ahmad Yani, RT.002/RW.011</p>
            <p className="w-full text-right font-normal text-xs ">
              Lebih lanjut
            </p>
          </div>
          <div className=" h-32 flex flex-col bg-red-50 p-10 rounded-2xl shadow-md">
            <p className="font-bold text-xl">RS Mitra Keluarga Bekasi</p>
            <p className="font-normal text-xs">Jl. Ahmad Yani, RT.002/RW.011</p>
            <p className="w-full text-right font-normal text-xs ">
              Lebih lanjut
            </p>
          </div>
          <div className=" h-32 flex flex-col bg-red-50 p-10 rounded-2xl shadow-md">
            <p className="font-bold text-xl">RS Mitra Keluarga Bekasi</p>
            <p className="font-normal text-xs">Jl. Ahmad Yani, RT.002/RW.011</p>
            <p className="w-full text-right font-normal text-xs ">
              Lebih lanjut
            </p>
          </div>
          <div className=" h-32 flex flex-col bg-red-50 p-10 rounded-2xl shadow-md">
            <p className="font-bold text-xl">RS Mitra Keluarga Bekasi</p>
            <p className="font-normal text-xs">Jl. Ahmad Yani, RT.002/RW.011</p>
            <p className="w-full text-right font-normal text-xs ">
              Lebih lanjut
            </p>
          </div>
          <div className=" h-32 flex flex-col bg-red-50 p-10 rounded-2xl shadow-md">
            <p className="font-bold text-xl">RS Mitra Keluarga Bekasi</p>
            <p className="font-normal text-xs">Jl. Ahmad Yani, RT.002/RW.011</p>
            <p className="w-full text-right font-normal text-xs ">
              Lebih lanjut
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;
