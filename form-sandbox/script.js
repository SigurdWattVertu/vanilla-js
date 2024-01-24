// const form = document.querySelector("#sigurd");

// console.log(form);
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log(e);
// });

console.log('helo');

const aTag = document.createElement('a');
aTag.href = "www.hello.com"
aTag.innerHTML = 'jfjfjf'
aTag.classList = 'sigurd Test'

document.body.appendChild(aTag)
document.body.appendChild(document.createElement('br'))


let ConvertStringToHTML = function (str) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(str, 'text/html');
    return doc.body;
 };

const string = "<p>Hello world</p>"
console.log(string)

console.log(ConvertStringToHTML(string))