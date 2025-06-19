import PresentationChartBar from "../components/icons/PresentationChartBar";
import Inbox from "../components/icons/Inbox";
import UserCircle from "../components/icons/UserCircle";
import Cog6Tooth from "../components/icons/Cog6Tooth";
import Power from "../components/icons/Power";

export const ICONS = {
  1: { title: "Dashboard", icon: <PresentationChartBar />, href: '/dashboard' },
  2: { title: "Stats", icon: <UserCircle />, href: '/stats' },
  3: { title: "Inbox", icon: <Inbox />, href: '/inbox' },
  5: { title: "Settings", icon: <Cog6Tooth />, href: '/settings' },
  6: { title: "Logout", icon: <Power />, href: '/logout' }
}