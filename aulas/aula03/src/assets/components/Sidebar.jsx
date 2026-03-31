import logo from "../assets/learn.svg";
import Menu from "./Menu";

function Sidebar() {
    return (
        <aside className="hidden md:block bg-gray-300">
            <header className="flex flex-row">
                <img src="{logo}" alt="image logo"/>
                <h1>Aluno Online</h1>
                
            </header>
            <Menu/>
            </aside>
        );
}

export default Sidebar;