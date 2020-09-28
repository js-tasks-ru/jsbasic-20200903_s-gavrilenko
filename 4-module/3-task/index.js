/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    let rowsTable = table.rows;
    for (let i = 1; i < rowsTable.length; i++) {
        if (Number(rowsTable[i].cells[1].innerHTML) < 18) {
            rowsTable[i].cells[1].style.textDecoration = 'line-through'
        }
        if (rowsTable[i].cells[2].innerHTML === "f") {
            rowsTable[i].cells[2].classList.add("female")
        } else {
            rowsTable[i].cells[2].classList.add("male")
        }
        if (rowsTable[i].cells[3].getAttribute('data-available') === "true") {
            rowsTable[i].cells[3].classList.add("available")
        } else if (rowsTable[i].cells[3].getAttribute('data-available') === "false") {
            rowsTable[i].cells[3].classList.add("unavailable")
        } else {
            rowsTable[i].cells[3].setAttribute("hidden", "hidden");
        }
    }
}
