/* Fill your code*/
class Blog{
  constructor(title, detail){
    this.title = title;
    this.detail = detail;
  }

  addTitle(){
    var title_card = document.createElement('h1');
    title_card.setAttribute("id","blog-title");
    document.getElementById('card-text').appendChild(title_card);
    title_card.innerHTML += this.title;
  }

  addDescription(){
    var description_card = document.createElement('p');
    description_card.setAttribute("id", "blog-description");
    document.getElementById('card-text').appendChild(description_card);
    description_card.innerHTML += this.detail;
  }
}

function addPost(){
  document.getElementById("popupContact").style.display = "block";

  document.getElementById("close").addEventListener("click", function(){
    document.getElementById("popupContact").style.display = "none";
  });
}

function post(){
  let title = document.getElementById("title").value;
  let description = document.getElementById("detail").value;

  let image = document.createElement("img");
  image.src = "assets/javascript.png";
  document.getElementById('card-text').appendChild(image);

  var obj = new Blog(title, description);
  obj.addTitle();
  obj.addDescription();

  document.getElementById("popupContact").style.display = "none";
}
