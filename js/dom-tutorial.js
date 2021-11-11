//just put code in here, no script tags

class Person {
    name;
    color;
    number;
    constructor(name, color, number) {
        this.name = name;
        this.color = color;
        this.number = number;
    }
    newRow() { //don't need return type or void
        let tr = "<tr>"; //name value for every row, but have to concat <tr> and <td> tags
        tr += `<td>${this.name}</td>`;
        tr += `<td>${this.color}</td>`;
        tr += `<td>${this.number}</td>`;
        tr += "</tr>";
        return tr;

    }
}
let dbDataClass = [
    new Person("Alice", "Blue", 7),
    new Person("Fred", "Red", 8),
    new Person("Chance", "green", 9)
]

let dbData = [
    {name: "Abe", color: "black", number: 13 },
    {name: "Betty", color: "red", number: 8 },
    {name: "Chris", color: "orange", number: 42 },
    {name: "Danielle", color: "green", number: 117 },
    {name: "Elyse", color: "purple", number: 13 },
]

const loaded = () => {
    let tbody = document.getElementById("tbody");
    //for(let row of dbData) 
    for(let row of dbDataClass)
    {
        let tr = row.newRow();
        tbody.innerHTML += tr;

        /*let tr = "<tr>"; //name value for every row, but have to concat <tr> and <td> tags
        tr += `<td>${row.name}</td>`;
        tr += `<td>${row.color}</td>`;
        tr += `<td>${row.number}</td>`;
        tr += "</tr>"; 
        tbody.innerHTML += tr; //add this row to whatever is already in the tbody tag
        */
    }
}

const add = () =>
//must have parentheses no matter what, whether param or not
{
    let operanda = +document.getElementById("opa").value;
    let operandb = +document.getElementById("opb").value;
    let answer = operanda + operandb;
    //let answer = Number(operanda) + Number(operandb); <<the long way (short way adds + to document)
    document.getElementById("ans").value = answer;
    //document.getElementById("lbl").innerText = "Addition";
    //can read or set ^^^ but only works with text
    //if want to use html in the element...
    document.getElementById("lbl").innerHTML = "<b>Addition</b>"
    document.getElementById("ans").style.color = "black";
    
}
const sub = () =>
{
    let operanda = +document.getElementById("opa").value;
    let operandb = +document.getElementById("opb").value;
    let answer = operanda - operandb;
    document.getElementById("ans").value = answer;
    document.getElementById("lbl").innerText = "Subtraction";
    //document.getElementById("lbl").style.color = "red" <<if want word to change too
    document.getElementById("ans").style.color = "red";
    //style tells it you're messing with the style and then need to tell you what and then what of that what
    
}
const mult = () =>
{
    let operanda = +document.getElementById("opa").value;
    let operandb = +document.getElementById("opb").value;
    let answer = operanda * operandb;
    document.getElementById("ans").value = answer;
    document.getElementById("lbl").innerText = "Multiplication";
    document.getElementById("ans").style.color = "green";
    
}
const div = () =>
{
    let operanda = +document.getElementById("opa").value;
    let operandb = +document.getElementById("opb").value;
    let answer = operanda / operandb;
    document.getElementById("ans").value = answer;
    document.getElementById("lbl").innerText = "Division";
    document.getElementById("ans").style.color = "blue";

}

