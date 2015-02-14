$(document).ready(function () {
    $.getJSON("https://hivelab.org/static/students.json", function (json) {
        var div;
        for (var i = 0; i < json.length; i++) {

            div = $("<div>");

            div.append("<div class='name1'>" + json[i].Name +"</div>");
            div.append("<div class='gpa1'>" + json[i].GPA + "</div>");
            div.append("<div class='gre_q1'>" + json[i].GRE_Q + "</div>");
            div.append("<div class='gre_v1'>" + json[i].GRE_V + "</div>");
            div.append("<div class='essay1'>" + json[i].Essay + "</div>");
            div.append("<div class='recom1'>" + json[i].Recom + "</div>");

            //$('#hw2div').append(rowdiv); 
            $('#hw2div').append(div);

        //var div_gpa;
        //for (var a = 0; a < json.length; a++) {

          //  div_gpa = $("<div>");

            //div_gpa.append(json[a].GPA);

            //$('.row2_gpa').append(div_gpa);

            //}
        }
	});
});

/*function(){
    var div_name = "https://hivelab.org/static/students.json";
    $.getJSON( div_name, {
        tags: "name",
        tagmode: "any",
        format:"json"
    })
    .done(function(data){
        $.each(data.items, function(i.item){
            $(".row1_name").appendTo(".row1_name");
            if (i === json.length) {
                return false;
            }
        });
    });
};*/

/*$.getJSON("https://hivelab.org/static/students.json", function(json) {
  console.log("<div>" + json[1].Name + "</div>");
});*/

