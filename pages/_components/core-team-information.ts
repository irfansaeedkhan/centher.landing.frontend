import { Instagram, LinkedIn, Twitter2 } from "@/components/svgCollection";

export const coreTeam: CoreTeam = [
  {
    name: "Denise Micaela Spinelli",
    role: "Chief Executive Officer",
    profile_picture: "/images/denise-micaela.jpg",
    social_media: "INSTAGRAM",
    social_media_link: "https://instagram.com/denisemicaelaspinelli",
    social_media_icon: Instagram,
    properties: [
      {
        property: "Great experience in the world of Entertainment",
      },
      {
        property: "Best-selling author",
      },
      {
        property: "Founder of Imology: the Science of Personality Development",
      },
      {
        property: "Serial investor in both Europe and the UAE",
      },
      {
        property: "Doctor of Psychological Science and Techniques",
      },
    ],
  },
  {
    name: "Ricky Ammendola",
    role: "Chief Technology Officer",
    profile_picture: "/images/ricky.jpg",
    social_media: "TWITTER",
    social_media_link: "https://twitter.com/rickyammendola",
    social_media_icon: Twitter2,
    properties: [
      {
        property:
          "Head of the Technology Department for the development of CENTHER&apos;s decentralized infrastructure",
      },
      {
        property: "Architect on Blockchain-based businesses",
      },
      {
        property:
          "Owner ALGO ALLIANCE FZCO, (Best Company for Smart Contract Security Audit in UAE)",
      },
    ],
  },
  {
    name: "Angelo Ciavarella",
    role: "Chief Financial Officer",
    profile_picture: "/images/angelo-ciavarella.png",
    social_media: "INSTAGRAM",
    social_media_link: "https://instagram.com/angelohitman76",
    social_media_icon: Instagram,
    properties: [
      {
        property: "University of Greenwich Professor",
      },
      {
        property:
          "Degree to The Johns Hopkins University - Paul H. Nitze School of Advanced International Studies (SAIS) (Washington)",
      },
      {
        property: "Bologna University Law degree",
      },
    ],
  },
  {
    name: "Andrea Agostinone",
    role: "Chief Risk Officer",
    profile_picture: "/images/andrea-agostinone.png",
    social_media: "INSTAGRAM",
    social_media_link: "https://instagram.com/irockmind",
    social_media_icon: Instagram,
    properties: [
      {
        property:
          "Degree with honors in Economics from Bocconi University of Milan",
      },
      {
        property: "Entrepreneur in the financial sector",
      },
      {
        property: "Il Sole 24 Ore Journalist",
      },
      {
        property: "INBANK As Founder",
      },
    ],
  },
  {
    name: "Roberto Re",
    role: "Chief Communication Officer",
    profile_picture: "/images/roberto-re.png",
    social_media: "INSTAGRAM",
    social_media_link: "https://instagram.com/robertorehrd",
    social_media_icon: Instagram,
    properties: [
      {
        property: "Entrepreneur",
      },
      {
        property: "Managerial and Behavioral Trainer",
      },
      {
        property: "Expert in Effective Communication",
      },
    ],
  },
  {
    name: "Paola Saulino",
    role: "Chief Community Officer",
    profile_picture: "/images/paola-saulino.jpg",
    social_media: "INSTAGRAM",
    social_media_link: "https://instagram.com/paolinasaulino",
    social_media_icon: Instagram,
    properties: [
      {
        property: "Entrepreneur 3.0",
      },
      {
        property: "Female Empowerment",
      },
      {
        property: "Centher Performer",
      },
      {
        property: "Communication Leader",
      },
      {
        property: "New Tech Inspiring and Promoter",
      },
    ],
  },
  {
    name: "Minh Nguyen",
    role: "Chief Strategy Officer",
    profile_picture: "/images/minh-nguyen.JPG",
    social_media: "LINKEDIN",
    social_media_link: "https://www.linkedin.com/in/minhnvh/",
    social_media_icon: LinkedIn,
    properties: [
      {
        property: "Business developer of Centher in the APAC Region",
      },
      {
        property: "Chief Strategy Officer - Twenty Two",
      },
      {
        property: "ex-Chief Operations Officer - Ftribe Games",
      },
      {
        property: "Partner - Envato Self-employed",
      },
    ],
  },
];

type CoreTeam = {
  name: string;
  role: string;
  profile_picture: string;
  social_media: string;
  social_media_link: string;
  social_media_icon: React.FC<React.SVGProps<SVGSVGElement>>;
  properties: {
    property: string;
  }[];
}[];
