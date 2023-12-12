import React from "react";
import { FaFirstAid } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="w-full h-80 bg-red-700 flex justify-around py-20">
      <div className="flex flex-col justify-between h-full">
        <p className="text-4xl font-black text-white">LifeSaver</p>
        <div>
          <p>Jl. Komp. Mina Bhakti </p>
          <p>Kota Bogor, Jawa Barat</p>
          <p>(021) 66677, 085781029558</p>
        </div>
        <p>Copyrights © 2023 </p>
      </div>
      <div className="flex flex-col justify-between h-full">
        <p className="text-xl font-black text-white">tentang ppgd</p>
        <div>
          <p>Layanan</p>
          <p>Inovasi</p>
          <p>Keselamatan</p>
          <p>Evakuasi</p>
          <p>Pelatihan</p>
        </div>
      </div>
      <div className="flex flex-col justify-between h-full">
        <p className="text-xl font-black text-white">Informasi</p>
        <div>
          <p>Emergency</p>
          <p>Artikel</p>
          <p>Berita</p>
          <p>Galeri Foto</p>
          <p>Galeri Video</p>
        </div>
      </div>
      <div className="flex items-center gap-10">
        <a href="https://www.instagram.com/dinkeskotabogor/">
          <FaInstagram className="w-16 h-12 text-white " />
        </a>
        <a href="https://www.facebook.com/p/Dinas-Kesehatan-Kota-Bogor-100059977225677/">
          <TiSocialFacebook className="w-16 h-12 text-white" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
