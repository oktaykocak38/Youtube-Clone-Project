import { AiFillHome } from "react-icons/ai";
import {
  MdHistory,
  MdWatchLater,
  MdOutlineWhatshot,
  MdOutlineSportsEsports,
  MdOutlineSettings,
  MdOutlineFlag,
  MdHelpOutline,
  MdOutlineFeedback,
} from "react-icons/md";
import { FaThumbsUp, FaMusic, FaTrophy } from "react-icons/fa";
import { RiPlayListLine } from "react-icons/ri";
import { BiSolidVideos } from "react-icons/bi";
import { PiRadioButtonBold } from "react-icons/pi";
import { BsLightningCharge } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";

export const collapSidebarItem = [
  { icon: <AiFillHome />, name: "Ana Sayfa", path: "/" },
  { icon: <BsLightningCharge />, name: "Shorts", path: "/shorts" },
  { icon: <BiSolidVideos />, name: "Abonelikler", path: "/subscribes" },
  { icon: <FaRegCircleUser />, name: "Siz", path: "/siz" },
];
// Geniş Sider
export const expandedSidebarıtems = [
  {
    title: null,
    items: [
      { icon: <AiFillHome />, name: "Ana Sayfa", path: "/" },
      { icon: <BsLightningCharge />, name: "Shorts", path: "/shorts" },
      { icon: <BiSolidVideos />, name: "Abonelikler", path: "/subscribes" },
    ],
  },
  {
    title: "Siz",
    items: [
      { icon: <MdHistory />, name: "Geçmiş", path: "/history" },
      {
        icon: <RiPlayListLine />,
        name: "Oynatma Listeleri",
        path: "/play-list",
      },
      { icon: <MdWatchLater />, name: "Daha Sonra İzle", path: "/watch-later" },
      { icon: <FaThumbsUp />, name: "Beğendiğim Videolar", path: "/likes" },
    ],
  },
  {
    title: "Keşfet",
    items: [
      { icon: <MdOutlineWhatshot />, name: "Trendler", path: "/category/trendler" },
      { icon: <FaMusic />, name: "Müzik", path: "/category/müzik" },
      { icon: <PiRadioButtonBold />, name: "Canlı", path: "/category/canlı" },
      { icon: <MdOutlineSportsEsports />, name: "Oyun", path: "/category/oyun" },
      { icon: <FaTrophy />, name: "Spor", path: "/category/spor" },
    ],
  },
  {
    title: "Youtube'dan daha fazla",
    items: [
      {
        icon: <BiSolidVideos className="text-red-500" />,
        name: "Youtube Premium",
        path: "/premium",
      },
      {
        icon: <FaMusic className="text-red-500" />,
        name: "Youtube Music",
        path: "/music",
      },
      {
        icon: <BiSolidVideos className="text-red-500" />,
        name: "Youtube Kids",
        path: "/kids",
      },
    ],
  },
  {
    title: null,
    items: [
      {
        icon: <MdOutlineSettings className="text-red-500" />,
        name: "Ayarlar",
        path: "/settings",
      },
      {
        icon: <MdOutlineFlag className="text-red-500" />,
        name: "İçerik Bildirme Geç...",
        path: "/content",
      },
      {
        icon: <MdHelpOutline className="text-red-500" />,
        name: "Yardım",
        path: "/help",
      },
      {
        icon: <MdOutlineFeedback className="text-red-500" />,
        name: "Geri bilirim gönder",
        path: "/feedback",
      },
    ],
  },
];
