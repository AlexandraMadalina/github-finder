
export default function getUserInfo(UI){
 return fetch(`https://api.github.com/users/${UI}?client_id=ca0b4c9e2ca6a2a9ea7c&client_secret=a7fa2b536f9760ebffae2422548b20839a5ed295`)
  .then(response => response.json())
  .then(data => data);
  
}
