window.addEventListener('DOMContentLoaded', main);

function main(){
    const form = document.querySelector('form');

    form.addEventListener('submit',handleSubmit)

    function handleSubmit(event){
         event.preventDefault();   
         console.log(event.target);
         const formData = new FormData(event.target);
         let formObject = Object.fromEntries(formData);
         console.log(formObject);
         let email =formData.get('email');
         if(email === 'test@test.com'){
             document.querySelector('.alert-danger').classList.remove('d-none');
         }
    }


}