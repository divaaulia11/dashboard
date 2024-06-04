import {
  
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";


// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Author",
  },
  {
    icon: UilUsersAlt,
    heading: "Book",
  },
  {
    icon: UilPackage,
    heading: 'User'
  },
  {
    icon: UilChart,
    heading: 'Borrow Book'
  },
  {
    icon: UilChart,
    heading: 'Return'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Total User",
    color: {
      backGround: "linear-gradient(180deg, #FFD8E6 0%, #FFCCE5 100%)", 
      backGround: "linear-gradient(180deg, #FFD8E6 0%, #FFCCE5 100%)", 
    },
    barValue: 70,
    value: "2",
    png: UilClipboardAlt,
    series: [
      {
        name: "Total User",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Total Author",
    color: {
      backGround: "linear-gradient(180deg, #D2B48C 0%, #CDB791 100%)",
      backGround: "linear-gradient(180deg, #D2B48C 0%, #CDB791 100%)",
    },
    barValue: 80,
    value: "",
    png: UilClipboardAlt,
    series: [
      {
        name: "Total Author",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Total Books",
    color: {
      backGround: "linear-gradient(180deg, #FFC0CB 0%, #FF69B4 100%)",
      boxShadow: "0px 10px 20px 0px #FFC0CB",
    },
    barValue: 60,
    value: "4",
    png: UilClipboardAlt,
    series: [
      {
        name: "Total Books",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
  {
    title: "Total Borrow Books",
    color: {
      backGround: "linear-gradient(180deg, #F5E1DA 0%, #EEDDD6 100%)",
      boxShadow: "0px 10px 20px 0px #F5E1DA",
    },
    barValue: 60,
    value: "4",
    png: UilClipboardAlt,
    series: [
      {
        name: "Total Borrow Books",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },  
  {
    title: "Total Available Books",
    color: {
      backGround: "linear-gradient(180deg, #FFDAB9 0%, #FFA07A 100%)",
      boxShadow: "0px 10px 20px 0px #FFDAB9",
    },
    barValue: 60,
    value: "1",
    png: UilClipboardAlt,
    series: [
      {
        name: "Total Available Books",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },   
    
];
