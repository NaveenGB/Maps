/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
    var myDB;
   var Latitude = "";
   var Longitude = "";
   var timeStamp = "";
   var TrackTime = "";
   var Speed = "";
   var UnitNo = "";
   var Direction = "";
   var GpsOdometer = "";
   var GPSStatus = "";
   var BuildVersion = "";
   //var Id=1;

   document.addEventListener("deviceready",onDeviceReady,false);
   function onDeviceReady(){
        myDB = window.sqlitePlugin.openDatabase({name: "mySQLite.db", location: 'default'});
    }

 function onSuccess(position) {
    
        Latitude=position.coords.latitude;
        Longitude=position.coords.longitude;
        timeStamp = position.timestamp;
        TrackTime = new Date();
        Speed=position.coords.speed;
        UnitNo="55";
        Direction ="0.0";
        GpsOdometer ="0.0";
        GPSStatus ="1";
        BuildVersion ="Testing"; 
       // Id =1;

  //  var text = '{"pollingData":[' +
   //             '{"UnitNo":"UnitNo","Latitude":"Latitude","Longitude":"Longitude","TrackTime": "TrackTime","Speed":"Speed","Direction":"Direction","GpsOdometer":"GpsOdometer","GPSStatus":"GPSStatus","BuildVersion":"BuildVersion","Id":"Id" },' +
     //           '{"UnitNo":"UnitNo","Latitude":"Latitude","Longitude":"Longitude","TrackTime": "TrackTime","Speed":"Speed","Direction":"Direction","GpsOdometer":"GpsOdometer","GPSStatus":"GPSStatus","BuildVersion":"BuildVersion","Id":"Id"}]}';


var pollingData = {};
var employees = []
pollingData.employees = employees;
//alert(pollingData);


//var firstName = "John";
//var lastName = "Smith";
var array1 = {
  "UnitNo": UnitNo,
  "Latitude": Latitude,
  "Longitude": Longitude,
  "TrackTime": TrackTime,
  "Speed": Speed,
  "Direction": Direction,
  "GpsOdometer": GpsOdometer,
  "GPSStatus": GPSStatus,
  "BuildVersion": BuildVersion,
 // "Id": Id
}
pollingData.employees.push(array1);
//alert(pollingData);
var myJSON = JSON.stringify(pollingData);
                //var obj = JSON.parse(text);
               // alert(obj.pollingData[0].UnitNo);
        //Google Maps
    var myLatlng = new google.maps.LatLng(Latitude,Longitude);
    var mapOptions = {zoom: 13,center: myLatlng}
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    var marker = new google.maps.Marker({position: myLatlng,map: map});
   //alert("Latitude" +Latitude);
    //localStorage.setItem('latitude', lat) ;
    //localStorage.setItem('longitude', lang) ;
   // alert("Longitude" +Longitude);
    //var date = new Date(timeStamp*1000);
    //alert(timeStamp);
     var mapDiv = document.getElementById("map_canvas");
  var map = plugin.google.maps.Map.getMap(mapDiv);

  map.addEventListener(plugin.google.maps.event.MAP_READY, function() {

      const HND_AIR_PORT = {"lat": 35.548852, "lng": 139.784086};
      const SFO_AIR_PORT = {"lat": 37.615223, "lng": -122.389979};
      map.addPolyline({
        points: [
          HND_AIR_PORT,
          SFO_AIR_PORT
        ],
        'color' : '#AA00FF',
        'width': 10,
        'geodesic': true
      });

  });
    
}



var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    

    // Update DOM on a Received Event

    
};

app.initialize();



