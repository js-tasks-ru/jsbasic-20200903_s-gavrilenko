/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    let rowsTable = table.rows;
    for (let i = 1; i < rowsTable.length; i++) {
        if (Number(rowsTable[i].cells[1].innerHTML) < 18) {
            rowsTable[i].style.textDecoration = 'line-through'
        }
        if (rowsTable[i].cells[2].innerHTML === "f") {
            rowsTable[i].classList.add("female")
        } else {
            rowsTable[i].classList.add("male")
        }
        if (rowsTable[i].cells[3].getAttribute('data-available') === "true") {
            rowsTable[i].classList.add("available")
        } else if (rowsTable[i].cells[3].getAttribute('data-available') === "false") {
            rowsTable[i].classList.add("unavailable")
        } else {
            rowsTable[i].setAttribute("hidden", "hidden");
        }
    }
}
