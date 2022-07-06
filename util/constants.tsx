import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon
} from '@chakra-ui/icons';

import { IoHome } from "react-icons/io5";

import { ImGift } from "react-icons/im";

import { FcBusinesswoman, FcHome } from "react-icons/fc"

import { GiHorseHead } from "react-icons/gi"

export const NUMBER_OF_PRODUCTS_PER_PAGE = 6;
export const PRODUCT_CATEGORIES = ["paarden", "stallen", "dekjes"]
export const NEWSBAR_LINES = ["this is 1", "and 2", "3", "and last 4"];
export const DEV_URL = 'http://localhost:8888'
export const PROD_URL = 'https://laurensite.netlify.app'

const dev = process.env.NODE_ENV !== 'production';

export const url = dev ? DEV_URL : PROD_URL;


interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem1>;
  href?: string;
  icon: any
}

interface NavItem1 {
  label: string;
  subLabel?: string;
  href: string;
  icon: any
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Thuis',
    href: "/",
    icon: <FcHome />
  },
  {
    label: 'Mijn winkel',
    icon: <ImGift />,
    children: [
      {
        label: 'Paarden',
        subLabel: 'Alle paarden',
        href: '/winkel/paarden/1',
        icon: <GiHorseHead />
      },
      {
        label: 'Dekjes',
        subLabel: 'Alle dekjes',
        href: '/winkel/dekjes/1',
        icon: <IoHome />
      },
      {
        label: 'pony',
        subLabel: 'Alle sprongen',
        href: '/w/stallen',
        icon: <IoHome />
      },

    ],
  },
  {
    label: 'Over Mij',
    href: "/over-mij",
    icon: <FcBusinesswoman />
  },
];


export const ROUTES = {
  home: { name: "home", route: "/" },
  "over-mij": { name: "over mij", route: "/over-mij" },
  artikelen: { name: "artikelen", route: "/artikelen" },
  projects: { name: "projects", route: "/projects" },
  winkelmand: { name: "winkelmand", route: "/winkelmandje" }
}

export const NAV_ROUTES = [
  { name: "Artikelen", route: "/artikelen" },
  { name: "Projects", route: "/projects" },
  { name: "Over Mij", route: "/over-mij" }
]

export const BACKGROUND_IMAGE = './images/image4.svg'
export const HEADER_IMAGE = './images/headPhoto.jpeg'
export const POSTS_PATH = "./content/posts";
export const PROJECTS_PATH = "./content/projects";
export const GITHUB_LINK = "https://github.com/broodbakker"

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  mobile: "600px",
  tablet: '800px',
  laptop: '1200px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const GLOBALSTYLE = {
  breakpoint: {
    maxMobileS: `(max-width: ${size.mobileS})`,
    maxmobileM: `(max-width: ${size.mobileM})`,
    maxmobileL: `(max-width: ${size.mobileL})`,
    maxmobile: `(max-width: ${size.mobile})`,
    maxtablet: `(max-width: ${size.tablet})`,
    maxlaptop: `(max-width: ${size.laptop})`,
    maxlaptopL: `(max-width: ${size.laptopL})`,
    maxdesktop: `(max-width: ${size.desktop})`,
    maxdesktopL: `(max-width: ${size.desktop})`,
    minMobileS: `(min-width: ${size.mobileS})`,
    minmobileM: `(min-width: ${size.mobileM})`,
    minmobileL: `(min-width: ${size.mobileL})`,
    minmobile: `(min-width: ${size.mobile})`,
    mintablet: `(min-width: ${size.tablet})`,
    minlaptop: `(min-width: ${size.laptop})`,
    minlaptopL: `(min-width: ${size.laptopL})`,
    mindesktop: `(min-width: ${size.desktop})`,
    mindesktopL: `(min-width: ${size.desktop})`
  }
}