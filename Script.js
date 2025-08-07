let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text',  {
    strings: ['Anthropologist','Ethnographic Researcher', 'Critical Analyst', 'Gender Expert'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
 });

 const form = document.querySelector('form')
 {
    function sendEmail()
    {
            Email.send({
            SecureToken: "64b7ac34-fb7f-4454-b858-31fd962cf639",
            To: 'zihadsha701@gmail.com',
            From: 'zihadsha701@gmail.com',
            Subject: "This is the subject",
            Body: "And this is the body"
        }).then(
        message => alert(message)
        );
    }
 }

 form.addEventListener("submit",(e) =>{
     e.preventDefault();

     sendEmail();
});