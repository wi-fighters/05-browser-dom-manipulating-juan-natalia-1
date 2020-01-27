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
  const ul = document.querySelector("ul");

  // traverse the books array
  for (let i = 0; i < books.length; i++) {
    console.log("books:", books[i]);

    // rewrite the authors with reversed names
    books[i].author = books[i].author.split(" ").reverse().join(", ");
  }

  console.log(books);

  // sort authors by the last name
  let sortedBooks = books.sort((a, b) => {
    // TODO: think about using a ternary operator

    // compare the first letters of two books to see which one comes first alphabetically
    if (a.author.charAt(0) > b.author.charAt(0)) {
      return 1;
    } else {
      return -1;
    }
  })

  sortedBooks.map(book => {
    // define variables
    let li = document.createElement("li");
    let img = document.createElement("img");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let div = document.createElement("div");
    let span = document.createElement("span");

    // ternary operator to show if its read or no yet
    span.textContent = book.alreadyRead ? "Read" : "To read";

    // set different class name dependents on if the book was already read
    if (book.alreadyRead) {
      // span.setAttribute("class", "read");
      span.classList.add("read");
    } else {
      // span.classList.replace("read", "to-read");
      span.setAttribute("class", "to-read");
    }


    div.setAttribute("class", "btns");

    // img
    img.src = book.img;
    img.style.width = "250px";
    img.style.height = "350px";

    h2.textContent = book.title;
    p.textContent = book.author;
    p.setAttribute("class", "author");

    div.appendChild(span);
    li.appendChild(img);
    li.appendChild(h2);
    li.appendChild(p);
    li.appendChild(div);

    // li.innerHTML = '<img src="' + book.img + '" width="350" height="250">';
    // li.innerHTML += '<h2>' + book.title + '</h2>';
    // li.innerHTML += '<p class="author">' + book.author + '</p>';
    // li.innerHTML += book.alreadyRead ? '<div class="btns"><span style="background-color: green;">read</span></div>' : '<div class="btns"><span style="background-color: gray;">to read</span></div>';

    ul.appendChild(li);
  });

})();