function Article(title, text) {
    this.title = title;
    this.text = text;
  }
  let articles = [];
  let button = document.querySelector('.addArticle');
  console.log(button);
  let content = document.querySelector('.content');
  function addArticle() {
    let titleInput = document.querySelector('.titleInput');
    let textInput = document.querySelector('.textInput');
    let article = new Article(titleInput.value, textInput.value);
    articles.push(article);
  }
  function showArticle() {
    content.innerHTML = '';
    articles.map(function (article) {
      let articleHead = document.createElement('h2');
      articleHead.innerHTML = article.title;
      let articleBody = document.createElement('p');
      let articleWrap = document.createElement('div');
      articleWrap.className = 'article';
      articleBody.innerHTML = article.text;
      articleWrap.appendChild(articleHead);
      articleWrap.appendChild(articleBody);
      content.appendChild(articleWrap);
    });
  }
  
  button.addEventListener('click', function () {
    addArticle();
    showArticle();
  });