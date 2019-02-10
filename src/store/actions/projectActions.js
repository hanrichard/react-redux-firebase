export const createProject = project => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore =  getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstname: 'test ruc',
            authorLastname: 'han',
            authorId: 1234,
            createdAt: new Date()
        }).then(()=>(dispatch({
            type: 'CREATE_PROJECT',
            project
            }) 
        )).catch((err)=>{
            dispatch({
                type: 'CCREATE_PROJECT_ERROR', err
            })
        })
         
    }
}