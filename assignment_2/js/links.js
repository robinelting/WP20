function createUnorderedList () {
    let u_list = document.createElement("UL");
    u_list.setAttribute('id', 'links');
    let li_1 = document.createElement("LI");
    $(li_1).attr('class', 'ListItem1');
    let li_2 = document.createElement("LI");
    $(li_2).attr('class', 'ListItem2');
    let li_3 = document.createElement("LI");
    $(li_3).attr('class', 'ListItem3');
    let a_1 = document.createElement("A");
    $(a_1).attr('href', 'https://www.ufc.com/');
    $(a_1).attr('target', '_blank');
    $(a_1).text('UFC');
    let a_2 = document.createElement("A");
    $(a_2).attr('href', 'https://www.rug.nl/');
    $(a_2).attr('target', '_blank');
    $(a_2).text('Rijksuniversiteit Groningen');
    let a_3 = document.createElement("A");
    $(a_3).attr('href', 'https://www.velocitas1897.nl/');
    $(a_3).attr('target', '_blank');
    $(a_3).text('Velocitas 1897');

    li_1.appendChild(a_1);
    li_2.appendChild(a_2);
    li_3.appendChild(a_3);
    u_list.appendChild(li_1);
    u_list.appendChild(li_2);
    u_list.appendChild(li_3);

    let container = $('.col-md-12');
    container.append(u_list);
}

function addButton() {
    let button = document.createElement("BUTTON");
    $(button).attr('type', 'button');
    $(button).attr('class', 'button1');
    $(button).text('Fade');
    let container = $('.col-md-12');
    container.append(button);
}

function addInputFields() {
    let divElement = document.createElement('DIV');
    let divElement2 = document.createElement('DIV');
    let input1 = document.createElement('INPUT');
    $(input1).attr('type', 'text');
    $(input1).attr('placeholder', 'Enter link name...');
    $(input1).attr('id', 'input1');

    let input2 = document.createElement('INPUT');
    $(input2).attr('type', 'url');
    $(input2).attr('placeholder', 'Enter URL...');
    $(input2).attr('id', 'input2');

    let button2 = document.createElement('BUTTON');
    $(button2).attr('type', 'button');
    $(button2).attr('class', 'button2');
    $(button2).text('Add link');
    let container = $('.col-md-12');
    divElement.append(input1);
    divElement.append(input2);
    divElement2.append(button2);
    container.append(divElement);
    container.append(divElement2);
}

function insertLink() {
    let value_link = $('#input1').val();
    let value_url = $('#input2').val();
    let u_list = $('ul:last');
    let li_new = document.createElement('LI');
    let a_new = document.createElement('A');
    $(a_new).text(value_link);
    $(a_new).attr('href', value_url);
    $(a_new).attr('target', '_blank');
    li_new.append(a_new);
    u_list.append(li_new);
}

function deleteButton() {
    let divElement3 = document.createElement('DIV');
    $(divElement3).attr('class', 'delete-mode');
    let button3 = document.createElement('BUTTON');
    $(button3).attr('type', 'button');
    $(button3).attr('class', 'button3');
    $(button3).text('Delete mode');
    let container = $('.col-md-12');
    $(divElement3).append(button3);
    $(container).append(divElement3);
}

if (window.location.pathname.includes('/links.php')) {
    $(function() {
        createUnorderedList();
        addButton();
        $('button.button1').click(function () {
            $('ul').toggle('slow');
        })
        addInputFields();
        $('button.button2').click(insertLink);
        //deleteButton();
        //$('button.button3').click(function () {
        //    $(this).click(function () {
        //        $(this).remove(this);
        //    })
        //})

    });
}