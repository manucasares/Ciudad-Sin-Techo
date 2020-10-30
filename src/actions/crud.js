import Swal from "sweetalert2";
import { db } from "../firebase/firebaseConfig";
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


    
// export const startUploadArticle = () => {

//     return async( dispatch) => {

//         const coleccion = await db.collection('Articulos')
//         console.log(coleccion);
//     }
// }


// ============= SINCRONAS ============= //

export const addArticle = ( art, id ) => ({
    type: types.crudAddNewArt,
    payload: {
        ...art,
        id
    }
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

// export const changeArticle = ( id ) => ({
//     type: types.crudUpdateArt,
//     payload: id
// })

