import axios from 'axios';

const contactSend = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch('http://localhost:4001/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
       });
       let data = await res.json();
       console.log(data);
       if (data.status == 'success') {
         alert(
           'Great! Your contact has been sent! We will get back to you soon!'
         );
         setName('');
         setEmail('');
         setMessage('');
        } else {
          alert('Oops. Something went wrong. Please try again.');
        }
      } catch (error) {
        console.log(error);
      }
};

export default contactSend;
