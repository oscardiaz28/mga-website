import Image from "next/image";
import Link from "next/link";
import { BiSolidSelectMultiple } from "react-icons/bi";


export default function Home() {

  return (
    <div>
      {/* Hero */}
      <div className="h-[600px] relative parallax flex items-center justify-start w-full lg:-mt-[36px]"
      >

        <div className="w-full max-w-screen-xl mx-auto px-5">

          <div 
          data-aos="fade-up" data-aos-duration="500"
          className="relative z-10 lg:px-0 text-white md:max-w-md flex flex-col gap-7">
            <h2 className="uppercase font-bold text-4xl">consultora mga ingenieros asociados</h2>
            <p className="text-gray-50 text-[17px]/7 text">Somos una empresa que brinda servicios sobre la elaboración de proyectos e instalaciones eléctricas.</p>
            <div className="flex items-center gap-2">
              <Link href="" className="block bg-secondary text-center p-1 px-8 rounded-md">Servicios</Link>
              <Link href="" className="block bg-white text-black text-center p-1 px-8 rounded-md">Solicitar</Link>
            </div>
          </div>

        </div>

      </div>

      {/* Services HomePage */}
      <div 
      data-aos="fade-in"
      className="max-w-screen-xl mx-auto px-5 pb-20 lg:flex lg:flex-row lg:-mt-12 relative z-index-20">

        <div className="bg-primary text-white flex items-start justify-center gap-6 p-8 py-8 pb-10 lg:pb-12 flex-col sm:flex-row lg:px-8">
          <div className="bg-tertiary w-14 h-14 flex-shrink-0 rounded-full grid place-items-center">
            <BiSolidSelectMultiple className="text-2xl" />
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-2xl">Lorem Ipsum</h4>
            <p className="w-full text-[16px]/6 text-gray-200">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          </div>
        </div>

        <div className="bg-[#FC5E28] text-white flex items-start justify-center gap-6 p-8 py-8 pb-10 lg:pb-12 flex-col sm:flex-row lg:px-8">
          <div className="bg-primary w-14 h-14 flex-shrink-0 rounded-full grid place-items-center">
            <BiSolidSelectMultiple className="text-2xl" />
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-2xl">Lorem Ipsum</h4>
            <p className="w-full text-[16px]/6 text-gray-200">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          </div>
        </div>

        <div className="bg-primary text-white flex items-start justify-center gap-6 p-8 py-8 pb-10 lg:pb-12 flex-col sm:flex-row lg:px-8">
          <div className="bg-tertiary w-14 h-14 flex-shrink-0 rounded-full grid place-items-center">
            <BiSolidSelectMultiple className="text-2xl" />
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-2xl">Lorem Ipsum</h4>
            <p className="w-full text-[16px]/6 text-gray-200">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          </div>
        </div>

      </div>

      {/* Us */}
      <div className="max-w-screen-xl px-5 mx-auto py-20">

        <p className="text-black font-bold text-3xl text-center mb-20"><span className="text-secondary">/ </span>Acerca de Nosotros</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[600px] gap-16 lg:items-center">

          <div className="w-full h-full overflow-hidden rounded-md">
            <img src="/img/us.jpg" alt="" className="w-full h-[200px] md:h-[300px] object-bottom lg:h-full object-cover lg:object-left" />
          </div>

          <div className="lg:flex lg:flex-col lg:gap-6">
            <div className="flex flex-col gap-4">
              <p className="text-secondary font-bold text-xl">MGA Asociados</p>
              <p className="text-2xl text-black font-bold">Creamos y convertimos en realidad</p>
              <p className="text-gray-800 text-[16px]/8">Implementación de sistemas eléctricos con altos estándares de seguridad y calidad para garantizar un funcionamiento óptimo.</p>
            </div>

            <div className="mt-14 flex flex-col gap-5">
              <div className="bg-white border-2 border-gray-100 rounded-full grid grid-cols-2 p-1">
                <button className="bg-tertiary text-white text-sm p-3 rounded-full">Nuestra misión</button>
                <button className="text-sm p-3 rounded-full">Nuestra visión</button>
              </div>

              <p className="p-6 bg-gray-50 rounded-md text-[16px]/7"> Ofrecer soluciones integrales en obras eléctricas que superen las expectativas de nuestros clientes, garantizando seguridad, eficiencia y sostenibilidad en cada proyecto.
              </p>

            </div>

          </div>

        </div>
      </div>

      {/* Projects */}
      <div className="bg-primary py-20 text-white">
        <div className="max-w-screen-xl mx-auto px-5">
          <p className="text-white font-bold text-3xl text-left mb-20"><span className="text-secondary">/ </span>Ultimos Proyectos</p>
        </div>  
      </div>  

    </div>
  );
}
