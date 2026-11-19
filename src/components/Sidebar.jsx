import { collapSidebarItem, expandedSidebarıtems } from "./../utils/Constants";
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({isSidebarOpen}) => {
  // Küçük Sidebar
  if (!isSidebarOpen)
    return (
      <aside className="w-20 max-md:hidden">
        <div className="py-3">
          {collapSidebarItem.map((item, key) => (
            <Link
              key={key}
              to={item.path}
              className="flex-center flex-col py-4 px-2 mx-2 rounded-lg hover:bg-gray"
            >
              <span className="text-xl mb-2">{item.icon}</span>
              <span className="text-[10px] text-center ">{item.name}</span>
            </Link>
          ))}
        </div>
      </aside>
    );
  // Büyük Sidebar
  return (
    <>
      <div className="w-20 max-md:hidden">
        <aside className="w-60 fixed z-20 bg-black overflow-y-auto h-[calc(100vh-56px)] shadow-xl slide-in">
          <div className="py-3">
            {expandedSidebarıtems.map((category, key) => (
              <div key={key} className="border-b border-gray py-4 px-3">
                {category.title && (
                  <h2 className="font-semibold mb-2">{category.title}</h2>
                )}
                <div>
                  {category.items.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      className="flex gap-4 items-center p-2 rounded-lg hover:bg-[#363636]"
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className="whitespace-nowrap">{item.name}</span>
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
