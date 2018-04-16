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
        $('.ducati').append('<p>Test</p>');

    function updateDomCount(){
        $('#genButtonCount').text(clickCount);
    }

    }  
} // end on ready

