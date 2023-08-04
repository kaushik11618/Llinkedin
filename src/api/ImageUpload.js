import { storage } from "../firebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { editProfile } from "./firestoreApi";

export const uploadImage = (file, userID) => {
    const profilePicsRef = ref(storage, `profileImages/${file.name}`);
    const uploadTask = uploadBytesResumable(profilePicsRef, file);
  
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log(progress);
      },
      (error) => {
        console.error(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((response) => {
          editProfile(userID, { imageLink: response }); // Use userID instead of id
        });
      }
    );
  };