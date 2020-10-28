import React from "react";

export const EditArticleNavBar = ({setSidebarShown}) => {

    const handleSidebarShow = () => {
        setSidebarShown(prevState => prevState ? false : true);
    }

    return (
        <div className="article-edit__appbar">
            <button className="arrow" onClick={handleSidebarShow}>
                <i class="fas fa-arrow-left"></i>
            </button>

            <div>
                <input
                    type="date"
                    placeholder="Titulo"
                    className="article-edit__date-input pointer"
                />
                <input
                    type="text"
                    placeholder="Autor"
                    className="article-edit__author-input"
                />
            </div>

            <div>
                <button>Picture</button>

                <button onClick={() => setSidebarShown(true)}>Save</button>
            </div>
        </div>
    );
};
