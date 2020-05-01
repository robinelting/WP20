// Add a <article> tag with a heading and paragraph
function addArticle () {
    let article = document.createElement('ARTICLE');
    let heading = document.createElement('H2');
    let para = document.createElement('P');
    let hText = document.createTextNode("This is the heading of the article");
    let pText = document.createTextNode("This is the article paragraph");
    para.appendChild(pText);
    heading.appendChild(hText);
    article.appendChild(heading);
    article.appendChild(para);
    let container = document.getElementsByClassName('container')[0];
    container.appendChild(article);
}

// Change the href of the third third <li> element
function changeLink () {
    var links = document.getElementById('links');
    links.getElementsByTagName('a')[2].href = "https://google.com/";
}

// Add the attribute 'target' with the value '_blank'
function addAttribute () {
    links.getElementsByTagName('a')[2].setAttribute('target', '_blank');
}

// Changes the color of elements with the class 'nav-item' to red. In my function I selected all <a> elements with
// the class 'nav-link', because inside the <li> elements with class 'nav-item' all <a> elements have the class 'nav-link'
function changeColor () {
    let i;
    for (i = 0; i < document.getElementsByClassName('nav-link').length; i++) {
        document.getElementsByClassName('nav-link')[i].style.color = "red";
    }
}

// Print object to alert box
function wp20Check(object) {
    let output = ''
    for (var property in object) {
        output += property + ': ' + object[property] + '\n';
    }
    alert(output);
}

// Add a sidebar
function addSidebar () {
    document.getElementsByClassName('col-md-12')[0].className = 'col-md-8';
    let divElement = document.createElement('DIV');
    divElement.className = 'col-md-4';
    let divElementHeader = document.createElement('H3');
    let divElementHeaderText = document.createTextNode('Sidebar');
    divElementHeader.appendChild(divElementHeaderText);
    divElement.appendChild(divElementHeader);
    let container = document.getElementsByClassName('container')[0];
    container.appendChild(divElement);
}


// For index.html
if (window.location.pathname.includes('/index.html')) {
    window.addEventListener('DOMContentLoaded', function () {
        document.title = "Webprogramming (LIX018P05) - Index";
        addArticle();
        changeLink();
        addAttribute();
        changeColor();
        var WP20 = {
            Week1: "No lecture",
            Week2: "Assignment 1",
            Week3: "No lecture",
            Week4: "Assignment 2",
            Week5: "-",
            Week6: "Assignment 3",
            Week7: "Final Project"
        };
        wp20Check(WP20);
    });
}

// For second.html
if (window.location.pathname.includes('/second.html')) {
    window.addEventListener('DOMContentLoaded', function () {
        document.title = "Webprogramming (LIX018P05) - Second";
        changeLink();
        addAttribute();
        changeColor();
        addSidebar();
    });
}