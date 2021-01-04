let sqh = window.innerHeight/100*6;
let sqw = window.innerWidth/100*6;

let move = 1;

$(".piece").draggable({
    containment: "#board",
    obstacle: ".piece",
    preventCollision:true,
    snap: false,
    grid: [ sqw, sqw ],
    });
    
    
$(".black").droppable({
    accept: ".piece",
    drop: function(ev, ui) {
        var dropped = ui.draggable;
        var droppedOn = $(this);
        $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);
    }
        
});
$(".white").droppable({
    accept: ".piece",
    drop: function(ev, ui) {
        var dropped = ui.draggable;
        var droppedOn = $(this);
        $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);
    }
        
});

let startpos,chosen,endpos;

$( ".piece" ).on( "dragstart", function( event, ui ) {

    startpos = $(this).parent().get(0).id;
    color = $(this).attr("class").substring(11,16);
} );

$( ".piece" ).on( "dragstop", function( event, ui ) {

    endpos = $(this).parent().get(0).id;
    let movedto = document.getElementById(endpos);
    if(movedto.childElementCount == 3)
    {
        $(this).appendTo("#"+startpos);
        endpos = startpos;
    }
    if(startpos != endpos)
    console.log(startpos, "to",endpos);
    

} );