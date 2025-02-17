const container = document.querySelector(".container");
const optionsContainer = document.querySelector(".options-container");
// cn for china
const country = "in";
const options = [ 
  "General",
  "Entertainment",
  "Health",
  "Science",
  "Sports",
  "Technology",
];

let requestURL;

//Created cards from data
const generateUI = (articles) => {
  for (let item of articles) {
    let card = document.createElement("div");
    card.classList.add("articles-box");
    card.innerHTML = `
    <a href="${item.url}" target="_blank" class="view-button">
    <div class="news-pic">
    <img src="${item.urlToImage}" alt="" />
    </div>
    <div class="article">
      <div class="news-title">
        ${item.title}
      </div>
      <div class="news-description">
      ${item.description || item.content || ""}
      </div>
      </a>
    </div>`;
    container.appendChild(card);
  }
};

//calling news API
const getNews = async () => {
  container.innerHTML = "";
  let response = await fetch(requestURL);
  if (!response.ok) {
    alert("Data unavailable at the moment. Please try again later");
    return false;
  }
  let data = await response.json();
  generateUI(data.articles);
};

//Category Selection
const selectCategory = (e, category) => {
  let options = document.querySelectorAll(".option");
  options.forEach((element) => {
    element.classList.remove("active");
  });
  requestURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${newsapi}`;
  e.target.classList.add("active");
  getNews();
};

//Options Buttons
const createOptions = () => {
  for (let i of options) {
    optionsContainer.innerHTML += `<button class="option ${i == "general" ? "active" : ""
    }" onclick="selectCategory(event,'${i}'); color();">${i}</button>`;
  }
};

let option = document.getElementsByClassName("option")
function color(){
  option.style.color="#FF0000";
}
const init = () => {
  optionsContainer.innerHTML = "";
  getNews();
  createOptions();
};

window.onload = () => {
  requestURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=general&apiKey=${newsapi}`;
  init();
};

// function for footer
function about(){
  document.getElementById("footer-content").innerHTML=` <h2>News Era</h2>
  <p>News era is dedicated to providing you quick and efficient news from all over the world . <br> We provide
      best news on our news platform.lets learn and grow together</p><div id="footer-logo">
      <ul>
          <li><img id="gmail" src="./photo/bl.png"></li>
          <li><img src="./photo/linkdin.png"></li>
          <li><img src="./photo/twitter.png"></li>
          <li><img src="./photo/instagram.jpeg"></li>
      </ul>
  </div>`
}

function Teams() {
document.getElementById("footer-content").innerHTML = `<ul>
<li><span>Ankit Kumar</span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<div id="footer-logo-teams">
              <ul>
                  <li><img id="gmail" src="./photo/bl.png"></li>
                  <li><img src="./photo/linkdin.png"></li>
                  <li><img src="./photo/twitter.png"></li>
                  <li><img src="./photo/instagram.jpeg"></li>
              </ul>
          </div></li>
<li><span>Rajababu Kumar</span>&nbsp&nbsp&nbsp&nbsp&nbsp<div id="footer-logo-teams">
          <ul>
              <li><img id="gmail" src="./photo/bl.png"></li>
              <li><img src="./photo/linkdin.png"></li>
              <li><img src="./photo/twitter.png"></li>
              <li><img src="./photo/instagram.jpeg"></li>
          </ul>
    </div>
</li>
<li><span>Anuj Kumar Sharma</span><div id="footer-logo-teams">
    <ul>
        <li><img id="gmail" src="./photo/bl.png"></li>
        <li><img src="./photo/linkdin.png"></li>
        <li><img src="./photo/twitter.png"></li>
        <li><img src="./photo/instagram.jpeg"></li>
    </ul>
</div></li></ul>`
}


