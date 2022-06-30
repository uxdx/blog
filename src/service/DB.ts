import { getFirestore, collection, getDocs, Firestore, DocumentData } from 'firebase/firestore/lite';
import app from "./Firebase";

const db:Firestore = getFirestore(app);

async function getPostsAll(){
    const posts = collection(db, 'posts');
    const snapshot = await getDocs(posts);
    const list:DocumentData[] = snapshot.docs.map(doc => doc.data());

    return list
}

export { getPostsAll };