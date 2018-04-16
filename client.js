let clickCount = 0;

$(document).ready(onReady);

function onReady(){
    $('#genButton').on('click', clickHandler);
        console.log('jQuery works!');

    function clickHandler() {
        console.log('click button worked');
        clickCount++;
        console.log(clickCount);
        updateDomCount();
        //$('.ducati').append('<p>Test</p>');
        


    function updateDomCount(){
        $('#genButtonCount').text(clickCount);
        $('.ducati').append('<div>Test</div>');
        $('.bultaco').append('<div></div>');
        $('#motoGuzzi').append('<div></div>');
    }

    }  
} // end on ready

