/* becode/javascript
 * 
 *
 * coded by kevin@BeCode
 * started at 7/05/2019
 */
//Simple startup code
//let user = '';

const searchUser = document.getElementById('searchUser');
const profile = document.querySelector('#profile');
searchUser.addEventListener('keyup', (e) => {
   //user = e.target.value;
   getUser('rafaello104');
});

function getUser(UI){
  fetch(`https://api.github.com/users/${UI}`)
  .then(response =>response.json())
  .then(data =>{
    console.log(data);
     user = new User(data);
     console.log(user);
     return user;
  })
  .then(user =>{
    profile.innerHTML = `<div class="  card card-body mb-3">
    <div class="row">
    <div class="col-md-3">
      <img class="img-fluid mb-2" src="${user.avatar_url}">
      <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
    </div>
    <div class="col-md-9">
      <span class="badge badge-primary">Repo public: {user.repos}</span>
      <span class="badge badge-success">Followers: ${user.followers}</span>
      <span class="badge badge-info">Following: ${user.following}</span>
      <br><br>
      <ul class="list-group">
        <li class="list-group-item">Company:${user.company}</li>
        <li class="list-group-item">Website/Blog: <a href="${user.blog}">${user.blog} </a></li>
        <li class="list-group-item">Location: ${user.location}</li>
        <li class="list-group-item">Member Since: ${user.created_at}</li>
      </ul>
    </div>
    </div>
    </div>`;
  })
}
class User{
  constructor(data){
    this.avatar_url = data.avatar_url;
    this.html_url = data.html_url;
    this.followers = data.followers;
    this.following = data.following;
    this.company = data.company;
    this.blog = data.blog;
    this.location = data.location;
    this.created_at = data.created_at;
  }
}



