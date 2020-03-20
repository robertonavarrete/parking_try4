$('#ticket_events_attributes_0_lot_id').change(function(){
    console.log("aca se cambió algo")
    $('#calendar').fullCalendar('refetchEvents')
})