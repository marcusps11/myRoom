$(function(){     
  Student.setup();
  Student.bindEvents();
}); 

var Student = Student || {}

Student.setup = function(){
  $("body").on("click", ".room", this.getRoomId)

};

Student.getRoomId = function(){
  var value = this.id
  Student.friends(value)
}

Student.friends = function(value){
  var data = {
    'delux': ["Bob Smith","Jane Doe", "Bubba Hyde","Betsy Toheavens"],
    'shared': ['Bob Smith'],
    'animal': ["Bob Smith", "Jane Doe","Bubba Hyde"],
    'another': ["Bob Smith","Jane Doe"],
    'and-another': []
  }
  var room = (data[value])
  Student.sortArgs(room)
}

Student.sortArgs = function(room){
  var args = Array.prototype.slice.call(room);
  var sorted = args.sort();
  Student.writeFriends(sorted)
}

Student.writeFriends = function(sorted){
    if (sorted.length > 2){
    document.getElementById("myDisplay").innerHTML = sorted[0] + " " + ',' + " " +
    sorted[1] + " " + 'and' + " " + (sorted.length -2) 
    + " " + 'of your friends stayed here'
  } else if ( sorted.length === 2) {
    document.getElementById("myDisplay").innerHTML = sorted[0] + " " + sorted[1] + " " + " have stayed here"
  } else if ( sorted.length === 1) {
    document.getElementById("myDisplay").innerHTML = sorted[0] + " " + " stayed here"
  } else {
    document.getElementById("myDisplay").innerHTML = ""
  }
} 

Student.bindEvents = function(){

  $('#delux').click(function(e) {
    $('#roomType').html('Delux');
    e.preventDefault()
    $('body').fadeOut(500);
    $('body').fadeIn(600);


  });

  $('#shared').click(function(e) {
    $('#roomType').html('Shared');
    e.preventDefault()
    $('body').fadeOut(500);
    $('body').fadeIn(600);  });

  $('#animal').click(function(e) {
    $('#roomType').html('Animal');
    e.preventDefault()
    $('body').fadeOut(500);
    $('body').fadeIn(600);
  });

  $('#another').click(function(e) {
    $('#roomType').html('Another');
    e.preventDefault()
   $('body').fadeOut(500);
   $('body').fadeIn(600);
  });

  $('#and-another').click(function(e) {
    $('#roomType').html('And Another');
    e.preventDefault()
   $('body').fadeOut(500);
   $('body').fadeIn(600);
  });
}







