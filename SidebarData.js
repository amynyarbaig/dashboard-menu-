import React from 'react'
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import EmailIcon from '@mui/icons-material/Email';
import TaskIcon from '@mui/icons-material/Task';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';


export const SidebarData = [ 
    {
          title: "Home",
          icon: <AddHomeWorkIcon/>,
          link: "/Home",
    
        },
        {
            title: "Mailbox",
            icon: <EmailIcon/>,
            link: "/Mailbox",
      
          },
          {
            title: "TaskList",
            icon: <TaskIcon/>,
            link: "/Task"
      
          },
          {
            title: "setting",
            icon: <SettingsIcon />,
            link: "/setting",
      
          },{
            title: "logout",
            icon: <LogoutIcon />,
            link: "/logout",
      
          }
 
]

