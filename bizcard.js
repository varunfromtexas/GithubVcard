let ulNode = document.querySelector('ul')
console.log(ulNode)

let image = document.querySelector(".avatar")

function githubData (){
  let data = JSON.parse(this.responseText)
  let dataString = `
  <li>Name: ${data.name}</li>
  <li>Github URL: ${data.html_url}</li>
  <li>Email: ${data.email}</li>
  <li>Company: ${data.company}</li>
  <li>Website: ${data.html_url}</li>
  `
  let githubAvatar = `
  <img src="${data.avatar_url}">
  `
ulNode.innerHTML = dataString
image.innerHTML = githubAvatar

}


let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/varunfromtexas")
req.addEventListener("load", githubData);
req.send();

console.log(req);
