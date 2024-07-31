import React from 'react'

import './contact.css'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "12be3c95-5bf3-49b3-83c0-afa30a07e1db");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };

    return (

        <section className="contact" id='contact'>
            <form onSubmit={onsubmit}>
                <h2>Contact Us</h2>

                <div className="input-box">
                    
                    <input type="text" className="field" placeholder='Enter your name' name='name' required />
                </div>

                <div className="input-box">
                    
                    <input type="email" className="field" placeholder="Enter your email" name='email'required />
                </div>

                <div className="input-box">
                    
                    <textarea name="message"  className="field mess" placeholder='Enter your message' required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </section>

    )

}

export default Contact;