<?php
/* Header */
$page_title = 'Webprogramming Assignment 2';
$navigation = Array(
    'active' => 'Home',
    'items' => Array(
        'Home' => '/WP20/assignment_2/index.php',
        'Links' => '/WP20/assignment_2/links.php',
        'News' => '/WP20/assignment_2/news.php',
        'Future' => '/WP20/assignment_2/future.php'
    )
);
include __DIR__ . '/tpl/head.php';

/* Body */
include __DIR__ . '/tpl/body-start.php';
?>
<div class="col-md-12">
    <h1>Welcome to my site!</h1>
</div>
<?php
include __DIR__ . '/tpl/body-end.php';

/* Footer */
include __DIR__ . '/tpl/footer.php';
?>