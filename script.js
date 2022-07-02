

$("#submit").click(function (event) {
  event.preventDefault();
  const name = $("#name").val();
  const attn = $("#attn").val();
  const title = $("#title").val();
  const timeline = $("#timeline").val();
  var experience = [];
  var signOff = [];


  //***Skillset***
  
  if ($("#product_tester").is(':checked'))
    experience.push(`I have worked with clients to review their products, including a heat pillow and books.  <br/><br/>`);  // checked
  else
    experience.push("");

  if ($("#internet_researcher").is(':checked'))
    experience.push(`I have worked with clients to research their needs online.  I have analyzed videos for customer behaviors.  I have researched product prices and competition for analysis.  I have worked to create personality analysis through customer reviews through social media.  I have done research into vacation planning, including Europe and South America.  I have researched leads for different educational institutions.<br/><br/>`);  // checked
  else
    experience.push("");

  if ($("#network_connections").is(':checked'))
    experience.push(`I have researched leads, including emails and other data points.  I have also nurtured leads to the point that they were willing to speak with my clients.<br/><br/>`);  // checked
  else
    experience.push("");

  if ($("#data_entry").is(':checked'))
    experience.push(`I have transcribed PDFs into Word documents.  I have manually transferred data from one platform to another.  I have created graphs and tables for clients' dashboards.  I have created mail-merge campaigns.  I have performed basic bookkeeping data entry in Quickbooks.<br/><br/>`);  // checked
  else
    experience.push("");

  if ($("#calendar_organization").is(':checked'))
    experience.push(`I have scheduled appointments for clients. I have set up appointment reminders.<br/><br/>`);  // checked
  else
    experience.push("");

  if ($("#customer_service_contractor").is(':checked'))
    experience.push(`I have taken inbound calls and sent outbound calls.  I have created transcripts and outlines for more confident handling.  I have processed orders and answered customers' questions through email.<br/><br/>`);  // checked
  else
    experience.push("");

  if ($("#hCSS").is(':checked'))
    experience.push(`I have worked with HTML email coding through volunteer projects.<br/><br/>`);  // checked
  else
    experience.push("");

  if ($("#portfolio").is(':checked'))
    experience.push(`Please check out my Github repository: https://github.com/petersvirtualservices?tab=repositories<br/>My online portfolio: http://cpetersresume.com/<br/>`);  // checked
  else
    experience.push("");

  //***Sign-Off***

  if ($("#signOffOne").is(':checked'))
    signOff.push(`Thank you,<br/>`);  // checked
  else
  signOff.push("");

  if ($("#signOffTwo").is(':checked'))
  signOff.push(`Good luck with your search,<br/>`);  // checked
  else
  signOff.push("");

  if ($("#signOffThree").is(':checked'))
  signOff.push(`Have a great day,<br/>`);  // checked
  else
  signOff.push("");

  if ($("#signOffFour").is(':checked'))
  signOff.push(`I wish you the best,<br/>`);  // checked
  else
  signOff.push("");



  $("#goesHere1").html("Hello " + attn + ",");
  $("#goesHere2").html("I am an experienced " + title + " who has worked with clients in similar projects.  I would be honored to use my experience to help your project.");
  $("#goesHere3").html(experience);
  $("#goesHere4").html(timeline);
  $("#goesHere5").html(signOff);
  //$("#goesHere6").html("Charlene");
  $("#goesHere7").html(name);
});


