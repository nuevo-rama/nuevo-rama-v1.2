// Sin uso

fetch('./data/data.json')
  .then((response) => response.json())
  //.then((data) => console.log(data));
  .then((data) => {
    document.getElementById("title").innerHTML = data.title
    document.getElementById("subTitle").innerHTML = data.subTitle
    document.getElementById("header").innerHTML = data.header
    document.getElementById("textItem1").innerHTML = data.textItem1
  });
    