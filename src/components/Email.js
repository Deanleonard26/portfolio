import React from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';

const EmailForm = () => {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_tjw1qpi', 'deanTemplate', e.target, 'user_GGEwyhcpFd92A2atWqlE1')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }

    return (
        <FormWrapper>
                <form className="contact-form" onSubmit={sendEmail}>
                    <label>Full Name</label>
                    <input type="text"  name="name" />
                    <label>Email</label>
                    <input type="email" name="email" />
                    <label>Subject</label>
                    <input type="text"  name="subject" />
                    <label>Message</label>
                    <textarea className='message-box' name="message" />
                    <button type="submit" value="Send">Send</button>
                </form>
        </FormWrapper>
    )
}

const FormWrapper = styled.div`
        display:flex;
        flex-direction:column;

        form {
            width: 360px;
            display:flex;
            flex-direction:column;
        }

        label{
            margin:0 0 5px 5px;
            font-size:12px;
            color:white;
        }
        input {
            height: 40px;
            margin-bottom:1.5rem;
            border-radius:10px;
            border:0;    
            outline:none;
            text-decoration:none;
            padding-left:10px;
        }
        .message-box {
            height:100px;
            margin-bottom:2rem;
            font-size:15px;
            border-radius:10px;
            outline:none;
            text-decoration:none;
            padding-left:10px;
        }
        button {
            height:45px;
            border:0;
            border-radius:10px;
            background-color: #23d997;
            color: white;
            font-size:18px;
            font-weight:400;
            cursor: pointer;
        }

        @media(max-width:500px) {
        form {
            width: 300px;
        }
        input {
            width: 100%;
        }
        .message-box {
            width: 100%;
        }
        .button-contact {
            width: 100%;
        }
    }
`

export default EmailForm;