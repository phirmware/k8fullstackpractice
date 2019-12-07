// (function getWelcomePage(){
//     fetch('http://localhost:5000').then((data) => {
//         return data.json();
//     }).then(data => {
//         updatePage(data);
//     }).catch(err => {
//         console.log('err');
//     });
// })();

// const updatePage = (data) => {
//     const element =  document.querySelector('.from_api');
//     element.innerHTML = data.message;
// }

// const getAbout = () => {
//     fetch('http://localhost:5000/about').then(data => {return data.json()}).then(data => {
//         console.log(data);
//         document.querySelector('.txt').innerHTML = data.message;
//     });
// }