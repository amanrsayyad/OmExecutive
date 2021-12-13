import React, { useState, useEffect } from 'react';
import '../../Pages/Styles/Account.css';
import { db } from '../../firebase';


const Account = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [number, setNumber ] = useState("")

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection("contacts")
            .add({
                name: name,
                email: email,
                message: message,
                number: number,
            })
            .then(() => {
                setLoader(false);
                alert("Your message has been submitted👍");
            })
            .catch((error) => {
                alert(error.message);
                setLoader(false);
            });

        setName("");
        setEmail("");
        setMessage("");
        setNumber("");
    };


    return (
        <div className="contact-in">
            <div className="contact_container">
                <div className="contact_card">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15204.755687700637!2d74.0003081!3d17.6885333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1ca48f982a74e045!2z4KS54KWL4KSf4KSyIOCkk-CkriDgpI_gpJXgpY3gpLjgpYfgpJXgpY3gpK_gpYHgpJ_gpL_gpLU!5e0!3m2!1shi!2sin!4v1638422308953!5m2!1shi!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
                </div>

                <form className="contact_card" onSubmit={handleSubmit}>
                    <h2 className='contact_h2'>Contact Us</h2>

                    <input
                        className="text field"
                        placeholder="Enter Your Name"
                        autoComplete="off" required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className="text field"
                        placeholder="Enter Your Email'Id"
                        autoComplete="off" required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="number field"
                        placeholder="Enter Your Mobile Number"
                        autoComplete="off" required
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                    <textarea
                        placeholder="Message"
                        className="field"
                        autoComplete="off" required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <button
                        className="btn_contact"
                        type="submit"
                        style={{ background: loader ? "#ccc" : "#E47615;" }}
                    >Send</button>
                </form>
            </div>
        </div>
    )
}


export default Account;