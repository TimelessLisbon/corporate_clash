gdjs.tituloCode = {};
gdjs.tituloCode.localVariables = [];
gdjs.tituloCode.GDfundoObjects1= [];
gdjs.tituloCode.GDfundoObjects2= [];
gdjs.tituloCode.GDdiscoObjects1= [];
gdjs.tituloCode.GDdiscoObjects2= [];
gdjs.tituloCode.GDluzesObjects1= [];
gdjs.tituloCode.GDluzesObjects2= [];
gdjs.tituloCode.GDtituloObjects1= [];
gdjs.tituloCode.GDtituloObjects2= [];
gdjs.tituloCode.GDtransicaoObjects1= [];
gdjs.tituloCode.GDtransicaoObjects2= [];


gdjs.tituloCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9584092);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "SoundEffects/Intro.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "SoundEffects/face_off.wav", false, 0, 1);
}}

}


};gdjs.tituloCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9600020);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("disco"), gdjs.tituloCode.GDdiscoObjects1);
gdjs.copyArray(runtimeScene.getObjects("luzes"), gdjs.tituloCode.GDluzesObjects1);
gdjs.copyArray(runtimeScene.getObjects("titulo"), gdjs.tituloCode.GDtituloObjects1);
{for(var i = 0, len = gdjs.tituloCode.GDdiscoObjects1.length ;i < len;++i) {
    gdjs.tituloCode.GDdiscoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.tituloCode.GDluzesObjects1.length ;i < len;++i) {
    gdjs.tituloCode.GDluzesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.tituloCode.GDtituloObjects1.length ;i < len;++i) {
    gdjs.tituloCode.GDtituloObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "restart");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "animations");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "titulo");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "nextscene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "song");
}{for(var i = 0, len = gdjs.tituloCode.GDdiscoObjects1.length ;i < len;++i) {
    gdjs.tituloCode.GDdiscoObjects1[i].getBehavior("Scale").setScale(57.6650390625);
}
}{for(var i = 0, len = gdjs.tituloCode.GDtituloObjects1.length ;i < len;++i) {
    gdjs.tituloCode.GDtituloObjects1[i].getBehavior("Scale").setScale(38.443359375);
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "SoundEffects/Intro_corrigida.mp3", false, 100, 1);
}}

}


};gdjs.tituloCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9605140);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "SoundEffects/face_off.wav", false, 100, 1);
}}

}


};gdjs.tituloCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9608956);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "SoundEffects/face_off_2.wav", false, 100, 1);
}{gdjs.evtTools.firebaseTools.database.updateField("Rondas", "QtPerguntas", "", runtimeScene.getScene().getVariables().get("error"));
}{runtimeScene.getScene().getVariables().get("Qtd").setNumber(0);
}}

}


};gdjs.tituloCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("disco"), gdjs.tituloCode.GDdiscoObjects1);
gdjs.copyArray(runtimeScene.getObjects("luzes"), gdjs.tituloCode.GDluzesObjects1);
gdjs.copyArray(runtimeScene.getObjects("titulo"), gdjs.tituloCode.GDtituloObjects1);
{for(var i = 0, len = gdjs.tituloCode.GDdiscoObjects1.length ;i < len;++i) {
    gdjs.tituloCode.GDdiscoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.tituloCode.GDluzesObjects1.length ;i < len;++i) {
    gdjs.tituloCode.GDluzesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.tituloCode.GDtituloObjects1.length ;i < len;++i) {
    gdjs.tituloCode.GDtituloObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "restart");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "animations");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "titulo");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "nextscene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "fastmoney");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "song");
}{for(var i = 0, len = gdjs.tituloCode.GDdiscoObjects1.length ;i < len;++i) {
    gdjs.tituloCode.GDdiscoObjects1[i].getBehavior("Scale").setScale(57.6650390625);
}
}{for(var i = 0, len = gdjs.tituloCode.GDtituloObjects1.length ;i < len;++i) {
    gdjs.tituloCode.GDtituloObjects1[i].getBehavior("Scale").setScale(38.443359375);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}{gdjs.evtTools.firebaseTools.auth.anonymSignIn(runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField("Game", "Demo", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField("FastMoney", "Winner", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField("Rondas", "QtPerguntas", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("Rondas", "QtPerguntas", runtimeScene.getScene().getVariables().get("Qtd"), runtimeScene.getScene().getVariables().get("error"));
}{runtimeScene.getScene().getVariables().get("demo").setNumber(0);
}
{ //Subevents
gdjs.tituloCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "restart") >= 0.2;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "animations");
}{gdjs.evtTools.firebaseTools.database.getField("Game", "Start", runtimeScene.getScene().getVariables().getFromIndex(2), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("Game", "Round", runtimeScene.getScene().getVariables().getFromIndex(3), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("Game", "Demo", runtimeScene.getScene().getVariables().get("demo"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("Game", "Round", runtimeScene.getScene().getVariables().getFromIndex(3), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "animations") >= 0.03;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("disco"), gdjs.tituloCode.GDdiscoObjects1);
{for(var i = 0, len = gdjs.tituloCode.GDdiscoObjects1.length ;i < len;++i) {
    gdjs.tituloCode.GDdiscoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.tituloCode.GDdiscoObjects1.length ;i < len;++i) {
    gdjs.tituloCode.GDdiscoObjects1[i].getBehavior("Scale").setScale(gdjs.tituloCode.GDdiscoObjects1[i].getBehavior("Scale").getScale() / (1.5));
}
}{for(var i = 0, len = gdjs.tituloCode.GDdiscoObjects1.length ;i < len;++i) {
    gdjs.tituloCode.GDdiscoObjects1[i].setPosition((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.tituloCode.GDdiscoObjects1[i].getWidth())) / 2,(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - (gdjs.tituloCode.GDdiscoObjects1[i].getHeight())) / 2 + 74);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "animations");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "animations") >= 0.2;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "titulo");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "titulo") >= 0.03;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("titulo"), gdjs.tituloCode.GDtituloObjects1);
{for(var i = 0, len = gdjs.tituloCode.GDtituloObjects1.length ;i < len;++i) {
    gdjs.tituloCode.GDtituloObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.tituloCode.GDtituloObjects1.length ;i < len;++i) {
    gdjs.tituloCode.GDtituloObjects1[i].getBehavior("Scale").setScale(gdjs.tituloCode.GDtituloObjects1[i].getBehavior("Scale").getScale() / (1.5));
}
}{for(var i = 0, len = gdjs.tituloCode.GDtituloObjects1.length ;i < len;++i) {
    gdjs.tituloCode.GDtituloObjects1[i].setPosition((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.tituloCode.GDtituloObjects1[i].getWidth())) / 2,(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - (gdjs.tituloCode.GDtituloObjects1[i].getHeight())) / 2);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "titulo");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("disco"), gdjs.tituloCode.GDdiscoObjects1);
gdjs.copyArray(runtimeScene.getObjects("titulo"), gdjs.tituloCode.GDtituloObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.tituloCode.GDdiscoObjects1.length;i<l;++i) {
    if ( gdjs.tituloCode.GDdiscoObjects1[i].getBehavior("Scale").getScale() == 1 ) {
        isConditionTrue_1 = true;
        gdjs.tituloCode.GDdiscoObjects1[k] = gdjs.tituloCode.GDdiscoObjects1[i];
        ++k;
    }
}
gdjs.tituloCode.GDdiscoObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.tituloCode.GDtituloObjects1.length;i<l;++i) {
    if ( gdjs.tituloCode.GDtituloObjects1[i].getBehavior("Scale").getScale() == 38.443359375 ) {
        isConditionTrue_1 = true;
        gdjs.tituloCode.GDtituloObjects1[k] = gdjs.tituloCode.GDtituloObjects1[i];
        ++k;
    }
}
gdjs.tituloCode.GDtituloObjects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("luzes"), gdjs.tituloCode.GDluzesObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}{for(var i = 0, len = gdjs.tituloCode.GDluzesObjects1.length ;i < len;++i) {
    gdjs.tituloCode.GDluzesObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.tituloCode.GDluzesObjects1.length ;i < len;++i) {
    gdjs.tituloCode.GDluzesObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.tituloCode.GDluzesObjects1[i].getWidth())) / 2 - 9);
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("titulo"), gdjs.tituloCode.GDtituloObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.tituloCode.GDtituloObjects1.length;i<l;++i) {
    if ( gdjs.tituloCode.GDtituloObjects1[i].getBehavior("Scale").getScale() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.tituloCode.GDtituloObjects1[k] = gdjs.tituloCode.GDtituloObjects1[i];
        ++k;
    }
}
gdjs.tituloCode.GDtituloObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(2);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "restart") >= 60;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "titulo", false);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("demo")) == 1;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "demo", false);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) == 1;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "song");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "song") >= 0.1;
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("Game", "Start", "2", runtimeScene.getScene().getVariables().get("error"));
}
{ //Subevents
gdjs.tituloCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) == 1;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "nextscene");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "nextscene") >= 0.1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("transicao"), gdjs.tituloCode.GDtransicaoObjects1);
{for(var i = 0, len = gdjs.tituloCode.GDtransicaoObjects1.length ;i < len;++i) {
    gdjs.tituloCode.GDtransicaoObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Horizontal", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.tituloCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "nextscene") >= 1.1;
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField("Game", "Start", "0", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ronda2", false);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) == 5;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "fastmoney");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "fastmoney") >= 0.1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("transicao"), gdjs.tituloCode.GDtransicaoObjects1);
{for(var i = 0, len = gdjs.tituloCode.GDtransicaoObjects1.length ;i < len;++i) {
    gdjs.tituloCode.GDtransicaoObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Horizontal", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.tituloCode.eventsList3(runtimeScene);} //End of subevents
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


{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.firebaseTools.database.getField("Game", "Lingua", runtimeScene.getScene().getVariables().getFromIndex(4), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)) == "portugues";
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4)) == "ingles";
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


};

gdjs.tituloCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.tituloCode.GDfundoObjects1.length = 0;
gdjs.tituloCode.GDfundoObjects2.length = 0;
gdjs.tituloCode.GDdiscoObjects1.length = 0;
gdjs.tituloCode.GDdiscoObjects2.length = 0;
gdjs.tituloCode.GDluzesObjects1.length = 0;
gdjs.tituloCode.GDluzesObjects2.length = 0;
gdjs.tituloCode.GDtituloObjects1.length = 0;
gdjs.tituloCode.GDtituloObjects2.length = 0;
gdjs.tituloCode.GDtransicaoObjects1.length = 0;
gdjs.tituloCode.GDtransicaoObjects2.length = 0;

gdjs.tituloCode.eventsList4(runtimeScene);

return;

}

gdjs['tituloCode'] = gdjs.tituloCode;
