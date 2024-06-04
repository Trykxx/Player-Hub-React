import "../../assets/css/header.css";
import logo from "../../assets/img/logo-dark.png";
import {
  Bell,
  MessagesSquare,
  ChevronDown,
  Mail,
  CircleUser,
  Search,
} from "lucide-react";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Logo Manette du site" className="h-12" />
      <nav className="flex gap-8 items-center m-auto">
        <a href="" className="flex items-center gap-2 hover:text-myblue group">
          <Bell className="group-hover:stroke-myblue"></Bell>Notifications
        </a>
        <a href="" className="flex items-center gap-2 hover:text-myblue group">
          <MessagesSquare className="group-hover:stroke-myblue"></MessagesSquare>Forums
        </a>
        <a href="" className="flex items-center gap-2 hover:text-myblue group">
          <Mail className="group-hover:stroke-myblue"></Mail>Messages
        </a>
        <a href="" className="flex items-center gap-2 hover:text-myblue group">
          <Search className="group-hover:stroke-myblue"></Search>Recherche
        </a>
      </nav>
      <a href="" className="flex items-center gap-2 pr-10 hover:text-myblue group">
        <CircleUser className=" h-25 group-hover:stroke-myblue"></CircleUser>Profil<ChevronDown className=" h-25 group-hover:stroke-myblue"></ChevronDown>
      </a>
    </header>
  );
}
