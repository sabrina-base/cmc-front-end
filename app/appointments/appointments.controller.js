(function() {
  'use strict';

  angular
    .module('app.core')
    .controller('AppointmentsController', AppointmentsController);

  AppointmentsController.$inject = ['SweetAlert', 'appointmentsFactory', '$stateParams'];

  /* @ngInject */
  function AppointmentsController(SweetAlert, appointmentsFactory, $stateParams) {
    var vm = this;

    vm.confirm = confirm;
    vm.decline = decline;
    vm.renderCalendar = renderCalendar;

    vm.schedule = function schedule() {
      appointmentsFactory
        .schedule()
        .then(function(data) {
          console.log(data);
          vm.appointments = data;
        });
    }

    activate();

    function activate() {
      // appointmentsFactory
      //   .getAll()
      //   .then(function(data) {
      //     console.log(data);
      //     vm.appointments = data;
      //   })
      //   .catch(function(error) {
      //     console.error(error);
      //   });
    }

    function confirm(appointment) {
      // 1. set the value
      appointment.confirmedDate = new Date();

      appointmentsFactory
        .update(appointment.appointmentId, appointment)
        .then(function() {
          SweetAlert.swal('Appointment Confirmed!', 'This appointment will now appear on your schedule', 'success');
        });
    }

    function decline(appointment) {
      appointment.denyDate = new Date();

      SweetAlert.swal({
          title: "Are you sure?",
          text: `Declining will remove this appointment from your request record`,
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Decline",
          cancelButtonText: " Cancel",
          closeOnConfirm: false,
          closeOnCancel: false
        },

        function(isConfirm) {
          if (isConfirm) {
            appointmentsFactory
              .update(appointment.customerId, appointment)
              .then(function() {
                SweetAlert.swal("Declined!", "This appoiment has been removed from your profile", "success");
              })
          } else {
            SweetAlert.swal("Cancelled", "This appointment request is still availble", "error");
          }
        });

    }

    function renderCalendar() {
      $("#calendar").fullCalendar('render');
    };

    function getEvents(start, end, timezone, callback) {
      appointmentsFactory
        .getAll()
        .then(function(events) {
          //Sabrina - Data is massaged client side
          callback(events.map(appointment => ({
            title: appointment.customerId,
            start: moment(appointment.appointmentDate).toDate(),
            end: moment(appointment.appointmentDate).toDate(),
            allDay: true,
            stick: true
          })));
        });
    }

    vm.calendar = {
      options: {
        height: 800,
        defaultView: 'month',
        editable: false,
        header: {
          left: 'title',
          right: 'today prev,next'
        }
      },
      eventSources: [
        getEvents
      ]
    };

    // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_filter2
    //         function filterYear(appointments) {
    //         return appointments >= document.getElementById("ageToCheck").value;
    //          }

    //          function myFunction() {
    //          document.getElementById("demo").innerHTML = ages.filter(checkAdult);
    //          }
    //         //filter by Year
    //         vm.yearToDate = function(appointments){
    //         return appointments with with same year before today;
    //         }
    //       //filter by Month
    //         vm.lowPri = function(){
    //         vm.sort = "priority";
    //         }
    //       //order by alphabetical
    //         vm.az = function(){
    //         vm.sort = "task";
    //         }
  }
})();
