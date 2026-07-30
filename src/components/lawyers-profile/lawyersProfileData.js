// ── Lawyer photo assets (read-only import from law-practice/members) ──────────
import annaBermudezImg from "../../assets/law-practice/members/anna-bermudez.png";
import kalixMartinezImg from "../../assets/law-practice/members/kalix-martinez.png";
import louisseMartinezImg from "../../assets/law-practice/members/louisse-martinez.png";

// ─────────────────────────────────────────────────────────────────────────────
// Each lawyer entry contains all data needed by every tab (page + modal).
// ─────────────────────────────────────────────────────────────────────────────

export const lawyers = [
  {
    id: "lawyer-1",
    name: "Atty. Anna C. Bermudez",
    position: "Managing Partner",
    photo: annaBermudezImg,
    isOnline: true,
    phone: "+63 917 123 4567",
    rating: 5.0,
    isAvailable: true,
    location: "Pasay, Metro Manila",
    consultationCount: 100,
    cv: {
      rollNumber: "478046J",
      dateAdmitted: "June 16, 2005",
      ibp: { number: "Aklan 1111111", date: "June 29, 2021" },
      mcle: {
        status: "Compliant",
        number: "324212345678",
        dateRange: "May 5, 2021 – July 7, 2021",
      },
      languages: ["Bicolano", "Cebuano", "Chinese"],
      workExperience: [
        {
          firm: "Valderma Law Office",
          role: "Associate Lawyer",
          address: "Unit G 10th Floor, Strata 100, Ortigas Center, Pasig City",
        },
      ],
      education: [
        {
          institution: "University of Santo Tomas",
          degree: "AB Philosophy",
          date: "July 3, 1991",
        },
        {
          institution: "University of Santo Tomas",
          degree: "Doctor of Jurisprudence",
          date: "March 15, 2001",
        },
      ],
      locationOfPractice: ["Nationwide", "Luzon wide", "Mindanao wide", "Visayas wide"],
      concentration: [
        "Administrative law",
        "Bankruptcy",
        "Banking law",
      ],
      casesHandled: [
        "Abatement of nuisance",
        "Act of lasciviousness",
        "Actions for specific performance",
      ],
    },
    reviews: [
      {
        id: "r1-1",
        reviewer: "Mr. Yuso",
        rating: 4.0,
        text: "Atty. Bermudez walked me through the contract review clearly and answered every question I had, even the basic ones. Response times were a little slower than I expected during the busier week, but the quality of the work made up for it. Would consult with her again.",
        timestamp: "10/22/2022, 2:48 PM",
      },
      {
        id: "r1-2",
        reviewer: "Mr. Dela Cruz",
        rating: 4.0,
        text: "The team drafted our contracts clearly and explained every clause in plain language. Deadlines were met without needing to follow up, which we appreciated as a small business.",
        timestamp: "10/22/2022, 2:48 PM",
      },
      {
        id: "r1-3",
        reviewer: "Mr. Dela Cruz",
        rating: 5.0,
        text: "The team drafted our contracts clearly and explained every clause in plain language. Deadlines were met without needing to follow up, which we appreciated as a small business.",
        timestamp: "10/22/2022, 2:48 PM",
      },
      {
        id: "r1-4",
        reviewer: "Ms. Yao",
        rating: 4.0,
        text: "Atty. Bermudez was thorough and easy to reach throughout our case. Communication could have been a bit faster at times, but the quality of legal work and attention to detail made up for it. Would work with the firm again.",
        timestamp: "10/22/2022, 2:48 PM",
      },
    ],
    schedule: [
      { day: "Monday",    am: "9:00 AM – 12:00 PM",  pm: "1:00 PM – 5:00 PM" },
      { day: "Tuesday",   am: "9:00 AM – 12:00 PM",  pm: "1:00 PM – 5:00 PM" },
      { day: "Wednesday", am: "9:00 AM – 12:00 PM",  pm: "Not available" },
      { day: "Thursday",  am: "9:00 AM – 12:00 PM",  pm: "1:00 PM – 5:00 PM" },
      { day: "Friday",    am: "9:00 AM – 12:00 PM",  pm: "1:00 PM – 5:00 PM" },
      { day: "Saturday",  am: "Not available",         pm: "Not available" },
      { day: "Sunday",    am: "Not available",         pm: "Not available" },
    ],
  },

  {
    id: "lawyer-2",
    name: "Atty. Kalix Jace Martinez",
    position: "Senior Associate",
    photo: kalixMartinezImg,
    isOnline: false,
    phone: "+63 918 234 5678",
    rating: 4.8,
    isAvailable: false,
    location: "Makati, Metro Manila",
    consultationCount: 85,
    cv: {
      rollNumber: "512301B",
      dateAdmitted: "March 22, 2008",
      ibp: { number: "Metro Manila 2345678", date: "April 10, 2022" },
      mcle: {
        status: "Compliant",
        number: "412312345679",
        dateRange: "January 10, 2022 – March 12, 2022",
      },
      languages: ["Filipino", "English", "Ilocano"],
      workExperience: [
        {
          firm: "Cruz & Santos Law Offices",
          role: "Senior Associate",
          address: "28th Floor, One San Miguel Avenue, Ortigas, Pasig City",
        },
      ],
      education: [
        {
          institution: "Ateneo de Manila University",
          degree: "AB Political Science",
          date: "March 28, 2000",
        },
        {
          institution: "Ateneo de Manila University School of Law",
          degree: "Juris Doctor",
          date: "April 15, 2004",
        },
      ],
      locationOfPractice: ["Nationwide", "Luzon wide"],
      concentration: [
        "Corporate law",
        "Commercial law",
        "Labor law",
      ],
      casesHandled: [
        "Corporate mergers and acquisitions",
        "Illegal dismissal cases",
        "Contract disputes",
      ],
    },
    reviews: [
      {
        id: "r2-1",
        reviewer: "Ms. Santos",
        rating: 5.0,
        text: "Atty. Martinez is extremely knowledgeable in corporate law. He handled our company restructuring with great professionalism and efficiency.",
        timestamp: "11/05/2022, 10:15 AM",
      },
      {
        id: "r2-2",
        reviewer: "Mr. Reyes",
        rating: 4.5,
        text: "Very professional and responsive. He explained everything clearly and the outcome was favorable. Highly recommended.",
        timestamp: "11/10/2022, 3:30 PM",
      },
    ],
    schedule: [
      { day: "Monday",    am: "8:00 AM – 12:00 PM",  pm: "Not available" },
      { day: "Tuesday",   am: "8:00 AM – 12:00 PM",  pm: "2:00 PM – 6:00 PM" },
      { day: "Wednesday", am: "8:00 AM – 12:00 PM",  pm: "2:00 PM – 6:00 PM" },
      { day: "Thursday",  am: "Not available",         pm: "2:00 PM – 6:00 PM" },
      { day: "Friday",    am: "8:00 AM – 12:00 PM",  pm: "2:00 PM – 6:00 PM" },
      { day: "Saturday",  am: "Not available",         pm: "Not available" },
      { day: "Sunday",    am: "Not available",         pm: "Not available" },
    ],
  },

  {
    id: "lawyer-3",
    name: "Atty. Louisse V. Martinez",
    position: "Associate Lawyer",
    photo: louisseMartinezImg,
    isOnline: true,
    phone: "+63 919 345 6789",
    rating: 4.9,
    isAvailable: true,
    location: "Quezon City, Metro Manila",
    consultationCount: 72,
    cv: {
      rollNumber: "623456C",
      dateAdmitted: "May 10, 2012",
      ibp: { number: "Quezon City 3456789", date: "June 5, 2022" },
      mcle: {
        status: "Compliant",
        number: "512345678901",
        dateRange: "February 1, 2022 – April 30, 2022",
      },
      languages: ["Filipino", "English", "Cebuano"],
      workExperience: [
        {
          firm: "Rizal Law Office",
          role: "Associate Lawyer",
          address: "Unit 608, 6th Floor, AIC Burgundy Empire Tower, ADB Avenue, Ortigas",
        },
      ],
      education: [
        {
          institution: "University of the Philippines",
          degree: "AB Communication",
          date: "April 10, 2006",
        },
        {
          institution: "University of the Philippines College of Law",
          degree: "Juris Doctor",
          date: "April 20, 2010",
        },
      ],
      locationOfPractice: ["Nationwide", "Luzon wide", "Visayas wide"],
      concentration: [
        "Family law",
        "Civil law",
        "Immigration law",
      ],
      casesHandled: [
        "Annulment of marriage",
        "Child custody disputes",
        "Immigration petitions",
      ],
    },
    reviews: [
      {
        id: "r3-1",
        reviewer: "Mrs. Garcia",
        rating: 5.0,
        text: "Atty. Martinez handled my annulment case with utmost care and professionalism. She kept me informed every step of the way.",
        timestamp: "09/14/2022, 11:00 AM",
      },
      {
        id: "r3-2",
        reviewer: "Mr. Flores",
        rating: 4.8,
        text: "Very compassionate and thorough. She understood the complexity of our family situation and guided us expertly.",
        timestamp: "09/20/2022, 2:00 PM",
      },
    ],
    schedule: [
      { day: "Monday",    am: "9:00 AM – 12:00 PM",  pm: "1:00 PM – 5:00 PM" },
      { day: "Tuesday",   am: "9:00 AM – 12:00 PM",  pm: "1:00 PM – 5:00 PM" },
      { day: "Wednesday", am: "9:00 AM – 12:00 PM",  pm: "1:00 PM – 5:00 PM" },
      { day: "Thursday",  am: "9:00 AM – 12:00 PM",  pm: "1:00 PM – 5:00 PM" },
      { day: "Friday",    am: "9:00 AM – 12:00 PM",  pm: "Not available" },
      { day: "Saturday",  am: "10:00 AM – 12:00 PM", pm: "Not available" },
      { day: "Sunday",    am: "Not available",         pm: "Not available" },
    ],
  },

  {
    id: "lawyer-4",
    name: "Atty. Ramon B. Dela Cruz",
    position: "Junior Associate",
    photo: annaBermudezImg,
    isOnline: true,
    phone: "+63 920 456 7890",
    rating: 4.5,
    isAvailable: true,
    location: "Mandaluyong, Metro Manila",
    consultationCount: 45,
    cv: {
      rollNumber: "734567D",
      dateAdmitted: "July 8, 2018",
      ibp: { number: "Mandaluyong 4567890", date: "August 15, 2022" },
      mcle: {
        status: "Compliant",
        number: "612456789012",
        dateRange: "March 1, 2022 – May 31, 2022",
      },
      languages: ["Filipino", "English"],
      workExperience: [
        {
          firm: "Rizal Law Office",
          role: "Junior Associate",
          address: "Unit 608, 6th Floor, AIC Burgundy Empire Tower, ADB Avenue, Ortigas",
        },
      ],
      education: [
        {
          institution: "De La Salle University",
          degree: "AB Legal Management",
          date: "May 5, 2012",
        },
        {
          institution: "San Beda College of Law",
          degree: "Juris Doctor",
          date: "April 24, 2016",
        },
      ],
      locationOfPractice: ["Luzon wide"],
      concentration: [
        "Criminal law",
        "Civil law",
      ],
      casesHandled: [
        "Criminal defense",
        "Property disputes",
        "Contract drafting",
      ],
    },
    reviews: [
      {
        id: "r4-1",
        reviewer: "Ms. Lim",
        rating: 4.5,
        text: "Very diligent and hardworking. Atty. Dela Cruz researched our case extensively and presented a solid defense.",
        timestamp: "08/30/2022, 9:45 AM",
      },
      {
        id: "r4-2",
        reviewer: "Mr. Tan",
        rating: 4.5,
        text: "Good communication and very accessible. Would definitely hire again for future legal matters.",
        timestamp: "09/05/2022, 1:30 PM",
      },
    ],
    schedule: [
      { day: "Monday",    am: "9:00 AM – 12:00 PM",  pm: "1:00 PM – 5:00 PM" },
      { day: "Tuesday",   am: "Not available",         pm: "1:00 PM – 5:00 PM" },
      { day: "Wednesday", am: "9:00 AM – 12:00 PM",  pm: "1:00 PM – 5:00 PM" },
      { day: "Thursday",  am: "9:00 AM – 12:00 PM",  pm: "1:00 PM – 5:00 PM" },
      { day: "Friday",    am: "9:00 AM – 12:00 PM",  pm: "Not available" },
      { day: "Saturday",  am: "Not available",         pm: "Not available" },
      { day: "Sunday",    am: "Not available",         pm: "Not available" },
    ],
  },

  {
    id: "lawyer-5",
    name: "Atty. Maria Grace Santos",
    position: "Senior Partner",
    photo: louisseMartinezImg,
    isOnline: false,
    phone: "+63 921 567 8901",
    rating: 4.7,
    isAvailable: false,
    location: "Taguig, Metro Manila",
    consultationCount: 130,
    cv: {
      rollNumber: "845678E",
      dateAdmitted: "February 14, 2000",
      ibp: { number: "Taguig 5678901", date: "March 20, 2022" },
      mcle: {
        status: "Compliant",
        number: "712567890123",
        dateRange: "April 5, 2022 – June 30, 2022",
      },
      languages: ["Filipino", "English", "Spanish"],
      workExperience: [
        {
          firm: "Rizal Law Office",
          role: "Senior Partner",
          address: "Unit 608, 6th Floor, AIC Burgundy Empire Tower, ADB Avenue, Ortigas",
        },
        {
          firm: "Global Legal Partners",
          role: "Associate",
          address: "15th Floor, Philamlife Tower, Paseo de Roxas, Makati City",
        },
      ],
      education: [
        {
          institution: "University of Santo Tomas",
          degree: "AB Political Science",
          date: "March 25, 1994",
        },
        {
          institution: "University of Santo Tomas Faculty of Civil Law",
          degree: "Juris Doctor",
          date: "April 2, 1998",
        },
      ],
      locationOfPractice: ["Nationwide", "Luzon wide", "Visayas wide", "Mindanao wide"],
      concentration: [
        "Taxation law",
        "Corporate law",
        "Commercial law",
        "Banking law",
      ],
      casesHandled: [
        "Tax compliance and planning",
        "Corporate acquisitions",
        "Securities regulation",
      ],
    },
    reviews: [
      {
        id: "r5-1",
        reviewer: "Mr. Aguilar",
        rating: 5.0,
        text: "Atty. Santos is the best tax lawyer I have worked with. Her knowledge of tax law is unparalleled and she saved our company millions.",
        timestamp: "07/18/2022, 4:00 PM",
      },
      {
        id: "r5-2",
        reviewer: "Ms. Villanueva",
        rating: 4.5,
        text: "Extremely competent and professional. She represented us in a complex corporate acquisition and the deal closed smoothly.",
        timestamp: "08/02/2022, 10:30 AM",
      },
    ],
    schedule: [
      { day: "Monday",    am: "8:00 AM – 11:00 AM",  pm: "2:00 PM – 5:00 PM" },
      { day: "Tuesday",   am: "8:00 AM – 11:00 AM",  pm: "2:00 PM – 5:00 PM" },
      { day: "Wednesday", am: "Not available",         pm: "Not available" },
      { day: "Thursday",  am: "8:00 AM – 11:00 AM",  pm: "2:00 PM – 5:00 PM" },
      { day: "Friday",    am: "8:00 AM – 11:00 AM",  pm: "Not available" },
      { day: "Saturday",  am: "Not available",         pm: "Not available" },
      { day: "Sunday",    am: "Not available",         pm: "Not available" },
    ],
  },

  {
    id: "lawyer-6",
    name: "Atty. Jose Miguel Reyes",
    position: "Associate Lawyer",
    photo: kalixMartinezImg,
    isOnline: true,
    phone: "+63 922 678 9012",
    rating: 4.6,
    isAvailable: false,
    location: "San Juan, Metro Manila",
    consultationCount: 60,
    cv: {
      rollNumber: "956789F",
      dateAdmitted: "September 5, 2014",
      ibp: { number: "San Juan 6789012", date: "October 10, 2022" },
      mcle: {
        status: "Compliant",
        number: "812678901234",
        dateRange: "May 3, 2022 – July 28, 2022",
      },
      languages: ["Filipino", "English", "Mandarin"],
      workExperience: [
        {
          firm: "Reyes & Partners Law Firm",
          role: "Associate",
          address: "Suite 500, Robinsons Equitable Tower, ADB Avenue, Ortigas Center",
        },
      ],
      education: [
        {
          institution: "Far Eastern University",
          degree: "AB Economics",
          date: "April 14, 2008",
        },
        {
          institution: "Far Eastern University Institute of Law",
          degree: "Juris Doctor",
          date: "April 30, 2012",
        },
      ],
      locationOfPractice: ["Luzon wide", "Visayas wide"],
      concentration: [
        "Immigration law",
        "Labor law",
        "Civil law",
      ],
      casesHandled: [
        "Visa applications",
        "Labor disputes",
        "Damages claims",
      ],
    },
    reviews: [
      {
        id: "r6-1",
        reviewer: "Mr. Chen",
        rating: 4.5,
        text: "Atty. Reyes helped our foreign employees obtain their work visas efficiently. The process was smooth and well-managed.",
        timestamp: "06/25/2022, 3:15 PM",
      },
      {
        id: "r6-2",
        reviewer: "Ms. Nakamura",
        rating: 4.8,
        text: "Very knowledgeable in immigration matters. He guided us through the process and was always available to answer questions.",
        timestamp: "07/01/2022, 11:00 AM",
      },
    ],
    schedule: [
      { day: "Monday",    am: "9:00 AM – 12:00 PM",  pm: "Not available" },
      { day: "Tuesday",   am: "9:00 AM – 12:00 PM",  pm: "1:00 PM – 4:00 PM" },
      { day: "Wednesday", am: "9:00 AM – 12:00 PM",  pm: "1:00 PM – 4:00 PM" },
      { day: "Thursday",  am: "Not available",         pm: "1:00 PM – 4:00 PM" },
      { day: "Friday",    am: "9:00 AM – 12:00 PM",  pm: "1:00 PM – 4:00 PM" },
      { day: "Saturday",  am: "Not available",         pm: "Not available" },
      { day: "Sunday",    am: "Not available",         pm: "Not available" },
    ],
  },

  {
    id: "lawyer-7",
    name: "Atty. Patricia Anne Lim",
    position: "Of Counsel",
    photo: annaBermudezImg,
    isOnline: false,
    phone: "+63 923 789 0123",
    rating: 4.9,
    isAvailable: true,
    location: "Pasig, Metro Manila",
    consultationCount: 95,
    cv: {
      rollNumber: "1067890G",
      dateAdmitted: "April 18, 2003",
      ibp: { number: "Pasig 7890123", date: "May 25, 2022" },
      mcle: {
        status: "Compliant",
        number: "912789012345",
        dateRange: "June 1, 2022 – August 31, 2022",
      },
      languages: ["Filipino", "English", "French"],
      workExperience: [
        {
          firm: "Lim & Associates",
          role: "Founding Partner",
          address: "Suite 700, Hanston Building, F. Ortigas Jr. Road, Pasig City",
        },
      ],
      education: [
        {
          institution: "Miriam College",
          degree: "AB Psychology",
          date: "March 20, 1997",
        },
        {
          institution: "Ateneo de Manila University School of Law",
          degree: "Juris Doctor",
          date: "April 5, 2001",
        },
      ],
      locationOfPractice: ["Nationwide", "Luzon wide"],
      concentration: [
        "Family law",
        "Criminal law",
        "Women's rights law",
      ],
      casesHandled: [
        "Domestic violence cases (VAWC)",
        "Child support enforcement",
        "Adoption proceedings",
      ],
    },
    reviews: [
      {
        id: "r7-1",
        reviewer: "Mrs. Ocampo",
        rating: 5.0,
        text: "Atty. Lim is an exceptional advocate for women's rights. She handled my VAWC case with both compassion and legal expertise.",
        timestamp: "05/12/2022, 9:00 AM",
      },
      {
        id: "r7-2",
        reviewer: "Ms. Pascual",
        rating: 4.8,
        text: "She fought tirelessly for my case and kept me informed throughout. I am very grateful for her dedication.",
        timestamp: "06/08/2022, 2:45 PM",
      },
    ],
    schedule: [
      { day: "Monday",    am: "10:00 AM – 12:00 PM", pm: "2:00 PM – 6:00 PM" },
      { day: "Tuesday",   am: "10:00 AM – 12:00 PM", pm: "2:00 PM – 6:00 PM" },
      { day: "Wednesday", am: "10:00 AM – 12:00 PM", pm: "2:00 PM – 6:00 PM" },
      { day: "Thursday",  am: "Not available",         pm: "2:00 PM – 6:00 PM" },
      { day: "Friday",    am: "10:00 AM – 12:00 PM", pm: "2:00 PM – 6:00 PM" },
      { day: "Saturday",  am: "Not available",         pm: "Not available" },
      { day: "Sunday",    am: "Not available",         pm: "Not available" },
    ],
  },

  {
    id: "lawyer-8",
    name: "Atty. Eduardo P. Villanueva",
    position: "Junior Associate",
    photo: kalixMartinezImg,
    isOnline: true,
    phone: "+63 924 890 1234",
    rating: 4.4,
    isAvailable: true,
    location: "Parañaque, Metro Manila",
    consultationCount: 38,
    cv: {
      rollNumber: "1178901H",
      dateAdmitted: "November 20, 2020",
      ibp: { number: "Parañaque 8901234", date: "December 3, 2022" },
      mcle: {
        status: "Exempt",
        number: "N/A",
        dateRange: "N/A",
      },
      languages: ["Filipino", "English"],
      workExperience: [
        {
          firm: "Rizal Law Office",
          role: "Junior Associate",
          address: "Unit 608, 6th Floor, AIC Burgundy Empire Tower, ADB Avenue, Ortigas",
        },
      ],
      education: [
        {
          institution: "Polytechnic University of the Philippines",
          degree: "AB Political Science",
          date: "March 15, 2016",
        },
        {
          institution: "Manuel L. Quezon University School of Law",
          degree: "Juris Doctor",
          date: "April 21, 2020",
        },
      ],
      locationOfPractice: ["Luzon wide"],
      concentration: [
        "Labor law",
        "Administrative law",
      ],
      casesHandled: [
        "Illegal dismissal",
        "Administrative hearings",
        "NLRC complaints",
      ],
    },
    reviews: [
      {
        id: "r8-1",
        reviewer: "Mr. Bautista",
        rating: 4.5,
        text: "Atty. Villanueva was very thorough in preparing our labor case. He explained the NLRC process clearly and kept us updated.",
        timestamp: "04/18/2022, 10:00 AM",
      },
      {
        id: "r8-2",
        reviewer: "Ms. Cruz",
        rating: 4.3,
        text: "Good work overall. The case took longer than expected but the result was favorable. Would recommend for labor cases.",
        timestamp: "05/20/2022, 3:00 PM",
      },
    ],
    schedule: [
      { day: "Monday",    am: "8:30 AM – 12:00 PM",  pm: "1:00 PM – 5:00 PM" },
      { day: "Tuesday",   am: "8:30 AM – 12:00 PM",  pm: "1:00 PM – 5:00 PM" },
      { day: "Wednesday", am: "Not available",         pm: "1:00 PM – 5:00 PM" },
      { day: "Thursday",  am: "8:30 AM – 12:00 PM",  pm: "1:00 PM – 5:00 PM" },
      { day: "Friday",    am: "8:30 AM – 12:00 PM",  pm: "1:00 PM – 5:00 PM" },
      { day: "Saturday",  am: "Not available",         pm: "Not available" },
      { day: "Sunday",    am: "Not available",         pm: "Not available" },
    ],
  },
];
