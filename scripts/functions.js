    
    function append_quest( quest ) {
            
        $( "#quests_table tbody" ).append( "<tr><td>" + quest.location + "</td>" +
                                           "<td>" + quest.type + "</td>" +
                                           "<td class='short'>" + quest.level + "</td>" +
                                           "<td class='long'>" + quest.name + "</td></tr>" );
        
    }

    function filter_by_location() {
        
        preparations();
        
        $.each( quests, function() {
            
            switch ( location_filter_val ) {
                
                case this.location:
                
                    if ( ( type_filter_val === this.type && level_filter_val == this.level )
                        || ( type_filter_val === this.type && level_filter_val == "*" )
                        || ( type_filter_val === "*" && level_filter_val == this.level )
                        || ( type_filter_val === "*" && level_filter_val == "*" ) ) {
                        
                        append_quest( this );
                        matches++;
                        
                    }

                    break;
                    
                case "*":
                
                    if ( ( type_filter_val === this.type && level_filter_val == this.level )
                        || ( type_filter_val === this.type && level_filter_val == "*" )
                        || ( type_filter_val === "*" && level_filter_val == this.level )
                        || ( type_filter_val === "*" && level_filter_val == "*" ) ) {
                        
                        append_quest( this );
                        matches++;
                        
                    }

                    break;
                
            }
                
        } );
        
        if ( matches === 0 ) {
            
            $( "#quests_table tbody" ).append( "<tr><td colspan='4'>No matches found.</td></tr>" );
            
        }
        
    }
    
    function filter_by_type() {
        
        preparations();
        
        $.each( quests, function() {
            
            switch ( type_filter_val ) {
                
                case this.type:
                
                    if ( ( location_filter_val === this.location && level_filter_val == this.level )
                        || ( location_filter_val === this.location && level_filter_val == "*" )
                        || ( location_filter_val === "*" && level_filter_val == this.level )
                        || ( location_filter_val === "*" && level_filter_val == "*" ) ) {
                        
                        append_quest( this );
                        matches++;
                        
                    }

                    break;
                    
                case "*":
                
                    if ( ( location_filter_val === this.location && level_filter_val == this.level )
                        || ( location_filter_val === this.location && level_filter_val == "*" )
                        || ( location_filter_val === "*" && level_filter_val == this.level )
                        || ( location_filter_val === "*" && level_filter_val == "*" ) ) {
                        
                        append_quest( this );
                        matches++;
                        
                    }

                    break;
                
            }
                
        } );
        
        if ( matches === 0 ) {
            
            $( "#quests_table tbody" ).append( "<tr><td colspan='4'>No matches found.</td></tr>" );
            
        }
        
    }
    
    function filter_by_level() {
        
        preparations();
        
        $.each( quests, function() {
            
            switch ( level_filter_val ) {
                
                case this.level:
                
                    if ( ( location_filter_val === this.location && type_filter_val === this.type )
                        || ( location_filter_val === this.location && type_filter_val === "*" )
                        || ( location_filter_val === "*" && type_filter_val === this.type )
                        || ( location_filter_val === "*" && type_filter_val === "*" ) ) {
                        
                        append_quest( this );
                        matches++;
                        
                    }
                    
                    break;
                    
                case "*":
                
                    if ( ( location_filter_val === this.location && type_filter_val === this.type )
                        || ( location_filter_val === this.location && type_filter_val === "*" )
                        || ( location_filter_val === "*" && type_filter_val === this.type )
                        || ( location_filter_val === "*" && type_filter_val === "*" ) ) {
                        
                        append_quest( this );
                        matches++;
                        
                    }

                    break;
                    
            }
                
        } );
        
        if ( matches === 0 ) {
            
            $( "#quests_table tbody" ).append( "<tr><td colspan='4'>No matches found.</td></tr>" );
            
        }
        
    }
    
    function preparations() {
        
        location_filter_val = $( "select#location_filter" ).val();
        type_filter_val = $( "select#type_filter" ).val();
        level_filter_val = $( "input#level_filter" ).val();
        matches = 0;
        
        switch ( level_filter_val ) {
            
            case "":
            
                level_filter_val = "*";
                
                break;
            
            case "0":
            
                level_filter_val = "None";
                
                break;
            
            default:
            
                level_filter_val = parseInt( level_filter_val );
            
        }
        
        $( "#quests_table tbody" ).html( "" );
        
    }
    