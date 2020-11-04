import Swal from "sweetalert2";
import { db } from "../firebase/firebaseConfig";
import { imgUpload } from "../helper/imgUpload";
import { types } from "../types/types";
import { showSidebar } from "./ui";


// ============= ASINCRONAS ============= //

export const startNewArticle = () => {

    return ( dispatch ) => {

        const date = new Date();

        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDay() + 1;

        if ( month < 10 ) {
            month = '0' + month;
        }

        if ( day < 10 ) {
            day = '0' + day;
        }
        

        const newArticle = {
            title: '',
            date: `${year}-${month}-${day}`,
            author: '',
            subtitle: '',
            body: [],
            // timestamp: 
        };

        dispatch( setActiveArt( newArticle ))
    }
}


export const addNewArticle = ( art ) => {

    art.timeStamp = new Date().getTime();

    return ( dispatch ) => {

        db.collection('Articulos').add( art )
            .then( (res) => {
                
                Swal.fire({
                    text:  'El artículo ha sido creado exitósamente!',
                    icon: "success",
                    allowOutsideClick: false,
                    showConfirmButton: true,
                }).then( () => {
                    
                    dispatch( addArticle( art, res.id ) )
                    dispatch( showSidebar() );
                })

            })
            .catch( () => {

                Swal.fire(
                    '',
                    'Hubo un error al crear el artículo.',
                    'error'
                )

            })
    }
}

export const startLoadingArticles = () => {
    
    return async( dispatch ) => {

        const arts = [];
        
        const arts_snap = await db.collection('Articulos').orderBy("timeStamp", "desc").get();

        arts_snap.forEach( art => {
            arts.push({id: art.id, ...art.data()})
        })
        

        dispatch(
            loadArts(arts)
        )
    }  
}

export const startDeletingArt = ( id ) => {

    return ( dispatch, getState ) => {
        
        const { arts } = getState().crud;

        const arts_left = arts.filter( art => art.id !== id );

        db.collection('Articulos').doc(id).delete()
            .then( () => {

                dispatch( deleteArt(arts_left) );

            })
            .catch( () => {
                Swal.fire(
                    '',
                    'Hubo un error al eliminar este artículo. Posiblemente se deba a su conexión a internet, inténtelo más tarde.',
                    'error'
                )
            })
    } 
}

export const startUpdateArticle = ( art ) => {

    return async( dispatch ) => {

        const noteToFirestore = { ...art };
        delete noteToFirestore.id;

        try {
            await db.doc(`Articulos/${art.id}`).update( noteToFirestore );
            

            Swal.fire({
                text:  'Los campos se han actualizado correctamente.',
                icon: "success",
                allowOutsideClick: false,
                showConfirmButton: true,
            }).then( () => {
                dispatch( updateArticle(art) );
                dispatch( showSidebar() );
            })
        } catch {
            Swal.fire(
                '',
                'Ha ocurrido un error. Inténtelo más tarde.',
                'error'
            )
        }           
    }
}

export const startUploadImg = ( img ) => {

    return async( dispatch, getState ) => {

        const { active } = getState().crud;

        Swal.fire({
            title: 'Subiendo imagen...',
            text: 'Por favor espere...',
            allowOutsideClick: false,
            willOpen : () => {
                Swal.showLoading();
            }
        })

        const url = await imgUpload( img );

        active.url = url;

        dispatch( setActiveArt(active) );

        Swal.close();
    }
}


// ============= SINCRONAS ============= //

export const addArticle = ( art, id ) => ({

    type: types.crudAddNewArt,
    payload: {
        ...art,
        id
    }
})

export const updateArticle = ( art ) => ({
    type: types.crudUpdateArt,
    payload: art
})

export const setActiveArt = ( art ) => ({
    type: types.crudActiveArt,
    payload: art
})

export const loadArts = ( arts ) => ({
    type: types.crudLoadArts,
    payload: arts
})

export const deleteArt = ( arts ) => ({
    type: types.crudDelete,
    payload: arts
})
