import { Search } from "lucide-react";
import IconButton from "../components/IconButton";
import SubsectionCard from "../components/everyday_law/SubsectionCard";
import Button from "../components/Button";

import LatestBlog from "../components/everyday_law/LatestBlog";
import {
  latestBlogSample,
  tags,
} from "../components/everyday_law/EverydayLawMainData";
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
      <LatestBlog blog={latestBlogSample} />

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
