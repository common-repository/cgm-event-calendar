function change_repeat_interval() {
	var indexNum = document.getElementById('repeat_interval').selectedIndex;
	var selected_value = document.getElementById('repeat_interval')[indexNum].value;
	if (selected_value == "days of week") {
		jQuery('#these_relative_days').hide(500);
		jQuery('#repeat_options').show(500);
		jQuery('#days_of_week').show(500);
	} else if (selected_value == "these relative days") {
		jQuery('#days_of_week').hide(500);
		jQuery('#repeat_options').show(500);
		jQuery('#these_relative_days').show(500);	
	} else {
		jQuery('#repeat_options').hide(500);
	}
}

function add_include_date() {
	var new_date = jQuery('#include_dates').attr('value');
	if (new_date == null || new_date == '') return false;
	var include_yearly = jQuery('#include_every_year').attr('checked');
	if (include_yearly) {
		new_date = new_date + ' 1';
	} else {
		new_date = new_date + ' 0';
	}

	var list = document.getElementById('include_dates_select');
	for(var i = 0; i < list.options.length; ++i) {
		var option_val = list.options[i].value;
		if (option_val == '') {
			list.remove(i);
		}
	}

	jQuery('#include_dates_select').addOption(new_date, new_date);
	jQuery("#include_dates_select").sortOptions()
	jQuery('#include_dates').attr('value', '');
	jQuery('#include_every_year').attr('checked', false);
	return false;
}

function add_exclude_date() {
	var new_date = jQuery('#exclude_dates').attr('value');
	if (new_date == null || new_date == '') return false;
	var include_yearly = jQuery('#exclude_every_year').attr('checked');
	if (include_yearly) {
		new_date = new_date + ' 1';
	} else {
		new_date = new_date + ' 0';
	}

	var list = document.getElementById('exclude_dates_select');
	for(var i = 0; i < list.options.length; ++i) {
		var option_val = list.options[i].value;
		if (option_val == '') {
			list.remove(i);
		}
	}

	jQuery('#exclude_dates_select').addOption(new_date, new_date);
	jQuery("#exclude_dates_select").sortOptions() 
	jQuery('#exclude_dates').attr('value', '');
	jQuery('#exclude_every_year').attr('checked', false);
	return false;
}

function remove_include_date() {
	jQuery("#include_dates_select").removeOption(/./, true);
	return false;
}

function remove_exclude_date() {
	jQuery("#exclude_dates_select").removeOption(/./, true);
	return false;
}

jQuery(document).ready(function($) {	
 	$('#repeat_forever').click(function() {
    	$('#expiration_date_time').attr('value', '');
    });
	
	$('#expiration_date_time').focus(function() {
    	$('#repeat_forever').removeAttr('checked');
    });

	$('#repeat_interval').change( function () {
		if ($(this).val() == 'these relative days') {
			$('#days_of_week :input').attr('disabled', true);
			$('#days_of_week label').addClass('disabled');
			$('#days_of_week th').addClass('disabled');
			$('#these_relative_days :input').removeAttr('disabled');
			$('#these_relative_days label').removeClass('disabled');
			$('#these_relative_days th').removeClass('disabled');
		} else if ($(this).val() == 'days of week') {
			$('#days_of_week :input').removeAttr('disabled');
			$('#days_of_week label').removeClass('disabled');
			$('#days_of_week th').removeClass('disabled');
			$('#these_relative_days :input').attr('disabled', true);
			$('#these_relative_days label').addClass('disabled');
			$('#these_relative_days th').addClass('disabled');
		} else {
			$('#days_of_week :input').attr('disabled', true);
			$('#days_of_week label').addClass('disabled');
			$('#days_of_week th').addClass('disabled');
			$('#these_relative_days :input').attr('disabled', true);
			$('#these_relative_days label').addClass('disabled');
			$('#these_relative_days th').addClass('disabled');
		}
	});

	$(".date_input").datepicker({
		showButtonPanel: true
	});
});