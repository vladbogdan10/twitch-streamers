function createURL() {
    var usernames = ["ESL_SC2", "OgamingSC2", "summit1g", "freecodecamp", "Dota2RuHub", "riotgames", "shroud", "LIRIK"];
    var url = 'https://wind-bow.gomix.me/twitch-api/streams/';
    var callback = '?callback=jsonData';
    var fullURL;

    function getJSONP() {
        //Create a SCRIPT element.
        var script = document.createElement('script');

        //Set the Type.
        script.type = 'text/javascript';

        //Set the source to the url the JSON Service.
        script.src = fullURL;

        //Append the script element to the HEAD section.
        document.getElementsByTagName('head')[0].appendChild(script);
    }

    usernames.forEach(function(users) {
        fullURL = url + users + callback;
        getJSONP();
    });
}


function jsonData(data) {
    console.log(data);

    var userName = data._links.self.substring(37);
    var offLink = 'https://www.twitch.tv/' + userName;
    var streamStatus = data.stream;
    var cardOn, cardOff;


    if (streamStatus === null) {

        cardOff = '<div class="col-lg-6"><a href="' + offLink + '" target="_blank"><div class="card"><div class="row"><div class="col-2"><div class="status" id="offline" style="background-color: crimson;"></div><img src="twitch-logo.png" class="rounded" style="width: 120px;"></div> <div class="col-10 channel-info"><p><span>' + userName + ':</span>&nbsp; Currently not streaming...</p><p><span>Game:</span>&nbsp; -</p></div></div></div></a></div>';

        document.getElementById('all-cards').innerHTML += cardOff;
        document.querySelector('#offline-cards').innerHTML += cardOff;

    } else if (streamStatus !== null) {

        var status = data.stream.channel.status;

        if (status.length >= 80) {
            status = data.stream.channel.status.substring(0, 80) + '...';
        } else {
            status = data.stream.channel.status;
        }


        cardOn = '<div class="col-lg-6"><a href="' + data.stream.channel.url + '" target="_blank"><div class="card"><div class="row"><div class="col-2"><div class="status" id="online" style="background-color: lawngreen;"></div><img src="'+ data.stream.channel.logo +'" class="rounded" style="width: 120px;"></div><div class="col-10 channel-info"><p><span>' + data.stream.channel.display_name + ':</span>&nbsp; ' + status + '</p><p><span>Game:</span>&nbsp; ' + data.stream.channel.game + '</p></div></div></div></a></div>';

        document.getElementById('all-cards').innerHTML += cardOn;
        document.getElementById('online-cards').innerHTML += cardOn;

    }

}


$('#carouselExampleControls').on('slide.bs.carousel', function (e) {
    var slideTo = $(e.relatedTarget).index();

    if (slideTo === 0) {
        document.getElementById('footer').className = 'footer-orange';
    } else if (slideTo === 1) {
        document.getElementById('footer').className = 'footer-green';
    } else {
        document.getElementById('footer').className = 'footer-red';
    }
});

/*
document.querySelector('#carouselExampleControls').addEventListener('slide.bs.carousel', function(e) {
    // body...
    var slideTo = $(e.relatedTarget).index();

    if (slideTo === 0) {
        document.getElementById('footer').className = 'footer-orange';
    } else if (slideTo === 1) {
        document.getElementById('footer').className = 'footer-green';
    } else {
        document.getElementById('footer').className = 'footer-red';
    }
});
*/

createURL();

/* data.stream.channel.url */