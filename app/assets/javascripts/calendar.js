$(document).on('ready turbolinks:load', function(){
    $('#ticket_events_attributes_0_lot_id').change(function(){
        console.log(url_ev_1 + id_lot + url_ev_2 + url_ev_3)
        $('#calendar').fullCalendar('refetchEvents')
    })
    
    
    var id_lot = $('#ticket_events_attributes_0_lot_id').val();
    var token = $( 'meta[name="csrf-token"]' ).attr( 'content' );
        $.ajaxSetup( {
            beforeSend: function ( xhr ) {
                xhr.setRequestHeader( 'X-CSRF-Token', token );
                }
        });
    var url_ev_1 ="/lots/"
    var url_ev_2 ="/events"
    var url_ev_3 =".json"
    $('#calendar').fullCalendar({
        events: url_ev_1 + id_lot + url_ev_2 + url_ev_3,
        eventLimit: true,
        firstDay: 1,
        contentHeight: 350,
        aspectRatio: 1,
        views: {
                dayGrid: {
                    eventLimit: 1
                }
            },
        eventRender: function(event, element) {
                element.css("font-size", "1.2em");
                element.css("padding", "1.5em");
            },
        header: {
            center: 'addEventButton'
            },            
    })

})






