

const signup=document.querySelector("#signup");
const pas=document.querySelector("#exampleInputPassword1")
const paswar=document.querySelector("#passs")
const email=document.querySelector("#exampleInputEmail1");
const username=document.querySelector("#validationServerUsername");
const text=document.querySelector("p")


signup.addEventListener("click",isSigning)

function isSigning(event) {
    event.preventDefault();

    const usernameValue=username.value;
    const passwordvalue= pas.value;
    const emailvalue=email.value;
    const load=true;
    
 if(pas.value.length <= 4){
     paswar.style.display="block";
     load= false;
 } 
     
if(load){
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    Name: usernameValue,
    Email: emailvalue,
    Password: passwordvalue,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  /* .then((response) => response.json()) */
  .then(response =>{
      if(response.ok){
        text.innerText="your signup successfully"
      }
  })
  
}
    
}