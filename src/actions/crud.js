import Swal from "sweetalert2";
import { db } from "../firebase/firebaseConfig";
import { imgUpload } from "../helper/imgUpload";
import { types } from "../types/types";


// ============= ASINCRONAS ============= //

export const startNewArticle = () => {

    return ( dispatch ) => {

        const newArticle = {
            // GUARDA CON ESTO //
            // id: null,
            title: '',
            date: '',
            author: '',
            subtitle: '',
            body: '',
        };

        dispatch( setActiveArt( newArticle ))
    }
}

export const addNewArticle = ( art ) => {

    // const [...arts, ] = art;

    return ( dispatch ) => {

        db.collection('Articulos').add( art )
            .then( (res) => {
                dispatch( addArticle( art, res.id ) )

                Swal.fire(
                    '',
                    'El artículo ha sido creado exitósamente!',
                    'success'
                )

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
        
        const arts_snap = await db.collection('Articulos').get();

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
                console.log('error xd');
            })
    } 
}

export const startUpdateArticle = ( art ) => {

    return async( dispatch ) => {

        const noteToFirestore = { ...art };
        delete noteToFirestore.id;

        try {
            await db.doc(`Articulos/${art.id}`).update( noteToFirestore );
            
            dispatch( updateArticle(art) );

            Swal.fire(
                '',
                'Los campos se han actualizado correctamente.',
                'success'
            )
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

        const { active,     arts } = getState().crud;

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

        // await dispatch( startUpdateArticle(active) );
        dispatch( updateArticle(arts) )

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
