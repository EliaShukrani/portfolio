window.onload = () => {
    const button = document.getElementById('send');  // Select the Send Message button
    const menu = document.getElementById('menu');

    button.addEventListener('click', () => {
        emailSend();
    });

    button.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
};

function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email:document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    const serviceID = "service_0k4v5rj";
const templateID = "template_rr3d89p";

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!");
    }
)
.catch((err) => console.log(err));
;
}
