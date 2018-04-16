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
        
    function updateDomCount(){
        $('#genButtonCount').text(clickCount);
        //$('.ducati').append('<div>Test</div>');
        $('.bultaco').append('<div></div>');
        $('#motoGuzzi').append('<div></div>');
        $('.ducati').append('<div>'+'<button>Swap</button>'+'<button>Delete</button>'+'</div>');
    }

    //function createDivBtn(){
        //$('.ducati').append('<div>'+'<button>Swap</button>'+'</div>');
    }

    }  
 // end on ready

