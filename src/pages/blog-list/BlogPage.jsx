import Button from "../../components/Button";
import IconButton from "../../components/IconButton";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Mail,
  MessageSquareText,
  Search,
  Share,
} from "lucide-react";

import BlogImage from "../../assets/everyday-law/latest-blog.jpg";
import Breadcrumbs from "../../components/everyday_law/Breadcrumbs";
import { useState, useEffect } from "react";
import ShareModal from "../../components/everyday_law/ShareModal";
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
import ShareLink from "../../components/everyday_law/ShareLink";
import { useNavigate, useParams } from "react-router";
import { blogsSamples } from "../../components/everyday_law/EverydayLawMainData";
import BlogTags from "../../components/everyday_law/BlogTags";

export default function BlogPage({ type }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // replace with actual blog id fetching
  const blogs = blogsSamples;
  const currentBlog = blogs.find((blog) => blog.id == id);

  const [currentPage, setCurrentPage] = useState({ name: "Unknown", to: "/" });
  useEffect(() => {
    switch (type) {
      case "everyday_law":
        setCurrentPage({
          name: "Everyday Law",
          to: "/everyday-law/everyday-law-blog-list",
        });
        break;
      case "law_updates":
        setCurrentPage({
          name: "Law Updates",
          to: "/everyday-law/law-updates-blog-list",
        });
        break;
      case "lawyers_blog":
        setCurrentPage({
          name: "Lawyers Blog",
          to: "/everyday-law/lawyers-blog-list",
        });
        break;
    }
  }, [type]);
  const crumbs = [
    { name: "Everyday Law Main", to: "/everyday-law" },
    currentPage,
    { name: currentBlog.title, to: currentPage.to + `/${id}` },
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
    <div className="flex flex-col items-center p-6 lg:px-20 gap-8">
      {/* TODO: breadcrumbs */}
      <Breadcrumbs items={crumbs} />

      {/* Search input */}
      <div className="flex w-full items-center gap-2.5 mb-6">
        <div
          onClick={() => navigate(currentPage.to)}
          className="flex items-center justify-center w-13 h-13 bg-g4-700 rounded-[10px] shrink-0"
        >
          <ChevronLeft size={20} className="text-white" />
        </div>
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

      <div className="flex flex-col w-full gap-4">
        <h1 className="w-full g4-heading-1 text-g4-900">{currentBlog.title}</h1>

        <hr className="w-full border-g4-700 border-b-[5px]" />

        <div className="w-full flex flex-col lg:flex-row justify-between">
          <p className="g4-body text-g4-600">
            By {currentBlog.author} •{" "}
            {currentBlog.published_at.toDateString()}{" "}
          </p>
          <p className="g4-body text-g4-600">
            {currentBlog.read_time} min read • {currentBlog.views} views
          </p>
        </div>
      </div>

      <BlogTags
        tags={["Legal Advice", "Client Stories", "Practical Lessons"]}
      />

      <img src={BlogImage} className="w-full object-cover aspect-4/3" />

      <p className="py-2.5 g4-body">{currentBlog.content}</p>

      <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-between">
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
