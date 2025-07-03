export default function HeroBanner() {
  return (
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <img
        src="/banner.jpg"
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>

      {/* Contenido */}
      <div className="relative text-center px-4 max-w-3xl text-white z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Jackets for the Modern Man
        </h2>
        <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition">
          Discover Now
        </button>
      </div>
    </section>
  );
}
