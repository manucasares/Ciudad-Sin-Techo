import React from "react";
import { EditArticles } from "./EditArticles";

export const Sidebar = ({ setSidebarShown }) => {
    const handleSidebarShow = () => {
        setSidebarShown(prevState => (prevState ? false : true));
    };

    return (
        <aside className="edit__sidebar">
            <div className="edit__sidebar-navbar d-flex-between">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> Ciudad Sin Techo </span>
                </h3>

                <p
                    className="pointer"
                    // onClick={handleLogout}
                >
                    Logout
                </p>

                <button className="edit__sidebar-arrow" onClick={handleSidebarShow}>
                    <i className="fas fa-arrow-left"></i>
                </button>
            </div>

            <div
                className="edit__new-entry pointer d-flex-center"
                onClick={handleSidebarShow}
                // onClick = { handleNewArticle }
            >
                <i className="far fa-calendar-plus fa-3x "></i>
                <p className="mt-5">Nuevo articulo</p>
            </div>

            <EditArticles handleSidebarShow={handleSidebarShow} />
        </aside>
    );
};
