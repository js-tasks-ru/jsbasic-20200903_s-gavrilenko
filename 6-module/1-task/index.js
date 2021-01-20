/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },ы
 *
 * @constructor
 */
export default class UserTable {
  constructor(rows) {
    let div = document.createElement("div");
    let table = document.createElement("table")
    let tbody = document.createElement("tbody")
    tbody.classList.add("card");
    this.createHeader(table);

    for (let i = 0; i < rows.length; i++) {

      tbody.append(this.createRow(rows[i]));
    }
    table.append(tbody)
    div.append(table)

    this.elem = div
  }

  createTable() {
    let div = document.createElement("div")
    div.insertAdjacentHTML('beforeend', "<table> </table>")
    return div;
  }

  createHeader(table) {
    let main = document.createElement("thead");
    main.insertAdjacentHTML('beforeend', "<tr> <th>Имя</th> <th>Возраст</th> <th>Зарплата</th> <th>Город</th> <th></th> </tr>")
    table.append(main)
  }

  createRow(row) {
    let main = document.createElement("tr")
    let btn = document.createElement("button")
    let td = document.createElement("td");
    td.append(btn)
    btn.innerHTML = "X"
    main.insertAdjacentHTML('beforeend', `<td>${row.name}</td> <td>${row.age}</td> <td>${row.salary}</td>`)
    main.append(td)
    btn.addEventListener('click', function () {
      main.remove();
    })
    return main;
  }
}
