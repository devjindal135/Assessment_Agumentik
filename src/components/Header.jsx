import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Header.css"

const Header = () => {
    const menu = [
        {
            title:'Boards',
            image:'https://dapulse-res.cloudinary.com/image/upload/e_…e%20Page%20-%202022%20Rebrand/tabs/board_icon.svg'
        },
        {
            title:'Views',
            image:'https://dapulse-res.cloudinary.com/image/upload/e_…e%20Page%20-%202022%20Rebrand/tabs/views_icon.svg'
        },
        {
            title:'Dashboard',
            image:'https://dapulse-res.cloudinary.com/image/upload/e_…Page%20-%202022%20Rebrand/tabs/dashboard_icon.svg'
        },
        {
            title:'Integrations',
            image:'https://dapulse-res.cloudinary.com/image/upload/e_…e%20-%202022%20Rebrand/tabs/integrations_icon.svg'
        },
        {
            title:'Automations',
            image:'	https://dapulse-res.cloudinary.com/image/upload/e_…ge%20-%202022%20Rebrand/tabs/automations_icon.svg'
        },
        {
            title:'Apps',
            image:'	https://dapulse-res.cloudinary.com/image/upload/e_…me%20Page%20-%202022%20Rebrand/tabs/apps_icon.svg'
        },
        {
            title:'Docks',
            image:'https://dapulse-res.cloudinary.com/image/upload/e_…me%20Page%20-%202022%20Rebrand/tabs/docs_icon.svg'
        },
    ]

  return (
    <div className='monday'>
        <h1>Everything you need for any workflow</h1>
        <p>Easily build your ideal workflow with monday.com building blocks.</p>
        <div className='navigation'>
            {
                menu.map((link)=>{
                    console.log(link.title)
                    return(
                            <NavLink to='/'>
                        <div key={link.title} className='tit'>
                                <img src={link.image}/>
        
                                <p>{link.title}</p>
                         </div>   
                            </NavLink>
                    )
                })
            }
        </div>
        <div className='vid'>
        <video width="750" height="500" loop >
        <source src="https://dapulse-res.cloudinary.com/video/upload/q_auto,f_auto,cs_copy/Generator_featured images/Home Page - 2022 Rebrand/tabs/final-videos-tabs/3_Automations.mp4"/>
     </video>
            <div className='vid-text'>
                <h2>Boards</h2>
                <p>Everything starts with a visual board — the core of monday.com Work OS. Tailor it your way and manage anything from projects to departments.</p>
            </div>
        </div>
    </div>
  )
}

export default Header