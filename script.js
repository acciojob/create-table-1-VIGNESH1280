  function insert_Row() {
    let table = document.querySelector('#sampleTable')
    let newRow = table.insertRow(0);

    let newCell1 = newRow.insertCell(0)
    newCell1.innerHTML= "New Cell1"

    let newCell2 = newRow.insertCell(1)
    newCell2.innerHTML= "New Cell2"
}