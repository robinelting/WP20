<?php
/* Header */
$page_title = 'Webprogramming Assignment 3';
$navigation = Array(
    'active' => 'Simple Form',
    'items' => Array(
        'News' => '/WP20/assignment_3/index.php',
        'Add news item' => '/WP20/assignment_3/news_add.php',
        'Leap Year' => '/WP20/assignment_3/leapyear.php',
        'Simple Form' => '/WP20/assignment_3/simple_form.php'
    )
);
include __DIR__ . '/tpl/head.php';
include __DIR__ . '/tpl/body_start.php';
?>

<div class="welcome-info">
    <h1 class="name">Welcome <?php echo $_GET['name'];?>!</h1>
    <p class="city"><?php
        $city = $_GET['place'];
        if ($city == "Amsterdam") {
            echo "You're from the capital of the Netherlands!";
        } else if ($city !== "Amsterdam") {
            echo "You're from $city!";
        }
        ?></p>
</div>

<div class="row">
    <div class="col-12">
        <form action="simple_form.php" method="GET">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name">
            <label for="place">Place:</label>
            <input type="text" id="place" name="place">
            <button id="submit-button" type="submit">Submit</button>
        </form>
    </div>
</div>
<?php
include __DIR__ . '/tpl/body_end.php';
?>

