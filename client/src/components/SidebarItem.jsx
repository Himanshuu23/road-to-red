import { Chip, ListItem, ListItemPrefix, ListItemSuffix } from "@material-tailwind/react"
import { ICONS } from "../data/icons.jsx"
import { Link } from 'react-router-dom'

export default function SidebarItems() {
    return (
        <>
            {Object.entries(ICONS).map(([id, item]) => (
                <Link to={item.href}>
                    <ListItem>
                        <ListItemPrefix>
                            {item.icon}
                        </ListItemPrefix>
                        {item.title}
                        {id == 3 && <ListItemSuffix>
                            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                        </ListItemSuffix>}
                    </ListItem>
                </Link>
            ))}
        </>
    )
}