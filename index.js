
$(document).ready(function(){

    //api get call to receive data
    $.get("https://60ac9dff9e2d6b0017457815.mockapi.io/ag/contacts",function(getData){
        //the data is use to itterate and make a table
        getData.map(v => makeTable(v));
    })


    let h1 = $("<h1>").html("Contacts List");
    //table and heading
    let $table = $("<table>");

    //table head
    let tableHead = $("<tr>");

    //each table head
    let thc1 = $("<th>").html("Avatar");
    let thc2 = $("<th>").html("Firstname");
    let thc3 = $("<th>").html("Lastname");
    let thc4 = $("<th>").html("Phone");
    let thc5 = $("<th>").html("Company");
    let thc6 = $("<th>").html("Email");
    let thc7 = $("<th>").html("Job Title");

    tableHead.append(thc1, thc2, thc3, thc4, thc5, thc6, thc7);

    $table.append(tableHead);

    //finally appending tablehead to table

    //api data is received and iterated to make rows
    makeTable = (v) => {

        let tableContent = $("<tr>");

        let tc1 = $("<td>");
        let imgAv = $("<img>").attr({"src":v.avatar},{alt:v.id});
        tc1.append(imgAv);

        //each cell of row is given their data
        let tc2 = $("<td>").html(v.first_name);
        let tc3 = $("<td>").html(v.last_name);
        let tc4 = $("<td>").html(v.phone);
        let tc5 = $("<td>").html(v.company);
        let tc6 = $("<td>").html(v.email);
        let tc7 = $("<td>").html(v.job_title);

        tableContent.append(tc1, tc2, tc3, tc4, tc5, tc6, tc7);

        //finally appending all table to body
        $table.append(tableContent);
        $("h2").css({"display":"none"});
        $("body").append(h1, $table);

    }
})

