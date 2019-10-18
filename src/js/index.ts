document.getElementById("Submit").onclick = UpLowCase;

function UpLowCase()
{
    let textEle = (<HTMLInputElement>document.getElementById("textinput")).value;
    let a:HTMLSelectElement = <HTMLSelectElement>document.getElementById("Select")
    let output = document.getElementById("preview");
    let finalText;
    if(a.options[a.selectedIndex].value == "Upp")
    {
        finalText = textEle.toUpperCase();
    }
    else
    {
        finalText = textEle.toLowerCase();
    }

    output.textContent = finalText
    var table: HTMLTableElement = <HTMLTableElement>document.getElementById("Table")
    let row = table.insertRow(0)
    let cell = row.insertCell(0)
    let cell1 = row.insertCell(1)
    cell.innerHTML = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr").length.toString()
    cell1.innerHTML = finalText;

}



