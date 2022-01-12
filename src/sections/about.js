import SectionTitle from "../components/section-title";

const JamieAboutMeImage = "img/about/jamie-05.jpg";
const MoreInfo1 = "img/info/more-info-01.jpg";
const MoreInfo2 = "img/info/more-info-02.jpg";
const LargerFamily = "img/info/larger-family.jpg";

export default function About() {
  return (
    <div>
      <SectionTitle title="About Me" subTitle="Why don't I introduce myself." />
      <img className="lg:rounded-lg shadow-lg" src={JamieAboutMeImage} alt="" />
      <h1 className="text-title text-center text-lg mt-10">
        I am a seeker of the light, in all its forms.
      </h1>
      <div className="text-container pt-6">
        I have always been fascinated by the light. The way it dances across the
        water, elongates the shadows, and shimmers through the trees. It
        literally amplifies and gives life to everything it touches. My favorite
        kind of light is the kind that shines from the inside out. Light with a
        capital “L” that illuminates the heart and sparkles in the eye of all
        living creatures. I have a knack for noticing this kind of light… and
        one of the greatest joys in my life is photographing it.
      </div>

      <SectionTitle title="More Info" subTitle="What else can I say?" />

      <div className="md:grid md:grid-cols-2">
        <div>
          <div className="text-container pt-0 md:pt-20">
            One of my favorite phrases is{" "}
            <strong className="font-bold">"I've got you."</strong> I say it to
            my friends, I say it to my kids. I even say it to myself! (Gotta
            have your own back, right?!) And today I’m saying it to you. I know
            how important your family pictures are to you. How do I know?
            Because you’re here.
          </div>
          <img
            className="md:rounded-lg md:w-4/5 md:mx-auto md:shadow-xl"
            src={MoreInfo1}
            alt=""
          />
        </div>
        <div className="md:flex md:flex-col-reverse">
          <div className="text-container md:pb-10">
            By the time a family arrives at their session they have already
            invested time, money, and a heck of a lot of mental energy. Between
            aligning everyone's schedule and figuring out what on earth everyone
            is going to wear, it can feel pretty stressful! But don’t you worry
            about a thing my friend. I’ve got you. Your only job is to show up
            and love on your people the best way you know how. I’ll take care of
            the rest.
          </div>
          <img
            className="md:rounded-lg md:w-4/5 md:mx-auto md:shadow-xl"
            src={MoreInfo2}
            alt=""
          />
        </div>
      </div>

      <div className="text-container md:pt-0">
        We’ll strike a balance between posing you so you look amazing (pinky
        swear!) and letting things unfold naturally so we capture the real you!
        And the best news of all? You don’t have to worry about managing your
        kids at all during our session. You can totally leave that up to me
        (I’ve got a few tricks up my sleeves!)
        <div className="mt-6">
          Fun is always the goal, because I want your kids to be excited when
          you invite me back!
        </div>
      </div>
      <img className="lg:rounded-lg shadow-lg" src={LargerFamily} alt="" />
    </div>
  );
}
