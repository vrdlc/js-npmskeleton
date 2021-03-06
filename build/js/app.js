(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "9897796580b42ac165c5f97fd32d0c7b";

},{}],2:[function(require,module,exports){
module.exports.time = time;

function time(alarm) {
  this.alarm = alarm;
}

time.prototype.ringTheAlarm = function() {
  if (moment() === this.alarm) {
    return console.log("DINGDINGDINGDINGDINGDINGDINGDINGDINGDING");
  } else {
    updateTime();
  }
};

},{}],3:[function(require,module,exports){
// var pingPong = require('./../js/ping-pong.js').pingPong;
//
// $(document).ready(function(){
//   $('#ping-pong').submit(function(event){
//     event.preventDefault();
//     var goal = $('#goal').val();
//     var output = pingPong(goal);
//     output.forEach(function(element){
//       $('#solution').append("<li>" + element + "</li>");
//     });
//   });
// });

var alarmObj = require('./../js/time.js');
var time = moment().format('h:mm:ss A MMMM Do YYYY');

function updateTime() {
  time = moment().format('h:mm:ss A MMMM Do YYYY');
  ringTheAlarm(time);
  document.getElementById('time').innerHTML = time;
  setTimeout(updateTime, 1000);
}

function ringTheAlarm(time) {
  if (moment() === time) {
    return console.log("DINGDINGDINGDINGDINGDINGDINGDINGDINGDING");
  } 
};

$(document).ready(function() {
  $("#time").text(updateTime());

  $("#alarmForm").submit(function(event) {
    event.preventDefault();
    var alarm = $("#alarm").val();

    $("#alarmPost").append(alarm);
  });
});

var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    }).fail(function(error) {
      $('.showWeather').text(error.message);
    });
  });
});

},{"./../.env":1,"./../js/time.js":2}]},{},[3]);
