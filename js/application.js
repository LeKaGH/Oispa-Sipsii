// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});


    var imageList = [
        "http://oispasipsii.tk/img/2.png",
        "http://oispasipsii.tk/img/4.png",
        "http://oispasipsii.tk/img/8.png",
        "http://oispasipsii.tk/img/16.png",
        "http://oispasipsii.tk/img/32.png",
        "http://oispasipsii.tk/img/64.png",
        "http://oispasipsii.tk/img/128.png",
        "http://oispasipsii.tk/img/256.png",
        "http://oispasipsii.tk/img/512.png",
        "http://oispasipsii.tk/img/1024.png",
        "http://oispasipsii.tk/img/2048.png"

    ];
    for(var i = 0; i < imageList.length; i++ )
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }
