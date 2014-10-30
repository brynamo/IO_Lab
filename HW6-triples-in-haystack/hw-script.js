/**
 * Created by brynamo on 10/26/14.
 */

function hw_mine() {
    var homeworks = document.data.getSubjects("http://milowski.com/syllabus/homework");
    var hwValues = [];

    var milestones = document.data.getSubjects("http://milowski.com/syllabus/milestone");
    var milestonesValues = [];


    for (var i = 0; i < homeworks.length; i++) {
        var current_hw = homeworks[i];
        var current_hw_uri = document.data.getValues(current_hw, "http://milowski.com/syllabus/homework");
        var current_hw_data = document.data.getProperties(current_hw_uri[0]);
        var current_hw_name = document.data.getValues(current_hw_uri[0], current_hw_data[1]);
        var current_hw_due = document.data.getValues(current_hw_uri[0], current_hw_data[2]);
        var current_hw_arr = [current_hw_uri[0], current_hw_name[0], current_hw_due[0]];
        hwValues.push(current_hw_arr);
    }

    for (var i = 0; i < milestones.length; i++) {
        var current_milestone = milestones[i];
        var current_milestone_uri = document.data.getValues(current_milestone, "http://milowski.com/syllabus/milestone");
        var current_milestone_data = document.data.getProperties(current_milestone_uri[0]);
        var current_milestone_name = document.data.getValues(current_milestone_uri[0], current_milestone_data[1]);
        var current_milestone_due = document.data.getValues(current_milestone_uri[0], current_milestone_data[2]);
        var current_milestone_arr = [current_milestone_uri[0], current_milestone_name[0], current_milestone_due[0]];
        milestonesValues.push(current_milestone_arr);
    }
    return [hwValues, milestonesValues]
}
