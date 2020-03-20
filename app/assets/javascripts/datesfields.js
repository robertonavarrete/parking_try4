$(document).ready(function(){
    $('#estimate').on('click',function(){
        var init_date = $('#init_date_picker').data("datetimepicker").getDate()
        var end_date = $('#end_date_picker').data("datetimepicker").getDate()
        var difference = end_date.getTime() - init_date.getTime()
        var days = Math.round(difference/ (1000*60*60*24))
            $('h3').html('')
            $('h3').html('son'+days+'dias').slideDown(8000)
    })
    var f = new Date();
    $('#init_date_picker').datetimepicker({
        minView: 2,
        fontAwesome: true,
        format: 'dd-MM-yyyy',
        autoclose: true,
        language: 'es',
        weekStart: 1,
        startDate: f,
        icons: {
            time: 'fa fa-clock-o',
            date: 'fa fa-calendar',
            up: 'fa fa-chevron-up',
            down: 'fa fa-chevron-down',
            previous: 'fa fa-chevron-left',
            next: 'fa fa-chevron-right',
            today: 'glyphicon glyphicon-screenshot',
            clear: 'fa fa-trash',
            close: 'fa fa-times'
        }
    })

    $('#end_date_picker').datetimepicker({
        useCurrent: false, //Important! See issue #1075
        minView: 2,
        format: 'dd-MM-yyyy',
        autoclose: true,
        language: 'es',
        weekStart: 1,
        startDate: f,
        icons: {
            time: 'fa fa-clock-o',
            date: 'far fa-calendar-alt',
            up: 'fa fa-arrow-up',
            down: 'fa fa-arrow-down'
            }
    });

    
    $("#init_date_picker").on("changeDate", function (e) {
        $('#end_date_picker').datetimepicker('setStartDate',$("#init_date_picker").val());
    });

    $("#end_date_picker").on("changeDate", function (e) {
        $('#init_date_picker').datetimepicker('setEndDate',$("#end_date_picker").val());
    });
        
    })
    