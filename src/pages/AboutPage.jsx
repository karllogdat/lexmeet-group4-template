import { useNavigate } from "react-router";
import AboutImage from "../assets/about/main.jpg";
import { ChevronDown, ChevronUp, ClipboardPen, Target } from "lucide-react";
import ValueCard from "../components/about/ValueCard";
import Button from "../components/Button";
import PromiseCard from "../components/about/PromiseCard";
import { useState } from "react";

const VISIBLE_VALUES = 3;

export default function AboutPage() {
  const TABS = ["About", "Law Practice"];
  const activeTab = "About";

  const navigate = useNavigate();

  const values = [
    {
      icon: "/assets/about/HouseLightBulb.svg",
      title: "We Innovate Legal Solutions",
      description:
        "We are always looking for other ways to make legal services convenient, affordable and secure for all stakeholders. ",
    },
    {
      icon: "/assets/about/HouseLaw.svg",
      title: "We Innovate Legal Solutions",
      description:
        "We are always looking for other ways to make legal services convenient, affordable and secure for all stakeholders. ",
    },
    {
      icon: "/assets/about/HouseSettings.svg",
      title: "We Innovate Legal Solutions",
      description:
        "We are always looking for other ways to make legal services convenient, affordable and secure for all stakeholders. ",
    },
    {
      icon: "/assets/about/HouseLightBulb.svg",
      title: "We Innovate Legal Solutions",
      description:
        "We are always looking for other ways to make legal services convenient, affordable and secure for all stakeholders. ",
    },
    {
      icon: "/assets/about/HouseLaw.svg",
      title: "We Innovate Legal Solutions",
      description:
        "We are always looking for other ways to make legal services convenient, affordable and secure for all stakeholders. ",
    },
    {
      icon: "/assets/about/HouseSettings.svg",
      title: "We Innovate Legal Solutions",
      description:
        "We are always looking for other ways to make legal services convenient, affordable and secure for all stakeholders. ",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleValues = showAll ? values : values.slice(0, VISIBLE_VALUES);
  const hasMore = values.length > VISIBLE_VALUES;

  const promiseImage =
    "https://images.pexels.com/photos/8112153/pexels-photo-8112153.jpeg";

  const promises = [
    "Annulment of Marriage",
    "Support",
    "Estate",
    "Conjugal Property",
    "Debt Problem",
    "Real Estate Transactions",
    "Investments",
    "Business",
  ];

  return (
    <div className="flex flex-col">
      <div
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 58, 107, 1), rgba(0, 58, 107, 0.75), rgba(0, 58, 107, 0.5)), url(${AboutImage})`,
        }}
        className="w-full h-fit flex flex-col items-center gap-8 p-6 lg:px-16 lg:py-10 bg-cover bg-center"
      >
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex gap-8 border-b border-g4-700 g4-heading-3 font-bold">
            <button
              type="button"
              onClick={() => navigate("/law-practice")}
              className="border-transparent text-g4-700 pb-3 border-b-2 -mb-px transition-colors hover:text-white/70"
            >
              Law Practice
            </button>
            <button
              type="button"
              onClick={() => navigate("/about")}
              className="pb-3 border-b-2 -mb-px transition-colors border-g4-400 text-g4-400 hover:text-white/70"
            >
              About
            </button>
          </div>
        </div>

        <div className="w-full lg:w-4xl flex flex-col gap-2 text-g4-50">
          <h2 className="g4-heading-2 font-bold">About Us</h2>
          <h3 className="g4-heading-3">
            LexMeet: Bridging the Gap to Accessible Legal Help
          </h3>
          <p className="h-48 overflow-y-auto scrollbar-thin scrollbar-gutter-stable scrollbar-thumb-g4-50 g4-body text-justify">
            LexMeet combines the Latin word "Lex," meaning law, with "Meet,"
            representinhg connection and conversation. Together, they embody our
            mission: bringing lawyers and clients together through a modern
            digital platform to make legal help more accessible, efficient, and
            convenient.
            <br />
            <br />
            With our tagline, "Legal help in a click," LexMeet leverages
            technology to simplify legal services—making it easier for
            individuals, businesses, and communities to connect with trusted
            legal professionals anytime, anywhere.
            <br />
            <br />
            LexMeet combines the Latin word "Lex," meaning law, with "Meet,"
            representinhg connection and conversation. Together, they embody our
            mission: bringing lawyers and clients together through a modern
            digital platform to make legal help more accessible, efficient, and
            convenient.
            <br />
            <br />
            With our tagline, "Legal help in a click," LexMeet leverages
            technology to simplify legal services—making it easier for
            individuals, businesses, and communities to connect with trusted
            legal professionals anytime, anywhere.
          </p>
        </div>
      </div>

      <div className="w-full px-6 lg:px-20 py-14 flex flex-col lg:flex-row gap-24 bg-linear-4 from-white from-[49.9%] to-g4-900 to-[50.1%]">
        <div className="w-full lg:w-1/2 flex flex-col rounded-lg bg-g4-50 text-g4-900 shadow-black/10 shadow-[4px_4px_32px]">
          <div className="relative">
            <div className="w-full h-48 object-cover rounded-t-lg bg-g4-700" />

            <div className="flex items-center justify-center text-g4-50 absolute inset-0 rounded-t-lg bg-linear-to-t from-g4-50 to-transparent">
              <Target size={128} />
            </div>
          </div>

          <div className="p-8 flex flex-col items-center gap-4">
            <h1 className="g4-heading-1 font-bold">Our Mission</h1>
            <h2 className="g4-heading-2">Mission Title</h2>
            <p className="g4-body">
              Our mission is to bridge the gap between clients and lawyers by
              giving them the facility and technology to meet and solve their
              problems. We want to make legal services more accessible and
              affordable to you.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col rounded-lg bg-g4-50 text-g4-900 shadow-black/10 shadow-[4px_4px_32px]">
          <div className="relative">
            <div className="w-full h-48 object-cover rounded-t-lg bg-g4-700" />

            <div className="flex items-center justify-center text-g4-50 absolute inset-0 rounded-t-lg bg-linear-to-t from-g4-50 to-transparent">
              <ClipboardPen size={128} />
            </div>
          </div>

          <div className="p-8 flex flex-col items-center gap-4">
            <h1 className="g4-heading-1 font-bold">Our Vision</h1>
            <h2 className="g4-heading-2">Vision Title</h2>
            <p className="g4-body">
              Our vision is to see people seeking legal services without leaving
              the comforts of their home through technology. Our aim is to make
              legal services readily available and affordable to our OFWs, SMEs,
              startups and other people hindered by time, distance and money.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col pb-8 gap-8 items-center text-g4-900">
        <h1 className="w-full text-center g4-heading-1 font-bold">
          Values We Live By
        </h1>
        <div className="w-full flex flex-col gap-16 lg:gap-0">
          {visibleValues.map((value, index) => (
            <ValueCard key={index} value={value} index={index} />
          ))}
        </div>
        <Button className="flex gap-4" onClick={() => setShowAll(!showAll)}>
          {showAll ? "See Less" : "See More"}
          {showAll ? <ChevronUp /> : <ChevronDown />}
        </Button>
      </div>

      {/* with slant bg: "w-full p-6 lg:px-20 py-32 flex flex-col lg:flex-row items-center gap-24 bg-linear-358 from-g4-900 from-[89.9%] to-g4-white to-[90.1%] text-g4-50" */}
      <div className="flex flex-col w-full">
        <img src={promiseImage} className="w-full object-cover aspect-4/1" />
        <div className="w-full p-6 lg:px-20 py-16 flex flex-col lg:flex-row items-center gap-24 bg-g4-900 text-g4-50">
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h1 className="g4-heading-1 font-bold">Our Promise</h1>
            <h2 className="g4-heading-2">Making Legal Help Accessible</h2>
            <p className="g4-body">
              From this vision, LexMeet was created—to make legal help more
              accessible through technology. We connect peohple with trusted
              lawyers for secure, real-time online consultations, wherever they
              are and whenever they need legal guidance.
              <br /> <br />
              Choose a lawyer based on expertise, location, or preferred
              language, then connect through our secure video consultation
              platform using your computer, tablet, or smartphone. With easy
              scheduling, transparent access, and affordable consultations,
              LexMeet makes finding the right legal professional simple,
              convenient, and just a click away.
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-14">
            <div className="grid grid-cols-2 gap-6">
              {promises.map((promise, index) => (
                <PromiseCard key={index} promise={promise} />
              ))}
            </div>

            <p className="g4-body">
              A meeting place for clients seeking legal advice online! A
              webspace for lawyers making their services available to the
              public! Come on! LexMeet!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
