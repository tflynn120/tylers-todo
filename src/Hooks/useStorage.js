// import {useState, useEffect} from 'react';
// import { projectStorage, projectFirestore, timeStamp } from '../Firebase/config';

// const useStorage = (title) => {
//   console.log(title);
//   // const [description, setDescription] = useState(null);
//   const [error, setError] = useState(null);
//   const [url, setUrl] = useState(null);
//   const [progress, setProgress] = useState(null);
   
//   useEffect(() => {
//     const storageReference = projectStorage.ref(title)
//         //references
//         //gives firebase the image name
//     const collectionRef = projectFirestore.collection('todos');

        
//     storageReference.put(title).on('state_changed', (snap) => {
//       let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
//       setProgress(percentage);

//     }, (err) => {
//       setError(err);
//     }, async () => {
//       const url = await storageReference.getDownloadURL();
//       const createdAt = timeStamp();
//       collectionRef.add({ url, createdAt})
//       setUrl(url)
      
//     })
//   },  [title] );

//   return {progress, url, error}
// }

// export default useStorage;