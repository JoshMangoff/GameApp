/* core game script */

/// <reference path="./_reference.ts"/>

// IIFE - Immediately Invoked Function Expression

(function(){
//CreateJS variables
let canvas:HTMLElement;
let stage:createjs.Stage;

//Game variables
let helloLabel:objects.Label;

function Start():void {
    canvas = document.getElementById("canvas"); //get reference
    stage = new createjs.Stage(canvas); //create object
    createjs.Ticker.framerate = 60; //set fps to 60
    createjs.Ticker.on("tick", Update); //calls update function every frame

    Game();
}

function Update(event:createjs.Event):void {

    helloLabel.rotation += 5; //rotate clockwise 5 degrees every frame

    stage.update(); //redraws stage
}

function Game():void {
    console.log("Game Started...");

    helloLabel = new objects.Label("Hello, World!", "40px Consolas", "#000000", 160, 240, true);
    stage.addChild(helloLabel);
}

window.onload = Start; //calls start when loaded

})();