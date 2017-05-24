
    $( document ).ready( function() {

        quests = [];
        
        $.getJSON( "data/quests.json", function( quests_json ) {
            
            quests = quests_json;
    
            $.each( quests, function() {
                
                append_quest( this );
            
            } );
            
            $( "div#quests" ).show();

        } );
        
        $( "select#location_filter" ).change( filter_by_location );
        
        $( "select#type_filter" ).change( filter_by_type );
        
        $( "input#level_filter" ).change( filter_by_level );
        
        $( "button#clear_level_filter" ).click( function() {
            
            $( "input#level_filter" ).val( "" )
            
            filter_by_level();
            
        } );
        
        $( "th.long" ).hover( function() {
            
            $( "p.info_text" ).stop().fadeIn( 600 );
            
        }, function() {
            
            $( "p.info_text" ).stop().fadeOut( 600 );
            
        } );
        
        $( "footer#footer" ).click( function() {
            
            $( this ).css( "display", "none" );
            
        } );
        
    } );