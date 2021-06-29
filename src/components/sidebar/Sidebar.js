import React from 'react';


export default function Sidebar() {
    return (
        <div className="col-3 h-100">
            <div className="tile-container__side-menu side-menu h-100">
                <ul className="side-menu__ul">
                    <li className="side-menu-ul__li">
                        <i class="fas fa-icon fa-border-all"/>
                        DASHBOARD
                    </li>
                    <li className="side-menu-ul__li">
                        <i class="fas fa-icon fa-tasks"/>
                        TODOS
                    </li>
                    <li className="side-menu-ul__li">
                        <i class="fas fa-icon fa-users-cog"/>
                        PROJECTS
                    </li>
                    <li className="side-menu-ul__li">
                        <i class="far fa-icon fa-calendar-check"/>
                        CALENDAR
                    </li>
                </ul>
            </div>
        </div>
    )
}
