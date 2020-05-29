$(function() {
    print_latest_news();
    window.setInterval(function () {
        print_latest_news();
    }, 5000);
});

function print_latest_news() {
    let articles_html = $.post("scripts/read_latest_news.php", {call_now: "True"});
    let news_container = $('#news_container');
    articles_html.done(function (data) {
        news_container.empty();
        news_container.append(data.html);
        $('.article_remove').click(function () {
            removeArticle(this);
        });
    });
}

function removeArticle(rm_btn) {
    let article_id = $(rm_btn).data('article-id');
    let rm_article = $.post("scripts/news_remove.php", {article_id: article_id});
    rm_article.done(function (data) {
        print_latest_news();
    });
}

function submitForm() {
    let request = $.ajax({
        url: "add_item.php",
        method: "POST",
        data: {
            title : $('#title').val(),
            article : $('#article').val()
        },
        dataType: "json"
    });
    request.done(function (data) {
        console.log(data);
        $('.pd-40').text(data.title);
        $('#news_container').text(data.article);
    })
}

var xhr = new XMLHttpRequest;
xhr.open('POST', 'articles.json', true);
xhr.send('search=arduino');
xhr.onload = function () {
    if (xhr.status === 200) {
        $(function () {
            $('form').submit(function (form) {
                form.preventDefault();
                submitForm();
            })
        });
    }
}

