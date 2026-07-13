import Image from "next/image";
import { Menu } from "./components/Menu";
import Banner from "./components/Banner";
import Localizacao from "./components/Localizacao";
import { GalleryTabs } from "./components/GalleryTabs";
import FichaTecnica from "./components/FichaTecnica";
import Diferenciais from "./components/Diferenciais";
import Tour from "./components/Tour";
import LocalizacaoCompleta from "./components/LocalizacaoCompleta";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import { FloatingWhatsApp } from "./components/Whatsapp";

export default function Home() {
  return (
   <>
    <Menu/>
    <Banner/>
    <Localizacao />
    <GalleryTabs/>
    
    <Diferenciais />
    <Tour />
    <LocalizacaoCompleta />
    {/* <FichaTecnica/> */}
    <Contato/>
    <Footer/>
    <FloatingWhatsApp/>
   </>
  );
}
