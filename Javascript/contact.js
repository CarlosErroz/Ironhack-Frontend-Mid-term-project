/*
Validación de formulario contact
*/

const fmessage = document.getElementById("fmessage");

const formContact = document.getElementById("form-container");
const urlContactForm ="https://jsonplaceholder.typicode.com/posts";



formContact.addEventListener("submit", (e) => {
    e.preventDefault();
    if (fmessage.value.length<5 || fmessage.value.length>200) {
        const message = document.getElementById('ErrorMessageTextArea');
        message.style.display = 'block';
    }
    else {
        const message = document.getElementById('ErrorMessageTextArea');
        message.style.display = 'none';
        postForm();
    }
    })


//Función de envío formulario

const postForm = async () => {
    const newForm = new FormData(formContact)
        try {
          const response = await fetch (urlContactForm, {
            method: "POST",
            body: JSON.stringify(newForm)
          })
          if (response.ok) {
            const data= await response.json();
            const message = document.getElementById('contact-ok-submit');
            message.style.display = 'block';
          } else {
            const message = document.getElementById('contact-ko-submit');
            message.style.display = 'block';
          }
        } catch(error) {
          console.log(error);
        }
      }