<?php
$wp_list = Array(
    'Week 1' => 'No lecture',
    'Week 2' => 'Assignment 1',
    'Week 3' => 'No lecture',
    'Week 4' => 'Assignment 2',
    'Week 5' => '-',
    'Week 6' => 'Assignment 3',
    'Week 7' => 'Final Project');
foreach ($wp_list as $week => $content){
    echo sprintf("%7s | %15s<br>", $week, $content);
}
?>
