// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .



jQuery(function($) {

    // Hook up our vote handlers
    $("a.vote").live('click', voteClick);

    function voteClick(event) {
        var voteLink, voteType, item, itemId;

        // Regardless of the below, we handle the event, so "consume" it
        event.stopPropagation();
        event.preventDefault();

        // Get the anchor element, wrapped in a jQuery instance
        voteLink = $(this);

        // See if the vote has already been done or is in progress
        if (voteLink.hasClass('done') || voteLink.hasClass('inprogress')) {
            // Ignore the click, possibly tell the user why
            return;
        }

        // Get the vote type
        voteType = voteLink.hasClass('up') ? 'up' : 'down';

        // Get the item we're voting on
        item     = voteLink.closest('.article');

        // Get its ID
        itemId   = item.attr('data-itemid');

        // If we didn't get an ID...
        if (!itemId) {
            // ...report error
            return;
        }

        // Mark "in progress" and initiate the vote; action continues
        // in our callbacks below
        voteLink.addClass('inprogress');
        $.ajax({
            url:     'savevote',
            data:    {itemId: itemId, voteType: voteType},
            type:    'POST',
            success: votePostSuccess,
            error:   votePostError
        });

        // Called when the POST is successful
        function votePostSuccess(response) {
            // The POST worked
            voteLink.removeClass('inprogress');

            // Did things work on the server?
            if (response === "ok") { // Or whatever
                // Yes, the vote was successfully recorded
                voteLink.addClass('done');
            }
            else {
                // Report an error to the user, the server couldn't record the vote
            }
        }

        // Called when the POST fails for some reason (HTTP errors)
        function votePostError(xhr, statusText, err) {
            // Not in progress anymore
            voteLink.removeClass('inprogress');

            // Report error to user
        }
    }
});
