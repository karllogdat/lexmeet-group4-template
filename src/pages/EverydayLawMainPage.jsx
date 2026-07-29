import { ArrowRight, Search } from "lucide-react";
import IconButton from "../components/IconButton";
import SubsectionCard from "../components/everyday_law/SubsectionCard";
import Button from "../components/Button";

import LatestBlog from "../assets/everyday-law/latest-blog.jpg";

import { tags } from "../components/everyday_law/EverydayLawMainData";
import PopularTags from "../components/everyday_law/PopularTags";

export default function EverydayLawMainPage() {
  return (
    <div className="flex flex-col items-center p-20 gap-2.5">
      <h1 className="w-full h-16 text-center g4-heading-1 text-g4-700">
        Everyday Law
      </h1>
      <div className="flex w-full h-shrink gap-2.5">
        <IconButton>
          <Search />
        </IconButton>
        {/* Search bar not working yet */}
        <div className="w-full h-13 rounded-lg border border-g4-700"></div>
      </div>

      {/* popular tags section */}
      <PopularTags tags={tags} />

      {/*Latest Blog Section */}
      <div className="w-full flex flex-col gap-2.5">
        <h2 className="w-fit border-b-[5px] border-g4-700 g4-heading-2 text-g4-900">
          Latest Blog
        </h2>
        <div className="flex w-full h-fit gap-8">
          <img
            className="w-1/2 bg-cover aspect-auto"
            src={LatestBlog || "./src/assets/everyday-law/latest-blog.jpg"}
          />
          <div className="w-1/2 h-full flex flex-col justify-center gap-2.5">
            <h3 className="g4-heading-3 text-g4-900">
              Behind the Case: Practical Lessons from Real Client Experiences
            </h3>
            <p className="g4-large-body text-g4-600">
              Juan Dela Cruz • January 1, 2026
            </p>
            <p className="line-clamp-7 text-truncate g4-body">
              Growing a business means taking on new opportunities, but it also
              comes with legal responsibilities that many entrepreneurs
              overlook. One of the most common mistakes we see is relying on
              verbal agreements or informal conversations instead of written
              contracts. While trust is important, a properly drafted agreement
              sets clear expectations for both parties, covering payment terms,
              timelines, responsibilities, confidentiality, and dispute
              resolution. Another frequent issue is choosing a business
              structure that no longer fits the company's growth. Many
              businesses begin as sole proprietorships because registration is
              simple, but as operations expand, owners may benefit from a
              different structure that offers better liability protection, tax
              planning, and investment opportunities. We also encounter
              businesses that unintentionally fall behind on regulatory
              compliance, such as permit renewals, reportorial requirements,
              labor obligations, or data privacy responsibilities. These
              seemingly minor oversights can result in unnecessary penalties,
              operational delays, and avoidable legal complications.
            </p>

            <div className="flex w-fit py-2 items-center justify-center gap-2.5 text-g4-700">
              <span className="g4-button">Read More</span>
              <ArrowRight />
            </div>
          </div>
        </div>
      </div>

      {/*Three subsections*/}
      <div className="grid grid-cols-3 w-full gap-2 5">
        <SubsectionCard />
        <SubsectionCard />
        <SubsectionCard />
      </div>

      {/* talk and standard */}
      <div className="flex w-214.5 gap-21.5">
        <div className="flex flex-col gap-4 p-8 w-1/2 bg-g4-50 rounded-lg">
          <h3 className="g4-heading-3 text-g4-900">Need Legal Help?</h3>
          <p className="g4-body text-g4-900">
            Talk to a lawyer for legal advice on your specific concern. Get
            clear next steps before taking action.
          </p>
          <Button>
            <p className="g4-button">Talk to a Lawyer</p>
          </Button>
        </div>

        <div className="flex flex-col w-1/2 gap-4 justify-center text-g4-900">
          <h3 className="g4-heading-3 text-g4-900">Editorial Standard</h3>
          <p className="g4-body text-g4-900">
            Articles are reviewed for legal accuracy and updated as laws and
            jurisprudence change.
          </p>

          <p className="g4-body">
            Updated weekly by the Pixellary editorial team.
          </p>
        </div>
      </div>
    </div>
  );
}