function populateDB() {
        //     myDB.transaction(function(transaction) {
        // transaction.executeSql('CREATE TABLE IF NOT EXISTS phonegap_pro (id integer primary key, title text, desc text)', [],
        //     function(tx, result) {
        //         alert("Table created successfully");
        //     }, 
        //     function(error) {
        //           alert("Error occurred while creating the table.");
        //     });
        // });

    alert(UnitNo);

                        myDB.transaction(function(transaction) {
        transaction.executeSql('CREATE TABLE IF NOT EXISTS trackSystem1 (id integer primary key, unitNo integer, latitude real, longitude real, speed integer, trackTime text, direction real, gpsOdometer real, gpsStatus integer, buildVersion text)', [],
            function(tx, result) {
                alert("Table created successfully");
                insertValues();

            }, 
            function(error) {
                  alert("Error occurred while creating the table.");
            });
        });

      //   var title='testing1';
      // var desc='testing description1';
      // console.log(title +""+ desc);
      // myDB.transaction(function(transaction) {
      //       var executeQuery = "INSERT INTO phonegap_pro (title, desc) VALUES (?,?)";             
      //       transaction.executeSql(executeQuery, [title,desc]
      //           , function(tx, result) {
      //                alert('Inserted');
      //                viewData();
      //           },
      //           function(error){
      //                alert('Error occurred'); 
      //           });
      //   });

  //      myDB.transaction(function(transaction) {
  // transaction.executeSql('SELECT * FROM phonegap_pro', [], function (tx, results) {
  //      var len = results.rows.length, i;
  //      alert(len);
  //      for (i = 0; i < len; i++){
  //         alert(results.rows.item(i).id+results.rows.item(i).title+"--" +results.rows.item(i).desc);
  //      }
  //   }, null);
  // });
    }
     



function insertValues(){

    //var title='testing1';
     // var desc='testing description1';
    // alert("insertValues");
    // alert(UnitNo);
    var unitNo=UnitNo;
    var latitude=Latitude;
    var longitude=Longitude;
    var speed=Speed;
    var trackTime=TrackTime;
    var direction=Direction;
    var gpsOdometer=GpsOdometer;
    var gpsStatus=GPSStatus;
    var buildVersion="Testing";
  //  alert(UnitNo);
      //console.log(title +""+ desc);
      myDB.transaction(function(transaction) {
            var executeQuery = "INSERT INTO trackSystem1 (unitNo, latitude, longitude, speed, trackTime, direction, gpsOdometer, gpsStatus, buildVersion) VALUES (?,?,?,?,?,?,?,?,?)";             
            transaction.executeSql(executeQuery, [unitNo,latitude,longitude,speed,trackTime,direction,gpsOdometer,gpsStatus,buildVersion]
                , function(tx, result) {
                   //  alert('Inserted');
                     viewData();
                },
                function(error){
                     alert('Error occurred'); 
                });
        });
}


function viewData(){
    alert("viewData");
     myDB.transaction(function(transaction) {
  transaction.executeSql('SELECT * FROM trackSystem1', [], function (tx, results) {
       var len = results.rows.length, i;
       alert(len);
       for (i = 0; i < len; i++){
          alert(results.rows.item(i).id+results.rows.item(i).unitNo+"--" +results.rows.item(i).latitude+"--" +results.rows.item(i).longitude+"--" +results.rows.item(i).speed+"--" +results.rows.item(i).trackTime+"--" +results.rows.item(i).direction+"--" +results.rows.item(i).gpsOdometer+"--" +results.rows.item(i).gpsStatus+"--" +results.rows.item(i).buildVersion);
       }
    }, null);
  });
}

function clearData(){
     myDB.transaction(function(transaction) {
        var executeQuery = "DROP TABLE  IF EXISTS trackSystem1";
        transaction.executeSql(executeQuery, [],
            function(tx, result) {alert('Table deleted successfully.');},
            function(error){alert('Error occurred while droping the table.');}
        );
    });
}


function drawRoute(){
    alert("hi");


   var mapDiv = document.getElementById('map-canvas');
   alert("div");
  var map = plugin.google.maps.Map.getMap(mapDiv);

  map.addEventListener(plugin.google.maps.event.MAP_READY, function() {

      const HND_AIR_PORT = {"lat": 12.977165, "lng": 77.722483};
      const SFO_AIR_PORT = {"lat": 12.959172, "lng": 77.697419};
      map.addPolyline({
        points: [
          HND_AIR_PORT,
          SFO_AIR_PORT
        ],
        'color' : '#AA00FF',
        'width': 10,
        'geodesic': true
      });

  });
}


// function myFunction(){
       
//         alert("yo ajax");
        
//         $.ajax({
//                 type: 'POST',
//                  url: "http://poc.infotracktelematics.com/InfoWFMMEPollingAPI/PollingUpdate.svc/UpdatePollingData",
//                 data: myJSON,               
//                 success: function(data) {
//                 var dataToStore = JSON.stringify(data);
//                 //alert("dataToStore"+dataToStore);
//                   //  localStorage.setItem('savedSwipedObj', dataToStore) ;       
//                     //closePopup();
//                    alert("success");
                    
//                 },
//                 error: function(data, status, er) {

//                     alert("error123: " + JSON.stringify(data) + " status: " + status + " er:" + er);
//                 }
//             });
        
// }   




