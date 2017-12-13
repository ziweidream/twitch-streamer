$(document).ready(function() {
  var array = [
    "ESL_SC2",
    "OgamingSC2",
    "cretetion",
    "freecodecamp",
    "storbeck",
    "habathcx",
    "RobotCaleb",
    "noobs2ninjas"
  ];

  for (var i = 0; i < array.length; i++) {
    (function(i) {
      $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + array[i] + "?callback=?", function(data) {
        if (data["stream"] == null) {
          $("#resultOffline").append('<li class="list-group-item" style="list-style: none; font-size:18px;"><img src="http://res.cloudinary.com/dbsgnowkn/image/upload/v1509016128/twitch-offline_q4qmpo.jpg" class="img-circle" width="30" height="30"/><a target="_blank" href="https://go.twitch.tv/' + array[i] + '"' + ">" + array[i] + '</a><span class="badge">offline</span></li>');
        } else {
          $("#resultOnline").css("background-color", "#99ff66");
          $("#resultOnline").append('<li class="list-group-item list-group-item-success" style="list-style: none; font-size:18px;"><img src="' + data.stream.channel.logo + '"' + 'class="img-circle" width="30" height="30"/><a  target="_blank" href="https://go.twitch.tv/' + array[i] + '"' + ">" + array[i] + "   " + data.stream.game + ":     " + data.stream.channel.status + '</a><span class="badge badge-success">online</span></li>');
        }
      });
    })(i);
  }

  $(document).ready(function() {
    $("#all").click(handlerAll);
  });

  function handlerAll() {
    document.getElementById("resultOnline").style.display = "block";
    document.getElementById("resultOffline").style.display = "block";
  }

  $(document).ready(function() {
    $("#online").click(handlerOnline);
  });

  function handlerOnline() {
    document.getElementById("resultOnline").style.display = "block";
    document.getElementById("resultOffline").style.display = "none";
  }

  $(document).ready(function() {
    $("#offline").click(handlerOffline);
  });

  function handlerOffline() {
    document.getElementById("resultOffline").style.display = "block";
    document.getElementById("resultOnline").style.display = "none";
  }
});
