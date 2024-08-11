import { Outlet } from "react-router-dom"
import SideMenu from "../components/side-menu"
import '../index.css';
import ThemeSwitch from "../components/theme-switch";


const Root = () => {
    return (
        <div className="relative flex w-full h-screen bg-fs-bg-selected dark:bg-fs-darktheme-bg-dark p-2">
            <div className="absolute bottom-6 right-7"><ThemeSwitch /></div>

            <div className="flex gap-2 p-[2px] bg-white dark:bg-fs-darktheme-bg-dark w-full border-[2px] border-fs-bg-gray dark:border-fs-darktheme-border rounded-2xl overflow-hidden">

                <SideMenu/>
                <main className="scroll-hidden p-10 px-32 overflow-y-auto flex-1 flex flex-col items-start justify-start bg-white dark:bg-fs-darktheme-bg-dark">
                    <Outlet/>
                </main>

            </div>
        </div>
    )
}

export default Root