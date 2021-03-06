'use strict'

const alertMethod = {

    functionAlertIntro1: function(msg, myYes) {
        var confirmBox = $alertIntro1;
        $alertIntro1.unbind().click(function() {
            confirmBox.hide();
            alertMethod.functionAlertIntro3();
            
        });
        $alertIntro1.click(myYes);
        confirmBox.show();
    },
    
    functionAlertIntro2: function(msg, myYes) {
        var confirmBox = $alertIntro2;
        $alertIntro2.unbind().click(function() {
            confirmBox.hide();
            enemyEntrance();
        });
        $alertIntro2.click(myYes);
        confirmBox.show();
    },
    
    functionAlertIntro3: function(msg, myYes) {
        var confirmBox = $alertIntro3;
        $alertIntro3.unbind().click(function() {
            confirmBox.hide();
            alertMethod.functionAlertIntro2();
        });
        $alertIntro3.click(myYes);
        confirmBox.show();
    },

    functionAlertWin: function(msg, myYes) {
        if (lifeCountCharacter == 3) {
            var confirmBox = $alertWin3;
        } else if (lifeCountCharacter == 2) {
            var confirmBox = $alertWin2;
        } else if (lifeCountCharacter == 1) {
            var confirmBox = $alertWin1;
        }
        $alertWin.unbind().click(function() {
            confirmBox.hide();
            
        });
        $alertWin.click(myYes);
        confirmBox.show();
    }
}