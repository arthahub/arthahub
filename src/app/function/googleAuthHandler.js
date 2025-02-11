import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { googleProvider, db, auth } from "@/app/firebase/app";

const googleAuthHandler = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;

        const userRef = doc(db, "users", user.uid);
        await setDoc(userRef, {
            username: user.displayName || "",
            email: user.email || "",
            created_at: serverTimestamp()
        }, { merge: true });

        console.log("User signed up and saved:", user);

    } catch (error) {
        console.log("Google Auth Error:", error.message);
    }
};

export default googleAuthHandler;