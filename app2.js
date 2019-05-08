import call from './ui.js';

let user ='';

const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (e) => {
    user = e.target.value;
   call(user);

 });


/*async function call(searchValue){
const data = await getUserInfo(searchValue);
console.log(data); 
}*/

