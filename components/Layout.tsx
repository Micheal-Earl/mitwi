import { FunctionalComponent, VNode } from "preact";
import Sidebar from "../islands/Sidebar.tsx";
import FollowBar from "../islands/FollowBar.tsx";

interface LayoutProps {
  children: VNode;
}

const Layout: FunctionalComponent<LayoutProps> = ({ children }) => {
  return (
    <div class="h-screen bg-black">
      <div class="container h-full mx-auto xl:px-30 max-w-6xl">
        <div class="grid grid-cols-4 h-full">
          <Sidebar />
          <div class="col-span-3 lg:col-span-2 border-x-[1px] border-gray-400 border-opacity-30">
            {children}
          </div>
          <FollowBar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
