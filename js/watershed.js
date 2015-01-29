function updateWatershed() {
    var watershedDate = watershed($('#birthdate').val(), $('#meetdate').val());
    var watershedDiv = $('#watershed');
    watershedDiv.find("#clock").countdown('destroy');
    watershedDiv.html("<h2 class='watershed-date'>"+watershedDate.format("fullDate")+"</h2><h2 id='clock'></h2>");
    watershedDiv.find("#clock").countdown({until: watershedDate, format: 'YODHMS', onExpiry: updateWatershedSince, alwaysExpire: true});
}

function updateWatershedSince() {
  var watershedDate = watershed($('#birthdate').val(), $('#meetdate').val());
  var watershedDiv = $('#watershed');
  watershedDiv.find("#clock").countdown('destroy');
  watershedDiv.html("<h2 class='watershed-date'>"+watershedDate.format("fullDate")+"</h2><h2 id='clock'></h2>");
  watershedDiv.find("#clock").countdown({since: watershedDate, format: 'YODHMS'});
}

function parseDate(str) {
    var mdy = str.split('/');
    return new Date(mdy[2], mdy[0]-1, mdy[1]);
}

function watershed(firstDate, secondDate) {
    var first = parseDate(firstDate);
    var second = parseDate(secondDate);
    var daydiff = Math.floor((second-first)/(1000*60*60*24));
    second.setDate(second.getDate() + daydiff);
    return second;
}
