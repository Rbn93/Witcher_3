
    $( document ).ready( function() {

        quests = [];

        $.getJSON( "data/quests.json", function( quests_json ) { 

            quests = quests_json;

            $.each( quests, function() {

                append_quest( this );

            } );

            $( "#quests" ).show();

        } );

        $( "#location_filter" ).change( filter );

        $( "#type_filter" ).change( filter );

        $( "#level_filter" ).change( filter );

        $( "#clear_level_filter" ).click( function() {

            $( "#level_filter" ).val( "" );

            filter();

        } );

        $( "th.long" ).hover( function() {

            $( "#quests_info" ).stop().fadeIn( 600 );

        }, function() {

            $( "#quests_info" ).stop().fadeOut( 600 );

        } );

        $( "#footer" ).click( function() {

            $( this ).css( "display", "none" );

        } );

    } );
