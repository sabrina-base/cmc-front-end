(function() {
    'use strict';

    angular
        .module('app.core')
        .controller('AppointmentsController', AppointmentsController);

    AppointmentsController.$inject = ['appointmentsFactory', '$stateParams'];

    /* @ngInject */
    function AppointmentsController(appointmentsFactory, $stateParams) {
        var vm = this;

        activate();

        function activate() {
            appointmentsFactory
                .getAll()
                .then(function(data) {
                    console.log(data);
                    vm.appointments = data;
                })
                .catch(function(error) {
                    console.error(error);
                });
        }

        function confirm() {
            customersFactory
                .update(vm.appointment.appointmentId, vm.appointment)
                .then(function() {
                    SweetAlert.swal('Customer Saved!', 'You are on fire today!', 'success');
                });
        }

        vm.renderCalendar = function() {
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
    }
})();
