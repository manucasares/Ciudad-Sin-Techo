import React from "react";
import { useSelector } from "react-redux";

import { EditArticleScreen } from "./EditArticleScreen";
import { NothingSelected } from "./NothingSelected";
import { Sidebar } from "./Sidebar";



export const EditScreen = () => {

    const { active } = useSelector( state => state.crud );
    const sidebarState = useSelector( state => state.ui );


    return (
        <div
            className={
                sidebarState ? "d-flex-between" : "edit__active d-flex-between"
            }
        >
            <Sidebar />

            <main className="edit__main">
                {
                    (active)
                        ? <EditArticleScreen  />
                        : <NothingSelected  />
                }
            </main>
        </div>
    );
};
