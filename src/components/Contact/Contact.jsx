import './Contact.css'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { validateEmail } from '../Utils/EmailValidator'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setTimeout(() =>
                alert('Please Enter A Valid Email')
                , 500)
            return;
        }

        const serviceId = 'service_7z3rq0t';
        const templateId = 'template_cq7z9hc';
        const publicKey = 'B2PCc5s-Jybuu2Tck';

        const templateParams = {
            from_name: name,
            subject: subject,
            message: message,
            email: email,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                alert(`Thank you for your message ${name}!  We will get back to you soon!`);
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }
    return (
        <main id='Contact' className='contact-main'>
            <header className='contact-header flex flex-row justify-center items-center w-full py-3'>
                <h2 className='contact-header-letter'>CONTACT</h2>
            </header>
            <form onSubmit={handleSubmit} className='contact-form flex flex-col items-center w-full h-auto'>
                <article className='flex flex-col items-center w-full mb-2'>
                    <input className='name w-5/6 md:w-3/4 lg:w-1/2 px-3 py-1 mb-1 mt-10 text-3xl rounded-xl'
                        type='text'
                        placeholder='Your Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input className='email w-5/6 md:w-3/4 lg:w-1/2 px-3 py-1 my-1 text-3xl rounded-xl'
                        type='text'
                        placeholder='Your Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input className='subject w-5/6 md:w-3/4 lg:w-1/2 px-3 py-1 my-1 text-3xl rounded-xl'
                        type='text'
                        placeholder='Your Subject'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <textarea className='message w-5/6 md:w-3/4 lg:w-1/2 px-3 py-1 my-1 text-3xl rounded-xl'
                        type='text'
                        rows='5'
                        cols='10'
                        placeholder='Your Message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </article>
                <button type='submit' className='submit-btn w-44 rounded-xl text-3xl mt-1 mb-5 py-2'>Submit</button>
                <a href='#top' className='contact-top-btn flex justify-center w-fit h-fit gap-[.15rem]'>
                    <h2 className='contact-top-letter'>T</h2>
                    <h2 className='contact-top-letter'>O</h2>
                    <h2 className='contact-top-space'>S</h2>
                    <h2 className='contact-top-letter'>T</h2>
                    <h2 className='contact-top-letter'>H</h2>
                    <h2 className='contact-top-letter'>E</h2>
                    <h2 className='contact-top-space'>S</h2>
                    <h2 className='contact-top-letter'>T</h2>
                    <h2 className='contact-top-letter'>O</h2>
                    <h2 className='contact-top-letter'>P</h2>
                </a>
            </form>
        </main>
    )
}

export default Contact