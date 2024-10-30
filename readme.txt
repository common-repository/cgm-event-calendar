=== CGM Event Calendar ===
Contributors: Ryan Farrell
Tags: calendar, events, classes, events calendar
Requires at least: 2.8
Tested up to: 3.0
Stable tag: 0.8.5

Creates a classes and events calendar for your site.  Handles repeating entries and provides multiple views.

== Description ==
Add an event calendar to your website!  Great for fitness centers, community centers, organizations of any size.  Create event categories for easy sorting.

More info:

* View a demo here: http://www.creativegraymatter.com/calendar

* For more information check out http://www.creativegraymatter.com/blog/wordpress-events-calendar

== Screenshots ==

1. Event Entry
2. Monthly Calendar View


== Installation ==

Download, Upgrading, Installation:

**Install**

1. Unzip the `cgm_calendar.zip` file. 
1. Upload the the `cgm_calendar` folder (not just the files in it!) to your `wp-contents/plugins` folder. If you're using FTP, use 'binary' mode.

**Activate**

1. In your WordPress administration, go to the Plugins page
1. Activate the CGM Calendar plugin and a subpage for CGM Calendar will appear
   in your Settings menu and also as its own menu.

**Display**

There are three ways to show the calendar on your site.

1. Go to Settings -> CGM Calendar and change the settings to what to you.  Set the page name to the url you want to display the calendar and visit http://www.yoursiteurl.com/pagename and it will appear. No page or post creation required
1. Add the short code [cgm-event-calendar] to your page or post content you wish to display the calendar
1. Use the php function call <?php cgm_event_calendar(); ?> to display the calendar where you wish.

To display upcoming events

1. Go to Settings -> CGM Calendar and set the Calendar URL to the full url where the calendar resides.  Default would be http://www.yoururl.com/calendar
1. Modify the List Format setting if desired.  Note that you will still need to wrap any list in a ul/ol when called.
1. Use the function echo cgm_list_upcoming_events(array('num_events' => 5, 'tag_id' => '1,2')); and change the num_events to how many you want to show and the tag_id list to the tagged events, or remove it to show all.
1. You may also use the short code [cgm-upcoming-events num_events=10 tag_id=1,2] to display the list.

If you wish, you can override the default css and print view template by copying the files, calendar.css and print_view.php to the base of your template directory.

**Notice** 

Make sure your time zone is set correctly under Settings -> General or the calendar will be effected

If you find any bugs or have any ideas, please mail me. ryan at creativegraymatter dot com

== Changelog ==

= 0.8.5 = 
(3/31/2011)
* Fixed a bug where the month display would display the first day of the next month incorrectly


= 0.8.3 = 
(1/10/2011)
* Fixed a bug that caused additional days in month view to link to the wrong month (thanks BrentP)
* Possibly fixed error with uksort.

= 0.8.2 = 
(10/5/2010)
* Fixed a bug where events starting or ending in previous years could not be modified

= 0.8.1 = 
(10/5/2010)
* Fixed a bug where the end date of the upcoming events list would display the start date instead.

= 0.8.0 = 
(10/4/2010)
* Fixed bug with expiration date causing issue when repeat interval set to none.
* Removed links to daily events when there are none.

= 0.7.9 = 
(09/17/2010)
* Fixed error with events repeating under "these relative days" and the week view

= 0.7.8 = 
(09/17/2010)
* Upcoming events now go out 6 months looking for events.

= 0.7.7 = 
(08/04/2010)
* Added rel="nofollow" to navigation and blank cell links so that googlebot and other search engines don't index an infinite calendar.

= 0.7.6 = 
(08/03/2010)
* Added internationalization for the text.  Date formatting still to come.
* Fixed bug where multiple day event would not appear on later days on the daily view.
* Added two toggles in the settings page to turn off/on the Monthly/Weekly View option and the Print View option

= 0.7.5 = 
(07/30/2010)
* Removed the author from entries.  Hopefully this fixes the issue where events were not displaying in the admin panel
* Added check for date_default_timezone_set so that sites using php4 won't break.  (Note: I'm not sure the times will work right with Day Light Savings on php4)

= 0.7.4 = 
(07/22/2010)
* Bug Fix: When editing events and an error occurred, the start and end dates could reset.
* Bug Fix: On some servers, saving an event, could give an error about a default value for level
* Bug Fix: Blank page on event deletion
* Feature: Added option in settings page to display the sort by categories above the monthly and weekly views or not.


= 0.7.3 = 
(07/21/2010)
* Fixed bug when displaying the upcoming events list on sites w/o pretty urls


= 0.7.2 = 
(07/16/2010)
* Fixed bug when more than one [date] in the list format would not parse.

= 0.7.1 = 
(07/16/2010)
* Cleaned up the admin settings page and added some tips.

= 0.7 = 
(07/16/2010)
* Added ability to display upcoming events
* Fixed timezone bug

= 0.6.3.5 = 
(07/10/2010)
* Added setting field to change the page title.

= 0.6.3 = 
(07/10/2010)
* Fixed bug introduced in last release where admin panel javascript stopped working.

= 0.6.2.5 = 
(07/10/2010)
* Fixed bug where an expiration date on a none repeating event would cause the event to not appear

= 0.6.2 = 
(07/10/2010)
* Fixed bug where if the event expire date was less then the end of the month, the event would not show.

= 0.6.1 = 
(07/9/2010)
* Included jquery in header for sites that don't include it already.  Fixed some css issues to work better with the default twentyten theme and others.

= 0.6.0.5 = 
(07/9/2010)
* Fixed bug on sites not using pretty urls

= 0.6 = 
(07/9/2010)
* Added short code and php function as alternate ways to display the calendar.

= 0.5.0.1 = 
(07/8/2010)
* Fixed print view typo on line 266 - (thanks Jerome)
