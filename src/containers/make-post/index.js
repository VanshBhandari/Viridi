import React, { useEffect, useState } from 'react'
import {
    addDoc,
    collection,
    onSnapshot,
    query,
    orderBy,
} from "firebase/firestore";
import { dbService } from '../../fbase';

export default function MakePost({ userObj }) {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState("");
    useEffect(() => {
        const q = query(
            collection(dbService, "nweets"),
            orderBy("createdAt", "desc")
        );
        onSnapshot(q, (snapshot) => {
            const nweetArr = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setNweets(nweetArr);
        });
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("nweets").add({
            text: nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
        });
        setNweet("");
    };
    
    const onChange = (event) => {
        const {
          target: { value },
        } = event;
        setNweet(value);
      };

    <div>
        <form onSubmit={onSubmit}>
            <input
                value={nweet}
                onChange={onChange}
                type="text"
                placeholder="What's on your mind?"
                maxLength={120}
            />
            <input type="submit" value="Nweet" />
        </form>
        <div>
            {nweets.map((nweet) => (
                <div key={nweet.id}>
                    <h4>{nweet.text}</h4>
                </div>
            ))}
        </div>
    </div>

}

