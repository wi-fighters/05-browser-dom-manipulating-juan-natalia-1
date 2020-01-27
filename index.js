(() => {

  const books = [{
      title: "The Design of EveryDay Things",
      author: "Don Norman",
      alreadyRead: false,
      img: "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
    },
    {
      title: "The Most Human Human",
      author: "Brian Christian",
      alreadyRead: true,
      img: "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
    },
    {
      title: "Thinking with Type",
      author: "Ellen Lupton",
      alreadyRead: true,
      img: "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
    },
    {
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      alreadyRead: false,
      img: "https://eloquentjavascript.net/img/cover.jpg"
    }
  ];


  // access the ul element
  const ul = document.querySelector(".book-list");

  // traverse the book array
  for (let i = 0; i < books.length; i++) {
    console.log("books:", books[i]);

    // const txt = document.createTextNode(books[i].toUpperCase() + books.substring(1).toLowerCase());
    // const txt = document.createTextNode(books[i].title);
    // const txt = document.createTextNode("hi");
    // li.prepend(txt);

    // create li elements
    let li = document.createElement("li");

    li.innerHTML = '<img src="' + books[i].img + '" width="300">';
    li.innerHTML += '<h2>' + books[i].title + '</h2>';
    li.innerHTML += '<p>' + books[i].author + '</p>';
    li.innerHTML += '';


    ul.appendChild(li);
  }



})();