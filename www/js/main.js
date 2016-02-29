var base_uri="https://api.fitbit.com/1/user/-/";
$(document).on("pagecreate","#pageone",function(){
	
});
$(document).on("pageshow","#heartrate",function(){
		$.ajax({
		  type: 'GET',
		  url: base_uri+'heart/date/today.json',
		  crossDomain: true,
		  beforeSend: function(xhr) {
			xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0NTcyNzA5ODQsInNjb3BlcyI6Indwcm8gd2xvYyB3bnV0IHdzbGUgd3NldCB3aHIgd3dlaSB3YWN0IHdzb2MiLCJzdWIiOiIzVDZXODQiLCJhdWQiOiIyMjdINkIiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJpYXQiOjE0NTY2NjYxODR9.FSaih_b--dnThSepMd5zdqoChqbYWDKe5sDsJ7mjkfA');
		  },
		  success:function(data){
			$.each( data.average, function( key, val ) {
				var tag="<tr><td>"+val.tracker+"</td><td>"+val.heartRate+"</td></tr>";
				$(tag).appendTo("table tbody");
			});
		  }
		});
});
$(document).on("pageshow","#activity",function(){
	$.ajax({
		  type: 'GET',
		  url: base_uri+'activities/date/today.json',
		  crossDomain: true,
		  beforeSend: function(xhr) {
			xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0NTcyNzA5ODQsInNjb3BlcyI6Indwcm8gd2xvYyB3bnV0IHdzbGUgd3NldCB3aHIgd3dlaSB3YWN0IHdzb2MiLCJzdWIiOiIzVDZXODQiLCJhdWQiOiIyMjdINkIiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJpYXQiOjE0NTY2NjYxODR9.FSaih_b--dnThSepMd5zdqoChqbYWDKe5sDsJ7mjkfA');
		  },
		  success:function(data){
			var val= data.goals
				var tag="<tr><td>Active Minutes</td><td>"+val.activeMinutes+"</td></tr>";
				tag+="<tr><td>Calories Out</td><td>"+val.caloriesOut+"</td></tr>";
				tag+="<tr><td>Distance</td><td>"+val.distance+"</td></tr>";
				tag+="<tr><td>Steps</td><td>"+val.steps+"</td></tr>";
				$(tag).appendTo("table tbody");
		  }
		});
});