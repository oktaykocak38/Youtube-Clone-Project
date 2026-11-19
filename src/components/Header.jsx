import { MdMenu, MdMic, MdApps, MdOutlineAccountCircle } from "react-icons/md";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoIosVideocam } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { useState } from "react";

const Header = ({toggleSidebar}) => {
  // Navigate Kurduk
  const navigate = useNavigate();
  const [searcParams] = useSearchParams();
  const query = searcParams.get("search_query");
  const [text, setText] = useState(query || "");

  // Form Gönderdik
  const handleSubmit = (e) => {
    e.preventDefault();

    // Aratılan mretin yoksa
    const query = text.trim();
    if (!query) return;

    // result sayfasına yönlendir
    navigate(`/results?search_query=${query}`);
  };

  return (
    <div className="sticky top-0 z-50 bg-[#0f0f0f] flex justify-between  gap-6 md:gap-8 px-4 h-14">
      {/* Left */}
      <div className="flex items-center gap-3">
        <button onClick={toggleSidebar} className="p-2 rounded-full hover:bg-gray">
          <MdMenu className="text-xl md:text-2xl" />
        </button>
        <Link to="/" className="flex items-center gap-1">
          <img src="/youtube.png" alt="youtube" className="w-8" />
          <span className="text-xl font-bold tracking-tight max-sm:hidden">
            Youtube
          </span>
        </Link>
      </div>
      {/* Center */}
      <div className="flex-1 max-w-182 flex-center">
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-160 items-center"
        >
          <div className="flex flex-1">
            <input
              type="text"
              placeholder="Ara" value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full bg-[#121212] border border-gray h-10 px-4 text-white  focus:border-blue-600 outline-none rounded-l-full"
            />
            <button
              type="submit"
              className="w-16 h-10 bg-[#222222] border border-gray rounded-r-full flex-center hover:bg-gray"
            >
              <CiSearch className="text-xl" />
            </button>
          </div>
          <button
            type="button"
            className="ml-2 p-2 bg-[#181818] hover:bg-gray rounded-full max-sm:hidden"
          >
            <MdMic />
          </button>
        </form>
      </div>
      {/* Right */}
      <div className="flex items-center gap-2">
        <button className="icon max-sm:hidden">
          <IoIosVideocam />
        </button>
        <button className="icon max-sm:hidden">
          <MdApps />
        </button>

        <button className="icon relative">
          <FaBell />
          <span className="absolute -right-1 -top-1 bg-red-600 size-5 rounded-full text-xs font-bold flex-center">
            3
          </span>
        </button>
        <button className="icon">
          <MdOutlineAccountCircle />
        </button>
      </div>
    </div>
  );
};

export default Header;
