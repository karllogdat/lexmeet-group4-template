import OfficeTop from "../assets/law-office/office-top.jpg";
import OfficeBottom from "../assets/law-office/office-bottom.jpg";
import OfficeLarge from "../assets/law-office/office-large.jpg";

import LawyersTop from "../assets/law-office/lawyers-top.jpg";
import LawyersBottom from "../assets/law-office/lawyers-bottom.jpg";
import LawyersLarge from "../assets/law-office/lawyers-large.jpg";

import StaffsTop from "../assets/law-office/staffs-top.jpg";
import StaffsBottom from "../assets/law-office/staffs-bottom.jpg";
import StaffsLarge from "../assets/law-office/staffs-large.jpg";

import Map from "../assets/law-office/map.png";
import Office from "../assets/law-office/office.jpg";

import Button from "../components/Button";
import { MapIcon } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import LawOfficeCarousel from "../components/law-office/LawOfficeCarousel";

export default function LawOfficePage() {
  const IMAGES = [
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="flex flex-col g4-body">
      <div className="flex items-center justify-center h-fit py-16 px-6 lg:px-32">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <LawOfficeCarousel
            className="lg:w-1/2"
            imageClassName="rounded-lg"
            images={IMAGES}
          />

          <div className="flex flex-col gap-8 lg:w-1/2">
            <h1 className="g4-heading-1 font-bold">Our Law Office</h1>
            <h2 className="g4-heading-2">Built for Modern Legal Practice</h2>
            <p>
              Equipped with modern systems, experienced professionals, and
              practical legal workflows that put clients first. Equipped with
              modern systems, experienced professionals, and practical legal
              workflows that put clients first.
            </p>
            <Button>Read More</Button>
          </div>
        </div>
      </div>

      <div className="h-fit grid lg:grid-cols-4 lg:grid-rows-2 gap-4 lg:gap-y-8 lg:gap-x-16 bg-g4-900 text-g4-50">
        <img
          src={LawyersLarge}
          className="w-full h-full aspect-4/3 object-cover col-span-2 lg:col-span-1 lg:row-span-2"
          alt="Lawyers Large"
        />

        <div className="row-span-2 col-span-2 flex flex-col justify-center gap-8 py-20 px-6 lg:px-0">
          <h1 className="g4-heading-1 font-bold">Our Lawyers</h1>
          <h2 className="g4-heading-2">
            Manned by Competent and Trustworthy Lawyers
          </h2>
          <p>
            Our legal team is trained in litigation, advisory, and documentation
            work, ensuring accurate legal guidance to case resolution
          </p>
          <Button>Read More</Button>
        </div>

        <img
          src={LawyersTop}
          className="w-full h-full aspect-4/3 object-cover rounded-bl-lg sm:rounded-tr-lg"
          alt="Lawyers Top"
        />

        <img
          src={LawyersBottom}
          className="w-full h-full aspect-4/3 object-cover rounded-tl-lg"
          alt="Lawyers Bottom"
        />
      </div>

      <div className="flex items-center justify-center h-fit py-16 px-6 lg:px-32">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="flex flex-col items-end gap-8 lg:w-1/2">
            <h1 className="g4-heading-1 font-bold">Our Staffs</h1>
            <h2 className="g4-heading-2 text-right">
              Friendly and Industrious Support Staff
            </h2>
            <p className="text-right">
              Behind every legal service is a responsible support team that
              handles scheduling, records, and client updates with speed and
              care
            </p>
            <Button>Read More</Button>
          </div>

          <LawOfficeCarousel
            className="lg:w-1/2"
            imageClassName="rounded-lg"
            images={IMAGES}
          />
        </div>
      </div>

      <div className="h-fit flex flex-col p-6 lg:p-16 gap-16 lg:gap-32 lg:flex-row items-center bg-g4-900">
        <div className="h-fit flex flex-col rounded-lg bg-white overflow-hidden">
          <LawOfficeCarousel images={IMAGES} />

          <div className="flex flex-col gap-6.5 p-6 lg:px-8 lg:py-8">
            <h2 className="g4-heading-2">Office Location</h2>
            <p>
              123 Kalayaan Avenue, Barangay San Antonio, Makati City, 1205 Metro
              Manila, Philippines
            </p>
            <p>
              Visit us for in-person legal consultations, document review, and
              case strategy sessions.{" "}
            </p>
            <Button>Read More</Button>
          </div>
        </div>

        <img
          src={Map}
          className="lg:w-1/2 object-cover rounded-lg"
          alt="Office"
        />
      </div>
    </div>
  );
}
