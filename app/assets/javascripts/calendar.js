$(document).on('ready turbolinks:load', function(){
    var token = $( 'meta[name="csrf-token"]' ).attr( 'content' );
        $.ajaxSetup( {
            beforeSend: function ( xhr ) {
                xhr.setRequestHeader( 'X-CSRF-Token', token );
                }
        });

    $('#calendar').fullCalendar({
        events: '/lots/4/events.json',
        eventLimit: true,
        firstDay: 1,
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
          customButtons: {
            addEventButton: {
              text: 'Agregar evento...',
              click: function() {
                $.ajax({
                  url: '/lots/4/events/new',
                  type: 'GET',
                  dataType: 'script'
                })
              }
            }
          },
        eventDrop: function(event, delta, revertFunc) {
            if (event.start.format() < moment().format()){
                alert('no no no')
                revertFunc()
            }
            else {
                $.ajax({
                    url: '/lots/:lot_id/events/'+ event.id,
                    type: 'patch',
                    dataType: 'script',
                    data: {
                        event: {
                            start: event.date_parking_start.format() ,
                            end: event.date_parking_end.format() 
                        }
                    }
                })
            }
        },

        eventClick: function(event, jsEvent, view) {
                jsEvent.preventDefault()
                $.ajax({
                    url: '/lots/:lot_id/events/'+ event.id +'/edit',
                    type: 'GET',
                    dataType: 'script'
                })
            
        }

            
    })

})





