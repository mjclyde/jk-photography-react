import SectionTitle from "../components/section-title";

const testimonial = {
  img: "img/slide-show-05.jpg",
  message:
    "We have absolutely loved Jamie’s work! What usually has been a very stressful experience for our young family turned out to be quite enjoyable and the finished work is incredible. We always seem to put off getting family pictures but Jamie has proven time and time again that we love and cherish the sweet moments she captures on camera! We highly recommend Jamie as a photographer and will continue using her in the future.",
  from: "Staci",
};

function Card({ testimonial }) {
  return (
    <div className="m-5 h-96 shadow-2xl rounded-xl flex">
      <img className="h-full rounded-l-xl" src={testimonial.img} alt="" />
      <div className="p-8 text-sm text-gray-600 flex flex-col justify-center">
        <div>{testimonial.message}</div>
        <div className="text-right mt-2 mr-2 font-bold text-gray-400">- {testimonial.from}</div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <div>
      <SectionTitle
        title="Testimonials"
        subTitle="Real families, real experiences"
      />
      <Card testimonial={testimonial} />
    </div>
  );
}
