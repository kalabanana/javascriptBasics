/*
*
 * Created by Mei on 7/16/17.
*/


var table = document.createElement('table');
var tbody = document.createElement('tbody');
table.appendChild(tbody);

for (var i = 0; i < 3; i++) {
    var rowcount = i + 1;
    tbody.insertRow(i);
    tbody.rows[i].insertCell(0);
    tbody.rows[i].insertCell(1);
    tbody.rows[i].insertCell(2);
    tbody.rows[i].cells[0].appendChild(document.createTextNode('Row ' + rowcount + ', Cell 1'));
    tbody.rows[i].cells[1].appendChild(document.createTextNode('Row ' + rowcount + ', Cell 2'));
    tbody.rows[i].cells[2].appendChild(document.createTextNode('Row ' + rowcount + ', Cell 3'));
}

tbody.rows[0].cells[0].style.cssText ='background-color:red;border:1px solid black;padding:20px';
tbody.rows[0].cells[1].style.cssText ='background-color:blue;border:1px solid black;padding:20px';
tbody.rows[0].cells[2].style.cssText ='background-color:yellow;border:1px solid black;padding:20px';
tbody.rows[1].cells[0].style.cssText ='background-color:brown;border:1px solid black;padding:20px';
tbody.rows[1].cells[1].style.cssText ='background-color:orange;border:1px solid black;padding:20px';
tbody.rows[1].cells[2].style.cssText ='background-color:purple;border:1px solid black;padding:20px';
tbody.rows[2].cells[0].style.cssText ='background-color:white;border:1px solid black;padding:20px';
tbody.rows[2].cells[1].style.cssText ='background-color:green;border:1px solid black;padding:20px';
tbody.rows[2].cells[2].style.cssText ='background-color:grey;border:1px solid black;padding:20px';

document.body.appendChild(table);
