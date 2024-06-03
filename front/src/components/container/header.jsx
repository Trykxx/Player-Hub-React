import "../../assets/css/header.css";
import logo from "../../assets/img/logo-dark.png";
import { Bell, MessagesSquare, ChevronDown, Mail, CircleUser, Search } from 'lucide-react';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Logo Manette du site" className="h-12"/>
      <nav className="flex gap-8 items-center m-auto">
        <a href="" className="flex items-center gap-2 hover:text-MyBlue"><Bell></Bell>Notifications</a>
        <a href="" className="flex items-center gap-2 hover:text-MyBlue"><MessagesSquare></MessagesSquare>Forums<ChevronDown></ChevronDown></a>
        <a href="" className="flex items-center gap-2 hover:text-MyBlue"><Mail></Mail>Messages</a>
        <a href="" className="flex items-center gap-2 hover:text-MyBlue"><Search></Search>Recherche</a>
      </nav>
        <a href="" className="flex items-center gap-2 hover:text-MyBlue"><CircleUser></CircleUser>Profil</a>
    </header>
  );
}
