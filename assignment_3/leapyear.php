<?php
/* Header */
$page_title = 'Webprogramming Assignment 3';
$navigation = Array(
    'active' => 'Leap Year',
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

<h1 class="welcome-name">Welcome, <?php echo $_POST['name'];?></h1>
<?php
if ($_POST['validationCustom04'] === 'Groningen') {
    echo 'Nice, you are living in Groningen';
}
?>

<div class="row">
    <div class="col-12">
        <form action="leapyear.php" method="POST">
            <div class="form-row">
                <div class="col-md-4 mb-3">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" name="name" placeholder="Your name" required>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <label for="validationCustom02">Age</label>
                    <input type="number" class="form-control" id="validationCustom02" placeholder="Age" required>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>

            </div>
            <div class="form-row">
                <div class="col-md-4 mb-3">
                    <label for="validationCustom03">Mail address</label>
                    <input type="email" class="form-control" id="validationCustom03" placeholder="mail@example.com" required>
                    <div class="invalid-feedback">
                        Please provide a valid email address.
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <label for="validationCustom04">Place</label>
                    <input type="text" class="form-control" id="validationCustom04" placeholder="Place" required>
                    <div class="invalid-feedback">
                        Please provide a valid place.
                    </div>
                </div>

            </div>
            <button class="btn btn-primary" type="submit">Submit form</button>
        </form>
    </div>
</div>
<?php
include __DIR__ . '/tpl/body_end.php';
?>

