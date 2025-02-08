import Link from "next/link";

export default function About() {
  return (
    <div>
      {/* Hero */}
      <div className="h-[500px] relative parallax flex items-end pb-28 justify-start w-full lg:-mt-[36px]">
        <div className="w-full max-w-screen-xl mx-auto px-5">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            className="relative z-10 lg:px-0 text-white md:max-w-md flex flex-col gap-7"
          >
            <h3
              className="text-4xl lg:text-6xl font-bold "
            >
              Nosotros
            </h3>
          </div>
        </div>
      </div>

      <div>
        
      </div>
    </div>
  );
}
