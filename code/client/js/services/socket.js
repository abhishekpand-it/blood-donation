angular.module('bdms').factory('Socket', ['$rootScope', function ($rootScope) {
	var server = io.connect();
	['donatorCreated', 'donatorChanged', 'donatorRemoved'].forEach(function (event) {
		server.on(event, function (data) {
			if(event == 'donatorCreated'){
				$("#notification").html('');
				$("#notification").fadeIn("slow").append('Thanks. Your details has been listed.').delay(1000).fadeOut("slow");
			}
			if(event == 'donatorChanged'){
				$("#notification").html('');
				$("#notification").fadeIn("slow").append('Your details has been modified.').delay(1000).fadeOut("slow");
			}
			if(event == 'donatorRemoved'){
				$("#notification").html('');
				$("#notification").fadeIn("slow").append('Your details has been removed.').delay(1000).fadeOut("slow");
			}
			$(".dismiss").click(function(){
				$("#notification").html('');
			       $("#notification").fadeOut("slow");
			});
			$rootScope.$emit('Socket.' + event, data);
		});
	});
	return {
		on: function(event, callback) {
			server.on(event, function() {
				var args = arguments;
				$rootScope.$apply(function () {
					callback.apply(server, args);
				});
			});
		},
		emit: function(event, data, callback) {
			server.emit(event, data, function () {
				var args = arguments;
				$rootScope.$apply(function () {
					if (callback) {
						callback.apply(server, args);
					}
				});
			});
		}
	};
}]);
