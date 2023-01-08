var mysql = require('mysql2');


var drop = 'TRUNCATE TABLE scps;'
var seedQuery = 'INSERT INTO scps (title, nick, avatar, about) VALUES ("SCP-191 - Ребёнок-киборг", "SCP-191", "/images/SCP-191.jpg", "SCP-191 - девочка примерно █ лет от роду. Считается, что она была подопытной в серии хирургических экспериментов, поставленных покойным д-ром"), ("SCP-005 - Отмычка", "SCP-005", "/images/SCP-005.jpg", "SCP-005 внешне напоминает изукрашенный ключ, по характеристикам не отличающийся от серийно выпускаемых ключей примерно 1920-х годов."), ("SCP-808 - Механический хор", "SCP-808", "/images/SCP-808.jpg", "SCP-808 представляет собой механическое сооружение высотой приблизительно в шестнадцать (16) метров и площадью приблизительно пять на шесть метров (30 м2). Форма объекта напоминает цилиндр, на последних трех метрах переходящий в конус.");'



var connection = mysql.createConnection({
host : '127.0.0.1',
port: '3306',
user : 'root',
password : '12345',
database: 'SCP'
});
connection.connect()



console.log("Running SQL seed...")


// Drop content
connection.query(drop, err => {
if (err) {
throw err
}
// Seed content
connection.query( seedQuery, err => {
if (err) {
throw err
}
console.log("SQL seed completed!")
connection.end()
})
})