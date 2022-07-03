import { getFirestore, collection, getDocs, Firestore, DocumentData, query, where, orderBy, limit } from 'firebase/firestore/lite';
import { getStorage, ref, getDownloadURL  } from "firebase/storage";
import { DocumentDataToPost, Post } from '../type';
import app from "./Firebase";

// FireStore
const db:Firestore = getFirestore(app);
const posts = collection(db, 'posts');
// Storage
const storage = getStorage(app);

async function getPostsAll(){
    const snapshot = await getDocs(posts);
    const list:DocumentData[] = snapshot.docs.map(doc => doc.data());

    return list
}

async function getRecentPosts(max:number):Promise<Post[]>{
    const q = query(posts, orderBy('uploadDate', "desc"), limit(max));
    const snapshot = await getDocs(q);
    const list:Post[] = snapshot.docs.map(doc => DocumentDataToPost(doc.data()));

    return list
}

async function getPostById(id:string):Promise<Post>{
    const q = query(posts, where("id","==",id));
    const snapshot = await getDocs(q);
    const data:DocumentData = snapshot.docs.map(doc => doc.data())[0];

    return DocumentDataToPost(data);
}

async function getImage(path:string) {
    const url = await getDownloadURL(ref(getStorage(), path));

    return url;
}



export { getPostsAll, getImage, getRecentPosts, getPostById };