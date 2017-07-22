
    function append_quest( quest ) {

        $( "#quests_table tbody" ).append( "<tr><td>" + quest.location + "</td>" +
                                           "<td>" + quest.type + "</td>" +
                                           "<td class='short'>" + quest.level + "</td>" +
                                           "<td class='long'>" + quest.name + "</td></tr>" );

    }

    function filter() {

        do_preparations();

        $.each( quests, function() {

            if ( filter_by_location( this ) && filter_by_type( this ) && filter_by_level( this ) ) {

                append_quest( this );
                matches_count++;

            }

        } );

        if ( matches_count === 0 ) append_no_matches();

    }

    function do_preparations() {

        get_filters_values();
        parse_level_filter_value();
        clean_table_body();
        initialize_matches_count();

    }

    function get_filters_values() {

        location_filter_val = $( "#location_filter" ).val();
        type_filter_val = $( "#type_filter" ).val();
        level_filter_val = $( "#level_filter" ).val();

    }

    function parse_level_filter_value() {

        if ( level_filter_val === "" ) {

            level_filter_val = "*";

        } else if ( level_filter_val === "0" ) {

            level_filter_val = "None";

        } else {

            level_filter_val = parseInt( level_filter_val );

        }

    }

    function clean_table_body() {

        $( "#quests_table tbody" ).html( "" );

    }

    function initialize_matches_count() {

        matches_count = 0;

    }

    function filter_by_location( quest ) {

        return location_filter_val === quest.location || location_filter_val === "*";

    }

    function filter_by_type( quest ) {

        return type_filter_val === quest.type || type_filter_val === "*";

    }

    function filter_by_level( quest ) {

        return level_filter_val === quest.level || level_filter_val === "*";

    }

    function append_no_matches() {

        $( "#quests_table tbody" ).append( "<tr><td colspan='4'>No matches found.</td></tr>" );

    }
