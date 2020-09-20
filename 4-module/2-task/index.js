/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
    let rowsTable = table.rows;
    for (let i = 0; i < rowsTable.length; i++) {
        console.log(rowsTable[i].cells[i].style)
        rowsTable[i].cells[i].style.background = 'red';
    }
}
