import React from "react";

export const EditArticleNavBar = ({ setSidebarShown, formValues, handleInputChange }) => {

    const handleSave = () => {
        console.log(formValues);
    }

    const handleSidebarShow = () => {
        setSidebarShown(prevState => (prevState ? false : true));
    };

    const {date, author} = formValues;

    return (
        <div className="article-edit__appbar">
            <button className="link arrow" onClick={handleSidebarShow}>
                <i className="fas fa-arrow-left"></i>
            </button>

            <div>
                <input
                    type="date"
                    placeholder="Titulo"
                    className="article-edit__date-input pointer"
                    name='date'
                    value={date}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Autor"
                    className="article-edit__author-input"
                    name='author'
                    value={author}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <button className="link">Picture</button>

                <button     
                    className="link" 
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </div>
    );
};
