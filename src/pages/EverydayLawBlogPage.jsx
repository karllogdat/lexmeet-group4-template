import BlogTags from "../components/everyday_law/BlogTags";
import Button from "../components/Button";
import IconButton from "../components/IconButton";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Mail,
  MessageSquareText,
  Search,
  Share,
} from "lucide-react";

import BlogImage from "../assets/everyday-law/latest-blog.jpg";
import Breadcrumbs from "../components/everyday_law/Breadcrumbs";
import { useState } from "react";
import ShareModal from "../components/everyday_law/ShareModal";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandMessengerFilled,
  IconBrandPinterestFilled,
  IconBrandReddit,
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconBrandX,
} from "@tabler/icons-react";
import ShareLink from "../components/everyday_law/ShareLink";

export default function EverydayLawBlogPage() {
  const crumbs = [
    { name: "Everyday Law", to: "/everyday-law" },
    {
      name: "Behind the Case: Practical Lessons from Real Client Experiences",
      to: "/everyday-law/blog",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const socialMediaIcons = [
    IconBrandFacebook,
    IconBrandLinkedin,
    IconBrandX,
    IconBrandWhatsapp,
    IconBrandTelegram,
    IconBrandMessengerFilled,
    IconBrandReddit,
    IconBrandPinterestFilled,
    Mail,
    MessageSquareText,
  ];
  return (
    <div className="flex flex-col items-center p-6 lg:p-20 gap-8">
      {/* TODO: breadcrumbs */}
      <Breadcrumbs items={crumbs} />

      {/* search bar */}
      <div className="flex w-full h-shrink gap-2.5">
        <IconButton>
          <ChevronLeft />
        </IconButton>
        <IconButton>
          <Search />
        </IconButton>
        {/* Search bar not working yet */}
        <div className="w-full h-13 rounded-lg border border-g4-700"></div>
      </div>

      <div className="flex flex-col w-full gap-4">
        <h1 className="w-full g4-heading-1 text-g4-900">
          Behind the Case: Practical Lessons from Real Client Experiences
        </h1>

        <hr className="w-full border-g4-700 border-b-[5px]" />

        <div className="w-full flex justify-between">
          <p className="g4-body text-g4-600">By Jane Doe • May 15, 2023</p>
          <p className="g4-body text-g4-600">5 min read</p>
        </div>
      </div>

      <BlogTags
        tags={["Legal Advice", "Client Stories", "Practical Lessons"]}
      />

      <img src={BlogImage} className="w-full object-cover aspect-4/3" />

      <p className="py-2.5 g4-body">
        Growing a business means taking on new opportunities, but it also comes
        with legal responsibilities that many entrepreneurs overlook. One of the
        most common mistakes we see is relying on verbal agreements or informal
        conversations instead of written contracts. While trust is important, a
        properly drafted agreement sets clear expectations for both parties,
        covering payment terms, timelines, responsibilities, confidentiality,
        and dispute resolution. Another frequent issue is choosing a business
        structure that no longer fits the company's growth. Many businesses
        begin as sole proprietorships because registration is simple, but as
        operations expand, owners may benefit from a different structure that
        offers better liability protection, tax planning, and investment
        opportunities. We also encounter businesses that unintentionally fall
        behind on regulatory compliance, such as permit renewals, reportorial
        requirements, labor obligations, or data privacy responsibilities. These
        seemingly minor oversights can result in unnecessary penalties,
        operational delays, and avoidable legal complications.
        <br />
        <br />
        Protecting intellectual property is another area that is often
        neglected. Business owners typically focus on building their brand first
        and postpone trademark registration or protecting their creative assets
        until much later. Unfortunately, waiting too long can create ownership
        disputes or force businesses to rebrand after investing significant time
        and resources. Finally, many entrepreneurs only seek legal advice after
        a dispute has already occurred. Whether it's a demand letter, a contract
        disagreement, or a regulatory issue, addressing legal concerns after
        problems arise usually limits available options and increases costs.
        Seeking legal guidance early allows businesses to identify risks before
        they become expensive mistakes, review important agreements with
        confidence, and establish processes that support sustainable growth.
        Strong legal foundations are not simply about avoiding disputes—they
        provide the confidence to make informed decisions, build stronger
        business relationships, and focus on growing the business with fewer
        unexpected obstacles.
      </p>

      <div className="w-full flex items-center justify-between">
        <div className="flex gap-2.5">
          <Button>
            Like <Heart />
          </Button>
          <Button onClick={() => setIsModalOpen(true)}>
            Share <Share />
          </Button>

          <ShareModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Share this Blog"
          >
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-5 gap-4">
                {socialMediaIcons.map((Icon, index) => (
                  <button
                    key={index}
                    className="w-13 h-13 flex items-center justify-center rounded-full p-3 text-white bg-g4-700"
                  >
                    <Icon />
                  </button>
                ))}
              </div>

              <div className="w-full flex flex-col gap-2 g4-caption text-slate-300">
                <p>Or copy as link</p>
                <ShareLink />
                <p>Click outside to close</p>
              </div>
            </div>
          </ShareModal>
        </div>
        <div className="flex gap-2.5">
          <div className="h-[52px] w-[52px] flex items-center justify-center rounded-full bg-g4-700 text-white">
            <ChevronLeft />
          </div>
          <div className="h-[52px] w-[52px] flex items-center justify-center rounded-full bg-g4-700 text-white">
            <ChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
}
