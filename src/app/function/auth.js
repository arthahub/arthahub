import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from '../firebase/app';
import { useRouter } from 'next/navigation';

const registerWithEmail = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

const signInWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      return result.user;
    } catch (error) {
      console.error('Error signing in with Google', error);
      throw error;
    }
};

const logoutHandler = async () => {
    const auth = getAuth();
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Error logging out:", error.message);
    }
};

export {registerWithEmail, signInWithGoogle, logoutHandler,  signInWithEmail};