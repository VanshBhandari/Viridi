import { getDownloadURL, getStorage, ref, uploadString } from 'firebase/storage';
import React, { useState } from 'react'
import { MdClose } from "react-icons/md";
import './style.css'
import { fbApp } from '../../fbase';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

export default function MakePost( props, userObj ) {
    console.log(props);
    const [post, setpost] = useState("");
    const [attachment, setAttachment] = useState("");

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
        await addDoc(collection(getFirestore(fbApp), "posts"), {
            text: post,
            createdAt: Date.now(),
            creatorId: userObj.uid,
            attachmentUrl,
        });
        setpost("");
        setAttachment("");
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

    const onClearAttachment = () => setAttachment("");

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
                            <span>Add photos</span>
                        </label>
                        <input
                            id="attach-file"
                            type="file"
                            accept="image/*"
                            onChange={onFileChange}
                            style={{ opacity: 0 }}
                        />
                        {attachment && (
                            <div className="factoryForm__attachment">
                                <img
                                    src={attachment}
                                    style={{ backgroundImage: attachment }}
                                    alt="attachment"
                                />
                                <div className="factory__clear" onClick={onClearAttachment}>
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
