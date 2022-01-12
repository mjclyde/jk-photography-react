import Images from "./wide-images.json";

function SlideShow() {
  const index = Math.floor(Math.random() * (Images.length - 1));
  const img = Images[index];
  return (
    <div>
      <img className="lg:rounded-lg shadow-xl" src={img.url} alt="" />
    </div>
  );
}

export default SlideShow;
