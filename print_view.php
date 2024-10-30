<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" lang="en-US">
<head profile="http://gmpg.org/xfn/11">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title><?php wp_title('&laquo;', true, 'right'); ?> <?php bloginfo('name'); ?></title>
<style type="text/css">
* {
	padding: 0;
	margin: 0;
}

body {
	text-align: center;
	font-size: 62.5%;
	background: #fff;
	color: #3A3A3A;
	padding: 0;
	font-family: 'Lucida Sans Unicode', 'Lucida Grande';
}

div, p, ul, ol, li, dl, h1, h2, h3, h4, h5, h6, table, pre, form {
	float: left;
	clear: both;
	width: 100%;
}

table {
	border-collapse: collapse;
}

a {
	text-decoration: none;
	outline: none;
}

a:hover {
	text-decoration: underline;
}

.display_toggle {
	position: absolute;
	top: 10px;
	left: 15px;
}

.print_view {
	position: absolute;
	top: 10px;
	right: 15px;
}

.large_calendar_month {
	font-size: 1.6em;
	padding: 10px 0;
	color: #fff;
	width: 100%;
	text-align: center;
	background: #B8B8B8;
	margin: 0 0 3px 0;
	float: left;
	position: relative;
}

.large_calendar_month span {
	margin: 0 10px;
}

.large_calendar_month a {
	color: #fff;
}

.large_calendar caption, .weekly_large_calendar caption {
	padding: 15px 0;
}

.large_calendar th, .weekly_large_calendar th {
	width: 127px;
	background: #6B6B6B;
	color: #fff;
	padding: 4px 0;
	text-align: center;
	border: solid #fff;
	border-width: 0 1px;
}

.weekly_large_calendar th a {
	color: #fff;
}

.weekly_large_calendar th {
	width: 122px;
}

.weekly_large_calendar th.hour_column {
	width: 75px;
}

.print_calendar_page .large_calendar th, .print_calendar_page .weekly_large_calendar th {
	background: #C9C9C9;
	color: 000;
	border: 1px solid #000;
}

.large_calendar td, .weekly_large_calendar td {
	vertical-align: top;
	border: 1px solid #fff;
	background: #efeeee;
	padding: 3px;
	text-align: left;
}

.print_calendar_page .large_calendar td, .print_calendar_page .weekly_large_calendar td {
	background: #fff;
	border: 1px solid #000;
}

.large_calendar td.blank_cell, .weekly_large_calendar td.blank_cell {
	background: #dfdfdf;
}

.print_calendar_page .large_calendar td.blank_cell, .print_calendar_page .weekly_large_calendar td.blank_cell {
	background: #fff;
}

.large_calendar td, .weekly_large_calendar td {
	font-size: 11px;
	padding: 0 2px;
}

.large_cal_day a {
	padding: 0 2px;
	color: #c76328;
}

.large_cal_day a:hover {
	text-decoration: none;
	background: #c76328;
	color: #fff;
}

.large_entry {
	margin: 0 0 5px;
}

.large_entry a {
	color: #363636;
	display: block;
	width: 100%;
}
</style>
</head>
<body>
<div>
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
			
			<?php the_content(); ?>


<?php endwhile; endif; ?>
</div>
</body>
</html>