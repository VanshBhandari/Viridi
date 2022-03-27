import { getDownloadURL, getStorage, ref, uploadString } from 'firebase/storage';
import React, { useState, useContext } from 'react'
import { MdClose } from "react-icons/md";
import './style.css'
import { fbApp } from '../../fbase';
import { v4 as uuidv4 } from "uuid";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { UserContext } from '../../contexts/user';
import { storage } from '../../fbase';

export default function MakePost(props) {
    const [user, setUser] = useContext(UserContext).user
    const [post, setpost] = useState("");
    const [urls, setUrls] = useState([]);
    const [attachment, setAttachment] = useState([]);
    const [images, setImages] = useState([]);
    
    const [progress, setProgress] = useState(0);
    const onSubmit = async (event) => {
        event.preventDefault();
        if (post === "") {
            return;
        }
        // let attachmentUrl1 = "";
        // if (attachment !== "") {
        //     const attachmentRef1 = ref(
        //         getStorage(fbApp),
        //     );
        //     const response = await uploadString(
        //         attachmentRef1,
        //         attachment[0],
        //         "data_url"
        //     );
        //     attachmentUrl1 = await getDownloadURL(response.ref);
        // }
        // let attachmentUrl2 = "";
        // if (attachment !== "") {
        //     const attachmentRef2 = ref(
        //         getStorage(fbApp),
        //     );
        //     const response = await uploadString(
        //         attachmentRef2,
        //         attachment[1],
        //         "data_url"
        //     );
        //     attachmentUrl2 = await getDownloadURL(response.ref);
        // }

        await addDoc(collection(getFirestore(fbApp), "posts"), {
            text: post,
            creatorId: user.uid,
            // attachmentUrl1,
            // attachmentUrl2
        });
        setpost("");
        setAttachment("");
        // setAttachment2("");
    }

    const onChange = (event) => {
        event.preventDefault();
        const {
            target: { value },
        } = event;
        setpost(value);
    };

    const handleChange = (event) => {
        for (let i = 0; i < 2; i++) {
            const {
                target: { files },
            } = event;
            const newImage = files[i];
            console.log(newImage);
            setImages((prevState) => [...prevState, newImage]);
            const reader = new FileReader();
            reader.onloadend = (finishedEvent) => {
                const {
                    currentTarget: { result },
                } = finishedEvent;
                setAttachment(result);
                
            };
        }
    };

    const handleUpload = () => {
        images.map((image) => {
            const uploadTask = ref(storage, `images/${image.name}`).put(image);
            console.log(image);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setProgress(progress);
                },
                (error) => {
                    console.log(error);
                },
                async () => {
                    await storage
                        .ref("images")
                        .child(image.name)
                        .getDownloadURL()
                        .then((urls) => {
                            setUrls((prevState) => [...prevState, urls]);
                        });
                }
            );
        });

    };

    // const onFileChange = (event) => {
    //     const {
    //         target: { files },
    //     } = event;
    //     const theFile = files[0];
    // const reader = new FileReader();
    // reader.onloadend = (finishedEvent) => {
    //     const {
    //         currentTarget: { result },
    //     } = finishedEvent;
    //     setAttachment(result);
    // };
    //     if (Boolean(theFile)) {
    //         reader.readAsDataURL(theFile);
    //     }
    // };



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
                            <span onClick={handleUpload}>Please Post Both Of Your Pictures</span>
                        </label>
                        <input
                            id="attach-file"
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleChange}
                            style={{ opacity: 0 }}
                        />
                        {images.map((url, i) => (
                            <img
                                key={i}
                                style={{ width: "500px" }}
                                src={url}
                            />
                        ))}

                        <div className="factory__clear" onClick={onClearAttachment}>
                            <span>Remove</span>
                        </div>

                        {/* <img
                            src={attachment2}
                            style={{ maxWidth: '10%' }}
                        />
                        <div className="factory__clear" onClick={onClearAttachment2}>
                            <span>Remove</span>
                        </div> */}
                        <button onSubmit={onSubmit}>
                            post
                        </button>
                    </form>

                </div>
            </div>
        </>
    ) : (
        ""
    )

};
