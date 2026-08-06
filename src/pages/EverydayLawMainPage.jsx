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
    <div className="flex flex-col items-center p-6 lg:px-20 gap-2.5">
      <h1 className="w-full h-16 text-center g4-heading-1 font-bold text-g4-700">
        Everyday Law
      </h1>

      {/* <div className="flex w-full h-shrink gap-2.5">
        <IconButton>
          <Search />
        </IconButton>
        
        <div className="w-full h-13 rounded-lg border border-g4-700"></div>
      </div> 
      */}

      {/* Search input */}
      <div className="flex w-full items-center gap-2.5 mb-6">
        <div className="flex items-center justify-center w-13 h-13 bg-g4-700 rounded-[10px] shrink-0">
          <Search size={20} className="text-white" />
        </div>
        <input
          id="lawyers-search"
          type="search"
          placeholder="Search blog posts..."
          // value={searchQuery}
          // onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 h-13 px-4 border bg-white border-g4-700 rounded-lg font-inter text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-g4-600 focus:border-transparent"
          aria-label="Search blog posts"
        />
      </div>

      {/*Latest Blog Section */}
      <LatestBlog blog={latestBlogSample} />

      {/* popular tags section */}
      <PopularTags tags={tags} />

      {/*Three subsections*/}
      <div className="grid lg:grid-cols-3 w-full gap-10">
        <SubsectionCard
          type="Everyday Law"
          blog={latestBlogSample}
          to="/everyday-law/everyday-law-blog-list"
        />
        <SubsectionCard
          type="Law Updates"
          blog={latestBlogSample}
          to="/everyday-law/law-updates-blog-list"
        />
        <SubsectionCard
          type="Lawyers Blog"
          blog={latestBlogSample}
          to="/everyday-law/lawyers-blog-list"
        />
      </div>

      {/* talk and standard */}
      <div className="flex flex-col lg:flex-row lg:w-214.5 gap-21.5 py-8">
        <div className="flex flex-col gap-4 p-8 lg:w-1/2 bg-g4-50 rounded-lg">
          <h3 className="g4-heading-3 text-g4-900">Need Legal Help?</h3>
          <p className="g4-body text-g4-900">
            Talk to a lawyer for legal advice on your specific concern. Get
            clear next steps before taking action.
          </p>
          <Button>
            <p className="g4-button">Talk to a Lawyer</p>
          </Button>
        </div>

        <div className="flex flex-col lg:w-1/2 gap-4 p-8 justify-center text-g4-900">
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
