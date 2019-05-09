import call from './ui.js';

let user ='';

const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (e) => {
    user = e.target.value;
   call(user);

 });

const Madalina = 'AlexandraMadalina';


call(Madalina);
