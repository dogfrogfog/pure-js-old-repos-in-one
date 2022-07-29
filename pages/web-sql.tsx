import type { NextPage } from 'next'

import styles from '../styles/web-sql.module.css'

const WebSQLPage: NextPage = () => {
  return (
    <>
      <span className="notDone notWhite">Scripts are commented, man</span>
      <div className={styles.container}>
        <section>
          <form action="" method="POST">
            <span>ID</span>
            <select id="select">
              <option value=""></option>
            </select>
            <input type="text" id="companyName" placeholder="Name" />
            <input type="text" id="managerName" placeholder="Managers name" />
            <input type="text" id="phone" placeholder="phone number" />
            <input type="number" id="quanity" placeholder="Number of employees" />
            <input type="text" id="address" placeholder="Address" />
              <div className={styles.buttons}>
                <a onClick={"add()" as any} >Add data to the table</a>
                <button type="reset">Clear form</button>
                <br />
                <a onClick={"del()" as any}>Delete notes with selected id</a>                             
                <a onClick={"show()" as any}>Input all notes</a>
                <br />
                <a onClick={"max()" as any}>Input manager name + full name with max number of employees</a>
                <a onClick={"min()" as any}>Input manager name + full name with min number of employees</a>
              </div>
          </form>
        </section>
        <section>
          <div id="test"></div>
          <table id="table">
            <caption>All notes</caption>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Managers name</th>
              <th>phone number</th>
              <th>Number of employees</th>
              <th>Address</th>
            </tr>
          </table>
        </section>
      </div>
    </>
  )
}

export default WebSQLPage

// let db = openDatabase("mydb", "0.1", "A list of inserted notes", 1000);
// if(!db){
//     alert("Strugling to connect to DB");
// }
// db.transaction(function(tx) {
//     tx.executeSql("SELECT * FROM Notes", [], function(tx, result){
//         let childOption;
//         let select = document.getElementById('select');
//         for(var i = 0; i < result.rows.length; i++) {
//             childOption = document.createElement('option');
//             childOption.innerHTML = result.rows.item(i)['id'];
//             childOption.value = result.rows.item(i)['id'];
//             select.append(childOption);
//         }
//     }, function (tx, error) {
//     tx.executeSql("CREATE TABLE Notes (id INTEGER PRIMARY KEY AUTOINCREMENT, companyName TEXT, managerName TEXT, phone TEXT, quanity INTEGER, address TEXT)", [], null, null);
// })});

// function add(){
//     alert('Данные добавлены в БД');
    
//     let companyName = document.getElementById('companyName').value;
//     let managerName = document.getElementById('managerName').value;
//     let phone = document.getElementById('phone').value;
//     let quanity = document.getElementById('quanity').value;
//     let address = document.getElementById('address').value;

//     // ВСТАВКА ДАННЫХ
//     db.transaction(function(tx) {
//         tx.executeSql("INSERT INTO Notes (companyName, managerName, phone, quanity, address) values(?, ?, ?, ?, ?)", [companyName, managerName, phone, quanity, address], null, null);
//     });
// }


// function show(){
//     let child;
//     let parent = document.getElementById('table');

//     // ВЫВОД ДАННЫХ
//     db.transaction(function(tx) {
//         tx.executeSql("SELECT * FROM Notes", [], function(tx, result) {
//         for(var i = 0; i < result.rows.length; i++) {
//             child = document.createElement('tr');
//             childOption = document.createElement('option');
//             childOption.innerHTML = result.rows.item(i)['id'];
//             childOption.value = result.rows.item(i)['id'];
//             child.innerHTML = '<td>'+ result.rows.item(i)['id'] + '</td><td>' + result.rows.item(i)['companyName'] + '</td><td>' + result.rows.item(i)['managerName'] + '</td><td>' + result.rows.item(i)['phone'] + '</td><td>' + result.rows.item(i)['quanity'] + '</td><td>' + result.rows.item(i)['address'] +'</td>';
//             parent.append(child);
//             select.append(childOption);
//         }}, null)
//     });
// }

// function max(){
//     db.transaction(function(tx) {
//         tx.executeSql("SELECT managerName, quanity FROM Notes WHERE quanity=(SELECT MAX(quanity) FROM Notes)", null, function(tx, result){alert('Имя менеджера: ' + result.rows.item(0)['managerName'] + ', количество работников: ' + result.rows.item(0)['quanity']);}, null);
//     });
// }

// function min(){
//     db.transaction(function(tx) {
//         tx.executeSql("SELECT managerName, quanity FROM Notes WHERE quanity=(SELECT MIN(quanity) FROM Notes)", null, function(tx, result){alert('Имя менеджера: ' + result.rows.item(0)['managerName'] + ', количество работников: ' + result.rows.item(0)['quanity']);}, null);
//     });
// }

// function del(){
//     var e = document.getElementById("select");
//     var strUser = e.options[e.selectedIndex].value;
//     db.transaction(function(tx) {
//         tx.executeSql("DELETE FROM Notes WHERE id = ${strUser}", null, null, null);
//     });
// }
