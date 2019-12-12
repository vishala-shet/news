
const SportsApiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=d42e367c2164489e849de8cc4060f08a`;
window.fetch(SportsApiUrl).then(data =>{
    data.json().then(sportsnews => {
        console.log(sportsnews);
        let sportsData = sportsnews.articles;
        let output = '';
        for(let sports of sportsData) {
            output +=`
            <h1 class="h1Title"><a href="${sports.url}"target=_blank>${sports.title}</a></h1>
            <p>${sports.description}</p>
            <img src="${sports.urlToImage}"/>
            <p>${sports.publishedAt}</p>
            `;
        }
        document.getElementById('left').innerHTML = output;
    }).catch(err => console.log(err))
}).catch(err => console.log(err))

//time javascript here
var day = new Date().getDate();
setInterval(() =>{
    var time= new Date().toLocaleTimeString();
    document.getElementById("time").innerHTML = `${time}`;
},1000);


const EntUrl = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=d42e367c2164489e849de8cc4060f08a`;
window.fetch(EntUrl).then(data =>{
    data.json().then(ent =>{
        let EntData = ent.articles;
        let output = '';
        for(let ent of EntData) {
            output +=`
            <h1 class="h1Title"><a href="${ent.url}"target=_blank>${ent.title}</a></h1>
            <p>${ent.description}</p>
            <img src="${ent.urlToImage}"/>
            <p>${ent.publishedAt}</p>
            `;
        }
        document.getElementById('right').innerHTML = output;
        console.log(ent)
    }).catch(err =>console.log(err))
}).catch(err => console.log(err))

///top news
const topheadlineApiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=d42e367c2164489e849de8cc4060f08a`;
window.fetch(topheadlineApiUrl).then(data =>{
    data.json().then(topnews =>{
        let topnewsData = topnews.articles;
        let output = '';
        for(let topnews of topnewsData) {
            output +=`
            <h1 class="h1Title"><a href="${topnews.url}"target=_blank>${topnews.title}</a></h1>
            <p>${topnews.description}</p>
            <img src="${topnews.urlToImage}"/>
            <p>${topnews.publishedAt}</p>
            `;
        }
        document.getElementById('middle').innerHTML = output;
        console.log(top)
    }).catch(err =>console.log(err))
}).catch(err => console.log(err))