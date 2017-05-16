// randomize slider elements
function random(owlSelector){
    console.log(Math.round(Math.random()) - 0.5);
    owlSelector.children().sort(function(){
        return Math.round(Math.random()) - 0.5;
    }).each(function(){
        $(this).appendTo(owlSelector);
    });    
}

// display feeds with postCount
function displayFeeds(owlSelector) {
  var length = owlSelector.children().length;

    if(postCount < length) {
    for(var i=length-1; i>=postCount; i--) {
      owlSelector.children().eq(i).remove();
    }
  }
} 

// get date by format
function getFormatDate(e){
  var t=new Date(e),s=["January","February","March","April","May","June","July","August","September","October","November","December"],i=(t.getYear()+1900).toString(),n=s[t.getMonth()],a=t.getDate().toString();return n+" "+a+", "+i
}