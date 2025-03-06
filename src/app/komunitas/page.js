'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MainLayout } from "../components/layout/MainLayout";
import { faBank, faChartBar, faChartLine, faCoins, faDollar, faHandPaper, faMoneyBill, faPaperclip, faPaperPlane, faPlane } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase/app";
import { useRouter } from "next/navigation";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";

const Komunitas = () => {
    const { push } = useRouter();

    const [ currentUser, setCurrentUser ] = useState(null);
    const [community, setCommunity] = useState(null);
    const [messages, setMessages] = useState([]);
    const [messageInputValue, setMessageInputValue] = useState('');

    const [isCheckingAuth, setIsCheckingAuth] = useState(true);
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setIsCheckingAuth(false);
        });

        return () => unsubscribe(); 
    }, []);

    useEffect(() => {
        if (!isCheckingAuth && !currentUser) {
            push("/masuk");
        }
    }, [currentUser, isCheckingAuth, push]); 

    useEffect(() => {
        if (!community) return;
    
        const q = query(collection(db, "komunitas", community, "messages"), orderBy("timestamp", "asc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
          setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });
    
        return () => unsubscribe();
    }, [community]);

    const sendMessage = async () => {
        if (!messageInputValue.trim()) return;
        await addDoc(collection(db, "komunitas", community, "messages"), {
          username: currentUser.displayName,
          user_uid: currentUser.uid,
          text: messageInputValue,
          timestamp: serverTimestamp()
        });
        setMessageInputValue("");
    };

    return (
        <>
            {
                !isCheckingAuth && currentUser ?
                    <MainLayout>
                        <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[40vw] border rounded bg-white mt-2 lg:mt-10">
                            <div className="col-span-1 lg:col-span-2 h-full border-r overflow-y-auto min-h-[45rem]">
                                {/* heading */}
                                <div className="w-full h-[8%] bg-white border-b flex items-center">
                                    {
                                        community &&  
                                        <div className="h-full flex space-x-2 items-center p-3 px-4">
                                            <div className="w-12 h-full bg-neutral-50 border rounded-lg grid place-content-center">
                                                <div className="w-7 h-7 rounde-full bg-slate-600 rounded"></div>
                                            </div>
                                            <div>
                                                <h1 className="text-sm font-medium">{community}</h1>
                                                <p className="text-xs text-neutral-700">
                                                    Selalu patuhi panduan komunitas
                                                </p>
                                            </div>
                                        </div>
                                    }
                                </div>
                                {/* content */}
                                <div className="w-full h-[80%] bg-neutral-50 overflow-y-auto p-5">
                                    {community && (
                                        <div className="space-y-3">
                                            {messages.map((message, index) => (
                                                message.user_uid === currentUser?.uid ? (
                                                    <div key={index} className="max-w-[52%] p-3 flex flex-col bg-orange-50 border rounded-md ml-auto" id="my-message">
                                                        <h1 className="text-sm font-medium">{message.username || "Saya"}</h1>
                                                        <div className="text-xs text-neutral-500 mt-1" dangerouslySetInnerHTML={{ __html: message.text }}></div>
                                                    </div>
                                                ) : (
                                                    <div key={index} className="max-w-[52%] p-3 flex flex-col bg-white border rounded-md" id="another-user-message">
                                                        <h1 className="text-sm font-medium">{message.username || "User"}</h1>
                                                        <p className="text-xs text-neutral-500 mt-1">
                                                            {message.text}
                                                        </p>
                                                    </div>
                                                )
                                            ))}
                                        </div>
                                    )}
                                </div>
                                {/* input message */}
                                {
                                    community &&
                                    <div className="w-full h-[12%] flex items-center justify-between p-5 border-t" id="input-container">
                                        <textarea 
                                            className="w-[80%] md:w-[92%] min-h-10 border rounded-md bg-neutral-50 p-2"
                                            placeholder="Ketikan sesuatu"
                                            onChange={(e) => setMessageInputValue(e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter" && !e.shiftKey) {
                                                    e.preventDefault(); 
                                                    setMessageInputValue(prev => prev + "\n");
                                                }
                                            }}
                                            value={messageInputValue}
                                            id="input-message"
                                        ></textarea>
                                        <button className="w-10 h-10 bg-main-theme-1 text-white rounded-lg" id="input-button" onClick={() => sendMessage()}>
                                            <FontAwesomeIcon icon={faPaperPlane}/>
                                        </button>
                                    </div>
                                }
                            </div>
                            <div className="col-span-1 h-full bg-slate-100 p-4 space-y-2">
                                <button className={`text-left w-full h-16 rounded-lg flex space-x-2 items-center border p-2 ${community == 'ekonomi' ? 'bg-orange-50' : 'bg-white' }`} onClick={() => setCommunity('ekonomi')}>
                                    <div className="w-12 h-full bg-neutral-50 border rounded-lg grid place-content-center">
                                        <FontAwesomeIcon icon={faMoneyBill} className="text-green-700"/>
                                    </div>
                                    <div>
                                        <h1 className="text-sm font-medium">Ekonomi</h1>
                                        <p className="text-xs text-neutral-700">
                                            Membahas tentang ekonomi negara-negara
                                        </p>
                                    </div>
                                </button>
                                <button className={`text-left w-full h-16 rounded-lg flex space-x-2 items-center border p-2 ${community == 'saham' ? 'bg-orange-50' : 'bg-white' }`} onClick={() => setCommunity('saham')}>
                                    <div className="w-12 h-full bg-neutral-50 border rounded-lg grid place-content-center">
                                        <FontAwesomeIcon icon={faNewspaper} className="text-cyan-500"/>
                                    </div>
                                    <div>
                                        <h1 className="text-sm font-medium">Saham</h1>
                                        <p className="text-xs text-neutral-700">
                                            Membahas semua hal tentang saham
                                        </p>
                                    </div>
                                </button>
                                <button className={`text-left w-full h-16 rounded-lg flex space-x-2 items-center border p-2 ${community == 'crypto' ? 'bg-orange-50' : 'bg-white' }`} onClick={() => setCommunity('crypto')}>
                                    <div className="w-12 h-full bg-neutral-50 border rounded-lg grid place-content-center">
                                        <FontAwesomeIcon icon={faCoins} className="text-orange-500"/>
                                    </div>
                                    <div>
                                        <h1 className="text-sm font-medium">Crypto</h1>
                                        <p className="text-xs text-neutral-700">
                                            Membahas semua hal tentang Crypto
                                        </p>
                                    </div>
                                </button>
                                <button className={`text-left w-full h-16 rounded-lg flex space-x-2 items-center border p-2 ${community == 'forex' ? 'bg-orange-50' : 'bg-white' }`} onClick={() => setCommunity('forex')}>
                                    <div className="w-12 h-full bg-neutral-50 border rounded-lg grid place-content-center">
                                        <FontAwesomeIcon icon={faDollar} className="text-cyan-500"/>
                                    </div>
                                    <div>
                                        <h1 className="text-sm font-medium">Forex</h1>
                                        <p className="text-xs text-neutral-700">
                                            Membahas semua hal tentang Forex
                                        </p>
                                    </div>
                                </button>
                                <button className={`text-left w-full h-16 rounded-lg flex space-x-2 items-center border p-2 ${community == 'ihsg' ? 'bg-orange-50' : 'bg-white' }`} onClick={() => setCommunity('ihsg')}>
                                    <div className="w-12 h-full bg-neutral-50 border rounded-lg grid place-content-center">
                                        <FontAwesomeIcon icon={faNewspaper} className="text-cyan-500"/>
                                    </div>
                                    <div>
                                        <h1 className="text-sm font-medium">IHSG</h1>
                                        <p className="text-xs text-neutral-700">
                                            Membahas semua hal tentang IHSG
                                        </p>
                                    </div>
                                </button>
                                <button className={`text-left w-full h-16 rounded-lg flex space-x-2 items-center border p-2 ${community == 'logam' ? 'bg-orange-50' : 'bg-white' }`} onClick={() => setCommunity('logam')}>
                                    <div className="w-12 h-full bg-neutral-50 border rounded-lg grid place-content-center">
                                        <FontAwesomeIcon icon={faChartLine} className="text-yellow-500"/>
                                    </div>
                                    <div>
                                        <h1 className="text-sm font-medium">Logam</h1>
                                        <p className="text-xs text-neutral-700">
                                            Berdiskusi tentang logam
                                        </p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </MainLayout>
                    :
                    <div></div>
            }
        </>
    )
}

export default Komunitas;