import SectionTitle from "../components/section-title";

const cards = [
  {
    img: "img/pricing/birth.jpg",
    title: "Births",
    price: 550,
  },
  {
    img: "img/pricing/lifestyle.jpg",
    title: "Lifestyle",
    price: 350,
  },
  {
    img: "img/pricing/commercial.jpg",
    title: "Commercial",
    price: 200,
  },
  {
    img: "img/pricing/wedding.jpg",
    title: "Weddings",
    price: 1500,
  },
];

function Card({ img, title, price }) {
  return (
    <div data-tilt>
      <img className="rounded shadow-lg" src={img} alt={title} />
      <div className="text-center text-xl font-light text-gray-700 mt-2">
        {title}
      </div>
      <div className="text-center font-light text-gray-500">
        Starting at $<span>{price}</span>
      </div>
      <div className="text-center">
        <button className="bg-stone-100 py-2 px-6 my-2 rounded border border-stone-400 text-stone-800 uppercase text-sm">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <div>
      <SectionTitle title="Pricing" subTitle="For priceless memories" />
      <div className="px-3">
        <div className="grid gap-2 gap-y-10 grid-cols-2 md:grid-cols-4 md:gap-3 lg:gap-4">
          {cards.map((c) => (
            <Card key={c.title} img={c.img} title={c.title} price={c.price} />
          ))}
        </div>
      </div>
    </div>
  );
}
