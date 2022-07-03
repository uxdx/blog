import {DocumentData, Timestamp} from 'firebase/firestore/lite';
// Define custom types
interface Post {
    id:string,
    uploadDate:Timestamp,
    title:string
    md:string,

}

function DocumentDataToPost(data:DocumentData):Post{
    return {
        id: data.id,
        uploadDate: data.uploadDate,
        title: data.title,
        md: data.md
    };
}


export type {Post};
export {DocumentDataToPost};