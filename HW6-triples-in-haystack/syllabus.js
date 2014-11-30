window.addEventListener("rdfa.loaded",function() {
   console.log("Processing syllabus...");
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
        var current_hw_arr = ["HW URI: "+current_hw_uri[0], "HW Name: "+current_hw_name[0], "HW Due Date: "+current_hw_due[0]];
        hwValues.push(current_hw_arr);
    }

    for (var i = 0; i < milestones.length; i++) {
        var current_milestone = milestones[i];
        var current_milestone_uri = document.data.getValues(current_milestone, "http://milowski.com/syllabus/milestone");
        var current_milestone_data = document.data.getProperties(current_milestone_uri[0]);
        var current_milestone_name = document.data.getValues(current_milestone_uri[0], current_milestone_data[1]);
        var current_milestone_due = document.data.getValues(current_milestone_uri[0], current_milestone_data[2]);
        var current_milestone_arr = ["Milestone URI: "+current_milestone_uri[0], "Milestone Name: "+current_milestone_name[0], "Milestone Due Date: "+current_milestone_due[0]];
        milestonesValues.push(current_milestone_arr);
    }
    console.log("HW: ", hwValues);
    console.log("Milestones ", milestonesValues)
},true)

$(document).ready(function() {
   var sections = [];
   $("article > section > h2").each(
      function() {
         sections.push({ label: this.textContent, section: this.parentNode, heading: this });
      }
   );
   $("article header").after("<ul class='tabs'></ul>");
   $("article > ul.tabs").append(function() {
      var tabs = this;
      sections.active = 6;
      sections.forEach(function(s,index) {
         s.index = index;
         //s.heading.style.display = "none";
         s.section.className = "inactive";
         var li = $("<li class='inactive'>"+s.label+"</li>").appendTo(tabs)[0];
         li.addEventListener("click",function() {
            sections[sections.active].tab.className = "inactive";
            sections[sections.active].section.className = "inactive";
            sections.active = s.index;
            s.tab.className = "active";
            s.section.className = "active";
         },false);
         s.tab = li;
         if (index==sections.active) {
            s.tab.className = "active";
            s.section.className = "active";
         }
      });
   });
   
   /*
   Recaptcha.create("6LfwcfoSAAAAAKwftRX82W8zb3bopH0Bz9dbiq6r",
       "feedbackCaptcha",
       {
         theme: "red",
         callback: Recaptcha.focus_response_field
       }
     );
   */
   
   var x = Math.round(Math.random()*50);
   var y = Math.round(Math.random()*50);
   var operator = Math.random()<0.5 ? "+" : "-";
   $("#feedbackX").val(x.toString());
   $("#feedbackY").val(y.toString());
   $("#feedbackOp").val(operator);
   $("#feedbackChallenge").text(x+" "+operator+" "+y+" = ?");
   
   //feedback form stuff.
   $("#feedbackForm").submit(function(e){
			var feedback = $("#feedbackText").val().trim();
			if(feedback === "")
				alert("Please fill in some feedback!");
			else{
	   //console.log($(this).serialize());
 		$.ajax({
             type: 'POST',
             url: 'sendFeedback.php',
             data: $(this).serialize(),
             dataType: 'json',
             success: function (data) {
                     console.log(data);
                     if(data['s']=="Success"){
                       	alert("Your message has been sent. Thanks for your feedback!");                          	  	                                                                                                  
                     } else if (data['s']=="Bad solution") {
                       	alert("Your solution was incorrect. Your feedback was not sent!");                          	  	                                                                                                  
                     } else{
                   	  alert("Oops something went wrong! Please try again!");
                     }
                     
                     $("html, body").animate({ scrollTop: 0 }, "slow");                                                                                         
             }
     		});
			}
             e.preventDefault();
         return false;
 		});
});