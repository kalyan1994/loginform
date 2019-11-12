function edit_row(no)
{
    //window.print("EDIT")
    document.getElementById("edit_button"+no).style.display="none";
    document.getElementById("save_button"+no).style.display="block";
	
    var id=document.getElementById("ID"+no);
    var name=document.getElementById("Name"+no);
    var email=document.getElementById("Email"+no);
    var Class = document.getElementById("Class"+no);
    var year=document.getElementById("Year"+no);
    var city=document.getElementById("City"+no);
    var country=document.getElementById("Country"+no);


    var id_data=id.innerHTML;	
    var name_data=name.innerHTML;
    var email_data=email.innerHTML;
    var Class_data= Class.innerHTML;
    var year_data = year.innerHTML;
    var city_data = city.innerHTML;
    var country_data = country.innerHTML;

    id.innerHTML="<input type='text' id='id_text"+no+"' value='"+id_data+"'>";
    name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
    email.innerHTML="<input type='text' id='email_text"+no+"' value='"+email_data+"'>";

    Class.innerHTML="<input type='text' id='class_text"+no+"' value='"+Class_data+"'>";
    year.innerHTML="<input type='text' id='year_text"+no+"' value='"+year_data+"'>";
    city.innerHTML="<input type='text' id='city_text"+no+"' value='"+city_data+"'>";
    country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";

}

function save_row(no)
{
    var id_val=document.getElementById("id_text"+no).value;
    var name_val=document.getElementById("name_text"+no).value;
    var email_val=document.getElementById("email_text"+no).value;
    var class_val=document.getElementById("class_text"+no).value;
    var year_val=document.getElementById("year_text"+no).value;
    var city_val=document.getElementById("city_text"+no).value;
    var country_val=document.getElementById("country_text"+no).value;

    document.getElementById("ID"+no).innerHTML=id_val;
    document.getElementById("Name"+no).innerHTML=name_val;
    document.getElementById("Email"+no).innerHTML=email_val;
    document.getElementById("Class"+no).innerHTML=class_val;
    document.getElementById("Year"+no).innerHTML=year_val;
    document.getElementById("City"+no).innerHTML=city_val;
    document.getElementById("Country"+no).innerHTML=country_val;

    document.getElementById("edit_button"+no).style.display="block";
    sdocument.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
    var new_name=document.getElementById("new_name").value;
    var new_country=document.getElementById("new_country").value;
    var new_id=document.getElementById("new_id").value;

    var new_class=document.getElementById("new_class").value;
    var new_email=document.getElementById("new_email").value;
    var new_year=document.getElementById("new_year").value;
    var new_city=document.getElementById("new_city").value;
	
    var table=document.getElementById("data_table");
    var table_len=(table.rows.length)-1;
    var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'>\
    <td id='id_row"+table_len+"'>"+new_id+"</td>\
    <td id='name_row"+table_len+"'>"+new_name+"</td>\
    <td id='email_row"+table_len+"'>"+new_email+"</td>\
    <td id='class_row"+table_len+"'>"+new_class+"</td>\
    <td id='year_row"+table_len+"'>"+new_year+"</td>\
    <td id='city_row"+table_len+"'>"+new_city+"</td>\
    <td id='country_row"+table_len+"'>"+new_country+"</td>\
    <td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

    document.getElementById("new_id").value="";    
    document.getElementById("new_name").value="";
    document.getElementById("new_country").value="";
    document.getElementById("new_class").value="";
    document.getElementById("new_email").value="";
    document.getElementById("new_year").value="";
    document.getElementById("new_age").value="";

}