/* core game script */

/// <reference path="./_reference.ts"/>

// IIFE - Immediately Invoked Function Expression

(function(){
//CreateJS variables
let canvas:HTMLElement;
let stage:createjs.Stage;

//Game variables
let helloLabel:objects.Label;
let clickMeButton:objects.Button;

function Start():void {
    canvas = document.getElementById("canvas"); //get reference
    stage = new createjs.Stage(canvas); //create object
    stage.enableMouseOver(20); //enable mouse over every 20 frames
    createjs.Ticker.framerate = 60; //set fps to 60
    createjs.Ticker.on("tick", Update); //calls update function every frame

    Game();
}

function Update(event:createjs.Event):void {

    stage.update(); //redraws stage
}

function Game():void {
    console.log("Game Started...");

    //add helloLabel to stage
    helloLabel = new objects.Label("Hello, World!", "40px Consolas", "#000000", 160, 240, true);
    stage.addChild(helloLabel);

    //add clickMe Button to stage
    clickMeButton = new objects.Button("../../Assets/images/ClickMeButton.png", 160, 300, true);
    stage.addChild(clickMeButton);

    clickMeButton.on("click", (event:createjs.MouseEvent) => {
        helloLabel.text = "Good Bye!";
    });
}

window.onload = Start; //calls start when loaded

})();