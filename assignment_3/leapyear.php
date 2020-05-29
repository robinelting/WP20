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

<h1 class="welcome-name"><?php
    if (isset($_POST['name'])) {
        $name = $_POST['name'];
        echo "Welcome, $name";
    } else {
        $name = "";
    }
    ?></h1>
<p class="city"><?php
    if (isset($_POST['place'])) {
        $city = $_POST['place'];
        if ($city == "Groningen") {
            echo "Nice, you're from Groningen!";
        }
    } else {
        $city = "";
    }
    ?></p>
<div class="table1">
    <h4>The next 5 leap years, this will be your age!</h4>
    <table>
        <tr>
            <th>Year</th>
            <th>Age</th>
        </tr>
        <tr>
            <td>2025</td>
            <td><?php
                if (isset($_POST['age'])) {
                    $age = $_POST['age'];
                    echo $age + 5;
                }
                ?></td>
        </tr>
        <tr>
            <td>2030</td>
            <td><?php
                if (isset($_POST['age'])) {
                    $age = $_POST['age'];
                    echo $age + 10;
                }
                ?></td>
        </tr>
        <tr>
            <td>2035</td>
            <td><?php
                if (isset($_POST['age'])) {
                    $age = $_POST['age'];
                    echo $age + 15;
                }
                ?></td>
        </tr>
        <tr>
            <td>2040</td>
            <td><?php
                if (isset($_POST['age'])) {
                    $age = $_POST['age'];
                    echo $age + 20;
                }
                ?></td>
        </tr>
        <tr>
            <td>2045</td>
            <td><?php
                if (isset($_POST['age'])) {
                    $age = $_POST['age'];
                    echo $age + 25;
                }
                ?></td>
        </tr>
        <tr>
            <td>2050</td>
            <td><?php
                if (isset($_POST['age'])) {
                    $age = $_POST['age'];
                    echo $age + 30;
                }
                ?></td>
        </tr>

    </table>
</div>
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
                    <label for="age">Age</label>
                    <input type="number" class="form-control" id="age" name="age" placeholder="Age" required>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>

            </div>
            <div class="form-row">
                <div class="col-md-4 mb-3">
                    <label for="mail">Mail address</label>
                    <input type="email" class="form-control" id="mail" placeholder="mail@example.com" required>
                    <div class="invalid-feedback">
                        Please provide a valid email address.
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <label for="place">Place</label>
                    <input type="text" class="form-control" id="place" name="place" placeholder="Place" required>
                    <div class="invalid-feedback">
                        Please provide a valid place.
                    </div>
                </div>
            </div>
            <div id="submit" class="btn btn-primary">Submit form</div>
        </form>
    </div>
</div>
<?php
include __DIR__ . '/tpl/body_end.php';
?>

