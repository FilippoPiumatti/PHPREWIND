"use strict"
$(document).ready(function(){
    


    let request = sendRequestNoCallback("php/getPartite.php", "POST");
    request.fail(error);
    console.log(error)
    request.done(function(partite){
        console.log(partite);

        let _table = $("<table>");
        _table.prop("id","tabPartite");
        _table.css("border","2px solid black");
        _table.addClass("table");
        _table.appendTo("body");

        let _th = $("<th>");
        _th.prop("scope","col")
        _th.text("Data");
        _th.appendTo(_table);

         _th = $("<th>");
        _th.prop("scope","col")
        _th.text("Ora");
        _th.appendTo(_table);

         _th = $("<th>");
        _th.prop("scope","col")
        _th.text("Squadra");
        _th.appendTo(_table);

        _th = $("<th>");
        _th.prop("scope","col")
        _th.text("Home/Away");
        _th.appendTo(_table);

        _th = $("<th>");
        _th.prop("scope","col")
        _th.text("Home");
        _th.appendTo(_table);

        _th = $("<th>");
        _th.prop("scope","col")
        _th.text("Visitor");
        _th.appendTo(_table);

        _th = $("<th>");
        _th.prop("scope","col")
        _th.text("Note");
        _th.appendTo(_table);


        partite.forEach(function(partite){
                let _tr = $("<tr>");
                _tr.prop("scope","row");
                let _td = $("<td>");

                _td.text(partite.data);
                _td.appendTo(_tr);

                 _td = $("<td>");
                _td.text(partite.ora);
                _td.appendTo(_tr);

                 _td = $("<td>");
                _td.text(partite.squadra);
                _td.appendTo(_tr);

                _td = $("<td>");
                _td.text(partite.casa_fuori);
                _td.appendTo(_tr);

                _td = $("<td>");
                _td.text(partite.campo);
                _td.appendTo(_tr);

                _td = $("<td>");
                _td.text(partite.home);
                _td.appendTo(_tr);

                _td = $("<td>");
                _td.text(partite.visitor);
                _td.appendTo(_tr);

                _td = $("<td>");
                _td.text(partite.note);
                _td.appendTo(_tr);

                _tr.appendTo(_table);
        })
    })
})


