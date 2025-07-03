export default function PromoBanners() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 px-8">
      <div className="bg-gray-100 p-8 text-center">
        <h4 className="font-bold mb-2">Where Dreams Meet Couture</h4>
        <button className="underline">Shop Now</button>
      </div>
      <div className="bg-gray-100 p-8 text-center">
        <h4 className="font-bold mb-2">Enchanting Styles for Every Woman</h4>
        <button className="underline">Shop Now</button>
      </div>
      <div className="bg-gray-100 p-8 text-center">
        <h4 className="font-bold mb-2">Chic Footwear for City Living</h4>
        <button className="underline">Shop Now</button>
      </div>
    </section>
  );
}
