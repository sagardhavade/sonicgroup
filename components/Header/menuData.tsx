import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 1.1,
    title: "About",
    newTab: false,
    path: "/about",
  },
  {
    id: 5,
    title: "Products",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "HIMS",
        newTab: false,
        path: "https://www.triocorporation.in/",
      },
      {
        id: 34,
        title: "Power Solution",
        newTab: false,
        path: "https://www.sonicdistributors.com/",
      },
      {
        id: 35,
        title: "BizPlusCRM",
        newTab: false,
        path: "https://bizpluscrm.com/index.html",
      },
    ],
  },
  {
    id: 2,
    title: "Features",
    newTab: false,
    path: "/#features",
  },
  // {
  //   id: 2.1,
  //   title: "Blog",
  //   newTab: false,
  //   path: "/blog",
  // },

  // {
  //   id: 2.3,
  //   title: "Docs",
  //   newTab: false,
  //   path: "/docs",
  // },
  {
    id: 2.3,
    title: "FAQ",
    newTab: false,
    path: "/faq",
  },
  // {
  //   id: 3,
  //   title: "Pages",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 31,
  //       title: "Blog Grid",
  //       newTab: false,
  //       path: "/blog",
  //     },
  //     {
  //       id: 34,
  //       title: "Sign In",
  //       newTab: false,
  //       path: "/auth/signin",
  //     },
  //     {
  //       id: 35,
  //       title: "Sign Up",
  //       newTab: false,
  //       path: "/auth/signup",
  //     },
  //     {
  //       id: 35,
  //       title: "Docs",
  //       newTab: false,
  //       path: "/docs",
  //     },
  //     {
  //       id: 35.1,
  //       title: "Support",
  //       newTab: false,
  //       path: "/support",
  //     },
  //     {
  //       id: 36,
  //       title: "404",
  //       newTab: false,
  //       path: "/error",
  //     },
  //   ],
  // },
  {
    id: 3,
    title: "blog",
    newTab: false,
    path: "/blog",
  },
  {
    id: 4,
    title: "Contact",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
