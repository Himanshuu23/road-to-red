import {
  Card,
  Typography,
  List,
} from "@material-tailwind/react";
import SidebarItems from "./SidebarItem";
 
export default function Sidebar() {
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <List>
        <SidebarItems />
      </List>
    </Card>
  );
}