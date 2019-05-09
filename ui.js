import {
  getUserInfo,
  getRepo
} from './github.js';

let profile = document.createElement('x-profile');

const container = document.querySelector('#profile');
export default async function call(searchValue) {
  const data = await getUserInfo(searchValue);
 console.log(data);
  const repos = await getRepo(data.login, data.public_repos);
  
  makeProfile(data,repos);
}

function makeProfile(user,repositories) {
  container.appendChild(profile);
  profile.innerHTML = `<div class="  card card-body mb-3">
  <div class="row">
  <div class="col-md-3">
    <img class="img-fluid mb-2" src="${user.avatar_url}">
    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
  </div>
  <div class="col-md-9">
    <span class="badge badge-primary">Repo public: ${user.public_repos}</span>
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
  </div>`
  
  
  console.log(repositories);
 /* for (let i = 0; 1<repositories.length; ++i){
    let repo = document.createElement('x-repo');
    //console.log(`${repositories[i].html_url} : ${i} : ${repositories.length}`);
    repo.innerHTML = ` <div class="card card-body mb-2">
    <div class="row">
      <div class="col-md-6">
        <a href="${repositories[i].html_url}" target="_blank">${repositories[i].name}</a>
      </div>
      <div class="col-md-6">
        <span class="badge badge-primary">Stars:${repositories[i].stargazers_count}</span>
        <span class="badge badge-secondary">Watchers: ${repositories[i].watchers}</span>
        <span class="badge badge-success">Forks: ${repositories[i].forks}</span>
      </div>
    </div>
  </div>`
  container.appendChild(repo);
  }*/
}
