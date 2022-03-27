import { getDownloadURL, getStorage, ref, uploadString } from 'firebase/storage';
import React, { useState, useContext } from 'react'
import { MdClose } from "react-icons/md";
import './style.css'
import { fbApp } from '../../fbase';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { UserContext } from '../../contexts/user';

export default function MakePost( props, userObj ) {
    const [user, setUser] = useContext(UserContext).user
    const [post, setpost] = useState("");
    const [attachment, setAttachment] = useState("");
    const [attachment2, setAttachment2] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        if (post === "") {
            return;
        }
        let attachmentUrl = "";
        if (attachment !== "") {
            const attachmentRef = ref(
                getStorage(fbApp),
            );
            const response = await uploadString(
                attachmentRef,
                attachment,
                "data_url"
            );
            attachmentUrl = await getDownloadURL(response.ref);
        }
        
        let attachmentUrl2 = "";
        if (attachment2 !== "") {
            const attachmentRef2 = ref(
                getStorage(fbApp),
            );
            const response = await uploadString(
                attachmentRef2,
                attachment2,
                "data_url2"
            );
            attachmentUrl2 = await getDownloadURL(response.ref);
        }
        await addDoc(collection(getFirestore(fbApp), "posts"), {
            text: post,
            createdAt: Date.now(),
            creatorId: userObj.uid,
            attachmentUrl,
            attachmentUrl2
        });
        setpost("");
        setAttachment("");
        setAttachment2("");
    }

    const onChange = (event) => {
        event.preventDefault();
        const {
            target: { value },
        } = event;
        setpost(value);
    };

    const onFileChange = (event) => {
        const {
            target: { files },
        } = event;
        const theFile = files[0];
        console.log(theFile);
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const {
                currentTarget: { result },
            } = finishedEvent;
            setAttachment(result);
        };
        if (Boolean(theFile)) {
            reader.readAsDataURL(theFile);
        }
    };

    const onFileChange2 = (event) => {
        const {
            target: { files },
        } = event;
        const theFile2 = files[0];
        const reader2 = new FileReader();
        reader2.onloadend = (finishedEvent2) => {
            const {
                currentTarget: { result2 },
            } = finishedEvent2;
            setAttachment2(result2);
        };
        if (Boolean(theFile2)) {
            reader2.readAsDataURL(theFile2);
        }
    };

    const onClearAttachment = () => setAttachment("");
    const onClearAttachment2 = () => setAttachment2("");

    return (props.trigger) ? (
        <>
            <div className='overlay o-block'></div>
            <div className='make-post-pop'>
                <div className='make-post-pop-in'>
                    <button className='closebtn' onClick={() => props.setTrigger(false)}>
                        <MdClose size={30} />
                    </button>
                    <form onSubmit={onSubmit} className="factoryForm">
                        <div className="factoryInput__container">
                            <input
                                className="factoryInput__input"
                                value={post}
                                onChange={onChange}
                                type="text"
                                placeholder="Description"
                                maxLength={120}
                            />
                            <input type="submit" value="&rarr;" className="factoryInput__arrow" />
                        </div>
                        <label htmlFor="attach-file" className="factoryInput__label">
                            <span>Add before photo</span>
                        </label>
                        <input
                            id="attach-file"
                            type="file"
                            accept="image/*"
                            onChange={onFileChange}
                            style={{ opacity: 0 }}
                        />
                        <label htmlFor="attach-file" className="factoryInput__label2">
                            <span>Add after photo</span>
                        </label>
                        <input
                            id="attach-file"
                            type="file"
                            accept="image/*"
                            onChange={onFileChange2}
                            style={{ opacity: 0 }}
                        />

                        {attachment && (
                            <div className="factoryForm__attachment">
                                <img
                                    src={attachment}
                                    style={{ maxWidth:'30%'}}
                                    alt="attachment"
                                />
                                <div className="factory__clear" onClick={onClearAttachment}>
                                    <span>Remove</span>
                                </div>
                            </div>
                        )}
                        {attachment2 && (
                            <div className="factoryForm__attachment2">
                                <img
                                    src={attachment2}
                                    style={{ maxWidth:'10%'}}
                                    alt="attachment"
                                />
                                <div className="factory__clear" onClick={onClearAttachment2}>
                                    <span>Remove</span>
                                </div>
                            </div>
                        )}
                    </form>

                </div>
            </div>
        </>
    ) : (
        ""
    )
};
