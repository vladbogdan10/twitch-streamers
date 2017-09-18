function createURL() {
    var usernames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
    var url = 'https://wind-bow.gomix.me/twitch-api/streams/';
    var callback = '?callback=jsonData';
    var fullURL;

    function getJSONP() {
        //Create a SCRIPT element.
        var script = document.createElement('script');

        //Set the Type.
        script.type = 'text/javascript';

        //Set the source to the URL the JSON Service.
        script.src = fullURL;

        //Append the script element to the HEAD section.
        document.getElementsByTagName('head')[0].appendChild(script);
    }

    usernames.forEach(function (users) {
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
    
    cardOn = '<div class="col-lg-6"><div class="card"><div class="row"><div class="col-4"><div class="status" id="online" style="background-color: lawngreen;"></div><img src="' + data.stream.channel.logo + '" class="rounded" style="width: 120px;"></div><div class="col-8 channel-info"><p><span>' + userName +':</span>&nbsp; Currently I/m not streaming</p><p><span>Game:</span>&nbsp; Super Mario Bros</p></div></div></div></div>'

    document.getElementById('all-cards').innerHTML += cardOn;

/*
    if (streamStatus === null) {

        cardOff = '<div class="col s12 m6 l4"><div class="card horizontal z-depth-1 fadeIn"><div class="row valign-wrapper"><div class="col s3"><img class="circle responsive-img off" src="images/twitch-icon.png"></div><div class="col s9"><div class="card-stacked"><div class="card-content"><p class="names">' + userName + '<span class="stat offline">Offline </span></p><br><p class="stream">Currently not streaming...</p></div><div class="card-action links"><a href="' + offLink + '" target="_blank">Go to my channel</a></div></div></div></div></div></div>';

        document.getElementById('all-tab').innerHTML += cardOff;
        document.getElementById('offline-tab').innerHTML += cardOff;

    } else if (streamStatus !== null) {

        var status = data.stream.channel.status;

        if (status.length > 20) {
            status = data.stream.channel.status.substring(0, 30) + '...';
        } else {
            status = data.stream.channel.status;
        }

        

    }
    */
}

createURL();


/*  

var userCards = '<div class="col-lg-6"><div class="card"><div class="row"><div class="col-4"><div class="status" id="online" style="background-color: lawngreen;"></div><img src="" class="rounded" style="width: 120px;"></div><div class="col-8 channel-info"><p><span>Channel:</span>&nbsp; Currently I/m not streaming</p><p><span>Game:</span>&nbsp; Super Mario Bros</p></div></div></div></div>'

*/
