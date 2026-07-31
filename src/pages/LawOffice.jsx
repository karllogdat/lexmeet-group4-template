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

export default function LawOfficePage() {
  return (
    <div className="flex flex-col g4-body">
      <div className="flex items-center justify-center h-fit py-20.5 px-6 lg:px-32">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* bento box */}
          <div className="lg:w-1/2 grid grid-cols-2 grid-rows-2 gap-8">
            <img
              src={OfficeTop}
              className="w-full h-full aspect-4/3 object-cover rounded-lg"
              alt="Office Top"
            />
            <img
              src={OfficeLarge}
              className="w-full h-full aspect-4/3 object-cover rounded-lg row-span-2"
              alt="Office Large"
            />
            <img
              src={OfficeBottom}
              className="w-full h-full aspect-4/3 object-cover rounded-lg"
              alt="Office Bottom"
            />
          </div>

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

      <div className="h-fit grid lg:grid-cols-4 lg:grid-rows-2 gap-y-8 gap-x-16 bg-g4-900 text-g4-50">
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

      <div className="flex items-center justify-center h-fit py-20.5 px-6 lg:px-32">
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

          {/* bento box */}
          <div className="lg:w-1/2 grid grid-cols-2 grid-rows-2 gap-8">
            <img
              src={StaffsLarge}
              className="w-full h-full aspect-4/3 object-cover rounded-lg row-span-2"
              alt="Staffs Large"
            />
            <img
              src={StaffsTop}
              className="w-full h-full aspect-4/3 object-cover rounded-lg"
              alt="Staffs Top"
            />
            <img
              src={StaffsBottom}
              className="w-full h-full aspect-4/3 object-cover rounded-lg"
              alt="Staffs Bottom"
            />
          </div>
        </div>
      </div>

      <div className="h-fit flex flex-col lg:flex-row items-center bg-g4-900 lg:p-0">
        <div className="h-fit flex flex-col m-6 lg:mx-32 rounded-lg bg-white overflow-hidden">
          <img
            src={Office}
            className="h-64 aspect-4/3 object-cover"
            alt="Office"
          />

          <div className="flex flex-col gap-6.5 px-10.5 py-16">
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
          className="w-full lg:w-1/2 h-full object-cover"
          alt="Office"
        />
      </div>
    </div>
  );
}
