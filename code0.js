gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDBrick3Objects1= [];
gdjs.Untitled_32sceneCode.GDBrick3Objects2= [];
gdjs.Untitled_32sceneCode.GDBrick3Objects3= [];
gdjs.Untitled_32sceneCode.GDgmombaObjects1= [];
gdjs.Untitled_32sceneCode.GDgmombaObjects2= [];
gdjs.Untitled_32sceneCode.GDgmombaObjects3= [];
gdjs.Untitled_32sceneCode.GDchoeiefObjects1= [];
gdjs.Untitled_32sceneCode.GDchoeiefObjects2= [];
gdjs.Untitled_32sceneCode.GDchoeiefObjects3= [];
gdjs.Untitled_32sceneCode.GDVarObjects1= [];
gdjs.Untitled_32sceneCode.GDVarObjects2= [];
gdjs.Untitled_32sceneCode.GDVarObjects3= [];
gdjs.Untitled_32sceneCode.GDCollectible_9595ProxMineObjects1= [];
gdjs.Untitled_32sceneCode.GDCollectible_9595ProxMineObjects2= [];
gdjs.Untitled_32sceneCode.GDCollectible_9595ProxMineObjects3= [];
gdjs.Untitled_32sceneCode.GDProxMineObjects1= [];
gdjs.Untitled_32sceneCode.GDProxMineObjects2= [];
gdjs.Untitled_32sceneCode.GDProxMineObjects3= [];
gdjs.Untitled_32sceneCode.GDBullet5Objects1= [];
gdjs.Untitled_32sceneCode.GDBullet5Objects2= [];
gdjs.Untitled_32sceneCode.GDBullet5Objects3= [];
gdjs.Untitled_32sceneCode.GDScore_9595textObjects1= [];
gdjs.Untitled_32sceneCode.GDScore_9595textObjects2= [];
gdjs.Untitled_32sceneCode.GDScore_9595textObjects3= [];
gdjs.Untitled_32sceneCode.GDScore_9595NumberObjects1= [];
gdjs.Untitled_32sceneCode.GDScore_9595NumberObjects2= [];
gdjs.Untitled_32sceneCode.GDScore_9595NumberObjects3= [];
gdjs.Untitled_32sceneCode.GDfObjects1= [];
gdjs.Untitled_32sceneCode.GDfObjects2= [];
gdjs.Untitled_32sceneCode.GDfObjects3= [];
gdjs.Untitled_32sceneCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.Untitled_32sceneCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs.Untitled_32sceneCode.GDTransparentButtonWithWhiteBlueBorderObjects3= [];
gdjs.Untitled_32sceneCode.GDWoodRedBarObjects1= [];
gdjs.Untitled_32sceneCode.GDWoodRedBarObjects2= [];
gdjs.Untitled_32sceneCode.GDWoodRedBarObjects3= [];
gdjs.Untitled_32sceneCode.GDRedFlatBarObjects1= [];
gdjs.Untitled_32sceneCode.GDRedFlatBarObjects2= [];
gdjs.Untitled_32sceneCode.GDRedFlatBarObjects3= [];
gdjs.Untitled_32sceneCode.GDCopperRedBarObjects1= [];
gdjs.Untitled_32sceneCode.GDCopperRedBarObjects2= [];
gdjs.Untitled_32sceneCode.GDCopperRedBarObjects3= [];
gdjs.Untitled_32sceneCode.GDHighScoreObjects1= [];
gdjs.Untitled_32sceneCode.GDHighScoreObjects2= [];
gdjs.Untitled_32sceneCode.GDHighScoreObjects3= [];
gdjs.Untitled_32sceneCode.GDHighscorenumberObjects1= [];
gdjs.Untitled_32sceneCode.GDHighscorenumberObjects2= [];
gdjs.Untitled_32sceneCode.GDHighscorenumberObjects3= [];
gdjs.Untitled_32sceneCode.GDProxMine2Objects1= [];
gdjs.Untitled_32sceneCode.GDProxMine2Objects2= [];
gdjs.Untitled_32sceneCode.GDProxMine2Objects3= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDchoeiefObjects1Objects = Hashtable.newFrom({"choeief": gdjs.Untitled_32sceneCode.GDchoeiefObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCollectible_95959595ProxMineObjects1Objects = Hashtable.newFrom({"Collectible_ProxMine": gdjs.Untitled_32sceneCode.GDCollectible_9595ProxMineObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDProxMine2Objects1Objects = Hashtable.newFrom({"ProxMine2": gdjs.Untitled_32sceneCode.GDProxMine2Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCollectible_95959595ProxMineObjects1Objects = Hashtable.newFrom({"Collectible_ProxMine": gdjs.Untitled_32sceneCode.GDCollectible_9595ProxMineObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDgmombaObjects1Objects = Hashtable.newFrom({"gmomba": gdjs.Untitled_32sceneCode.GDgmombaObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDProxMine2Objects1Objects = Hashtable.newFrom({"ProxMine2": gdjs.Untitled_32sceneCode.GDProxMine2Objects1});
gdjs.Untitled_32sceneCode.asyncCallback12246108 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("ProxMine2"), gdjs.Untitled_32sceneCode.GDProxMine2Objects2);

gdjs.copyArray(runtimeScene.getObjects("Score_Number"), gdjs.Untitled_32sceneCode.GDScore_9595NumberObjects2);
gdjs.copyArray(asyncObjectsList.getObjects("gmomba"), gdjs.Untitled_32sceneCode.GDgmombaObjects2);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDgmombaObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDgmombaObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDProxMine2Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDProxMine2Objects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(4).add(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDScore_9595NumberObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDScore_9595NumberObjects2[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber()));
}
}gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
for (const obj of gdjs.Untitled_32sceneCode.GDProxMine2Objects1) asyncObjectsList.addObject("ProxMine2", obj);
for (const obj of gdjs.Untitled_32sceneCode.GDgmombaObjects1) asyncObjectsList.addObject("gmomba", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback12246108(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDgmombaObjects1Objects = Hashtable.newFrom({"gmomba": gdjs.Untitled_32sceneCode.GDgmombaObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBullet5Objects1Objects = Hashtable.newFrom({"Bullet5": gdjs.Untitled_32sceneCode.GDBullet5Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDgmombaObjects1Objects = Hashtable.newFrom({"gmomba": gdjs.Untitled_32sceneCode.GDgmombaObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBullet5Objects1Objects = Hashtable.newFrom({"Bullet5": gdjs.Untitled_32sceneCode.GDBullet5Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDgmombaObjects1Objects = Hashtable.newFrom({"gmomba": gdjs.Untitled_32sceneCode.GDgmombaObjects1});
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("choeief"), gdjs.Untitled_32sceneCode.GDchoeiefObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDchoeiefObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDchoeiefObjects2[i].getBehavior("TopDownMovement").simulateUpKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("choeief"), gdjs.Untitled_32sceneCode.GDchoeiefObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDchoeiefObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDchoeiefObjects2[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("choeief"), gdjs.Untitled_32sceneCode.GDchoeiefObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDchoeiefObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDchoeiefObjects2[i].getBehavior("TopDownMovement").simulateDownKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("choeief"), gdjs.Untitled_32sceneCode.GDchoeiefObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDchoeiefObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDchoeiefObjects1[i].getBehavior("TopDownMovement").simulateRightKey();
}
}}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDgmombaObjects1Objects = Hashtable.newFrom({"gmomba": gdjs.Untitled_32sceneCode.GDgmombaObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDchoeiefObjects1Objects = Hashtable.newFrom({"choeief": gdjs.Untitled_32sceneCode.GDchoeiefObjects1});
gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Collectible_ProxMine"), gdjs.Untitled_32sceneCode.GDCollectible_9595ProxMineObjects1);
gdjs.copyArray(runtimeScene.getObjects("choeief"), gdjs.Untitled_32sceneCode.GDchoeiefObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDchoeiefObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCollectible_95959595ProxMineObjects1Objects, false, runtimeScene, false);
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12242700);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDCollectible_9595ProxMineObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ProxMine"), gdjs.Untitled_32sceneCode.GDProxMineObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDProxMineObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDProxMineObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCollectible_9595ProxMineObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCollectible_9595ProxMineObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "p");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) > 0;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12244724);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ProxMine"), gdjs.Untitled_32sceneCode.GDProxMineObjects1);
gdjs.copyArray(runtimeScene.getObjects("choeief"), gdjs.Untitled_32sceneCode.GDchoeiefObjects1);
gdjs.Untitled_32sceneCode.GDProxMine2Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDProxMine2Objects1Objects, (( gdjs.Untitled_32sceneCode.GDchoeiefObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDchoeiefObjects1[0].getCenterXInScene()), (( gdjs.Untitled_32sceneCode.GDchoeiefObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDchoeiefObjects1[0].getCenterYInScene()), "");
}{runtimeScene.getScene().getVariables().getFromIndex(1).sub(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDProxMineObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDProxMineObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "ProxMine", 30, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.Untitled_32sceneCode.GDCollectible_9595ProxMineObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCollectible_95959595ProxMineObjects1Objects, gdjs.evtTools.camera.getCameraBorderRight(runtimeScene, "", 0) + gdjs.randomInRange(7 * 32, -(7) * 32), gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, "", 0) + gdjs.randomInRange(7 * 32, -(7) * 32), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ProxMine2"), gdjs.Untitled_32sceneCode.GDProxMine2Objects1);
gdjs.copyArray(runtimeScene.getObjects("gmomba"), gdjs.Untitled_32sceneCode.GDgmombaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDgmombaObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDProxMine2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDgmombaObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDgmombaObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDgmombaObjects1[i].getBehavior("Animation").setAnimationIndex(2);
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.Untitled_32sceneCode.GDCopperRedBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Highscorenumber"), gdjs.Untitled_32sceneCode.GDHighscorenumberObjects1);
gdjs.copyArray(runtimeScene.getObjects("choeief"), gdjs.Untitled_32sceneCode.GDchoeiefObjects1);
gdjs.copyArray(runtimeScene.getObjects("gmomba"), gdjs.Untitled_32sceneCode.GDgmombaObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDgmombaObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDgmombaObjects1[i].addForceTowardObject((gdjs.Untitled_32sceneCode.GDchoeiefObjects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDchoeiefObjects1[0] : null), 150, 0);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDgmombaObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDgmombaObjects1[i].separateFromObjectsList(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDgmombaObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDHighscorenumberObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDHighscorenumberObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber()));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCopperRedBarObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCopperRedBarObjects1[i].SetValue(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("choeief"), gdjs.Untitled_32sceneCode.GDchoeiefObjects1);
gdjs.Untitled_32sceneCode.GDBullet5Objects1.length = 0;

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDchoeiefObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDchoeiefObjects1[i].getBehavior("FireBullet").FireTowardPosition((gdjs.Untitled_32sceneCode.GDchoeiefObjects1[i].getCenterXInScene()), (gdjs.Untitled_32sceneCode.GDchoeiefObjects1[i].getCenterYInScene()), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBullet5Objects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 300, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet5"), gdjs.Untitled_32sceneCode.GDBullet5Objects1);
gdjs.copyArray(runtimeScene.getObjects("gmomba"), gdjs.Untitled_32sceneCode.GDgmombaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDgmombaObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBullet5Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12249972);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Score_Number"), gdjs.Untitled_32sceneCode.GDScore_9595NumberObjects1);
/* Reuse gdjs.Untitled_32sceneCode.GDgmombaObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDgmombaObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDgmombaObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(4).add(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDScore_9595NumberObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDScore_9595NumberObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber()));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "goomba", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.Untitled_32sceneCode.GDgmombaObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDgmombaObjects1Objects, 56, 109, "");
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDgmombaObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDgmombaObjects1[i].getBehavior("Resizable").setHeight(85);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDgmombaObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDgmombaObjects1[i].getBehavior("Resizable").setWidth(85);
}
}}

}


{


gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("choeief"), gdjs.Untitled_32sceneCode.GDchoeiefObjects1);
gdjs.copyArray(runtimeScene.getObjects("gmomba"), gdjs.Untitled_32sceneCode.GDgmombaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDgmombaObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDchoeiefObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12256284);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.Untitled_32sceneCode.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.Untitled_32sceneCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.Untitled_32sceneCode.GDTransparentButtonWithWhiteBlueBorderObjects1);
gdjs.copyArray(runtimeScene.getObjects("f"), gdjs.Untitled_32sceneCode.GDfObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDfObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDfObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(16);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.Untitled_32sceneCode.GDTransparentButtonWithWhiteBlueBorderObjects1);
gdjs.copyArray(runtimeScene.getObjects("f"), gdjs.Untitled_32sceneCode.GDfObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDfObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDfObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)) < runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber();
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("Halloween Survival", "HighScore", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Halloween Survival", "HighScore", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(7));
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDBrick3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBrick3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBrick3Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDgmombaObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDgmombaObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDgmombaObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDchoeiefObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDchoeiefObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDchoeiefObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDVarObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDVarObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDVarObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDCollectible_9595ProxMineObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCollectible_9595ProxMineObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCollectible_9595ProxMineObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDProxMineObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDProxMineObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDProxMineObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBullet5Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBullet5Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBullet5Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDScore_9595textObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDScore_9595textObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDScore_9595textObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDScore_9595NumberObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDScore_9595NumberObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDScore_9595NumberObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDfObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDfObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDfObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTransparentButtonWithWhiteBlueBorderObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDWoodRedBarObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDWoodRedBarObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDWoodRedBarObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDRedFlatBarObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRedFlatBarObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRedFlatBarObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDCopperRedBarObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCopperRedBarObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCopperRedBarObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDHighScoreObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDHighScoreObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDHighScoreObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDHighscorenumberObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDHighscorenumberObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDHighscorenumberObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDProxMine2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDProxMine2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDProxMine2Objects3.length = 0;

gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);
gdjs.Untitled_32sceneCode.GDBrick3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBrick3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBrick3Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDgmombaObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDgmombaObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDgmombaObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDchoeiefObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDchoeiefObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDchoeiefObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDVarObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDVarObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDVarObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDCollectible_9595ProxMineObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCollectible_9595ProxMineObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCollectible_9595ProxMineObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDProxMineObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDProxMineObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDProxMineObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBullet5Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBullet5Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBullet5Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDScore_9595textObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDScore_9595textObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDScore_9595textObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDScore_9595NumberObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDScore_9595NumberObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDScore_9595NumberObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDfObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDfObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDfObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTransparentButtonWithWhiteBlueBorderObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDWoodRedBarObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDWoodRedBarObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDWoodRedBarObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDRedFlatBarObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRedFlatBarObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRedFlatBarObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDCopperRedBarObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCopperRedBarObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCopperRedBarObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDHighScoreObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDHighScoreObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDHighScoreObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDHighscorenumberObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDHighscorenumberObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDHighscorenumberObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDProxMine2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDProxMine2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDProxMine2Objects3.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
