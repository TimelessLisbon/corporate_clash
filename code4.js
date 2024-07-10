gdjs.winnerCode = {};
gdjs.winnerCode.localVariables = [];
gdjs.winnerCode.GDfundoObjects1= [];
gdjs.winnerCode.GDfundoObjects2= [];
gdjs.winnerCode.GDwinnerObjects1= [];
gdjs.winnerCode.GDwinnerObjects2= [];
gdjs.winnerCode.GDtransicaoObjects1= [];
gdjs.winnerCode.GDtransicaoObjects2= [];


gdjs.winnerCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11522372);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField("FastMoney", "Winner", runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().get("error"));
}}

}


};gdjs.winnerCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11529196);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "SoundEffects/face_off_2.wav", false, 100, 1);
}{gdjs.evtTools.firebaseTools.database.updateField("Rondas", "QtPerguntas", "", runtimeScene.getScene().getVariables().get("error"));
}{runtimeScene.getScene().getVariables().get("Qtd").setNumber(0);
}}

}


};gdjs.winnerCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.firebaseTools.database.updateField("Game", "Round", "", runtimeScene.getScene().getVariables().get("error"));
}{runtimeScene.getScene().getVariables().get("round").setNumber(0);
}
{ //Subevents
gdjs.winnerCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("winner"), gdjs.winnerCode.GDwinnerObjects1);
{for(var i = 0, len = gdjs.winnerCode.GDwinnerObjects1.length ;i < len;++i) {
    gdjs.winnerCode.GDwinnerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.winnerCode.GDwinnerObjects1.length ;i < len;++i) {
    gdjs.winnerCode.GDwinnerObjects1[i].setWrapping(true);
}
}{for(var i = 0, len = gdjs.winnerCode.GDwinnerObjects1.length ;i < len;++i) {
    gdjs.winnerCode.GDwinnerObjects1[i].setWrappingWidth(1629);
}
}{for(var i = 0, len = gdjs.winnerCode.GDwinnerObjects1.length ;i < len;++i) {
    gdjs.winnerCode.GDwinnerObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.winnerCode.GDwinnerObjects1.length ;i < len;++i) {
    gdjs.winnerCode.GDwinnerObjects1[i].setPosition((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.winnerCode.GDwinnerObjects1[i].getWidth())) / 2,(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - (gdjs.winnerCode.GDwinnerObjects1[i].getHeight())) / 2);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.firebaseTools.database.getField("Game", "NewGame", runtimeScene.getScene().getVariables().getFromIndex(1), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("Game", "Round", runtimeScene.getScene().getVariables().get("round"), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 1;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "titulo", false);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("round")) == 5;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "fastmoney");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "fastmoney") >= 0.1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("transicao"), gdjs.winnerCode.GDtransicaoObjects1);
{for(var i = 0, len = gdjs.winnerCode.GDtransicaoObjects1.length ;i < len;++i) {
    gdjs.winnerCode.GDtransicaoObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Horizontal", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.winnerCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "fastmoney") >= 1.1;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "fastmoney");
}}

}


};

gdjs.winnerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.winnerCode.GDfundoObjects1.length = 0;
gdjs.winnerCode.GDfundoObjects2.length = 0;
gdjs.winnerCode.GDwinnerObjects1.length = 0;
gdjs.winnerCode.GDwinnerObjects2.length = 0;
gdjs.winnerCode.GDtransicaoObjects1.length = 0;
gdjs.winnerCode.GDtransicaoObjects2.length = 0;

gdjs.winnerCode.eventsList2(runtimeScene);

return;

}

gdjs['winnerCode'] = gdjs.winnerCode;
