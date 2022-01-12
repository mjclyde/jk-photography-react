import SectionTitle from "../components/section-title";

const JamieImgUrl = "img/about/jamie-02.jpg";
const FamilyImgUrl = "img/about/jamie-04.jpg";

export default function Jamie() {
  return (
    <div>
      <SectionTitle
        title="Hi. My name is Jamie."
        subTitle="I am so glad you are here!"
      />
      <div className="md:flex items-stretch">
        <img
          className="w-2/3 mx-auto object-cover rounded-lg shadow-lg md:hidden"
          src={JamieImgUrl}
          alt="Jamie"
        />
        <div className="text-container flex items-center">
          <div>
            Hi! I'm Jamie, a natural light photographer based in beautiful Cache
            Valley Utah. I picked up a camera in 2010 and haven't been able to
            put it down. I am forever inspired by families and passionate about
            documenting them. Think you've got a rambunctious crew?{" "}
            <strong className="mr-2">Bring it on!</strong>
            As the oldest of 7 children, and a mother to 5 of my own, I am no
            stranger to chaos!
          </div>
        </div>
        <img
          className="hidden md:block w-1/3 object-cover rounded-tl-lg lg:rounded-lg rounded-bl-none lg:rounded-bl-none shadow-lg"
          src={JamieImgUrl}
          alt="Jamie"
        />
      </div>
      <div className="md:flex items-stretch">
        <img
          className="object-cover md:hidden"
          src={FamilyImgUrl}
          alt="Younker Family"
        />
        <img
          className="hidden md:block w-2/3 object-cover rounded-br-lg lg:rounded-lg rounded-tr-none lg:rounded-tr-none shadow-lg"
          src={FamilyImgUrl}
          alt="Younker Family"
        />
        <div className="text-container flex items-center">
          Every family has their own unique vibe and connection - an exclusive
          one-of-a-kind love. Capturing this energy is my favorite part of the
          job!
        </div>
      </div>
    </div>
  );
}
