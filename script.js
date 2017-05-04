$(document).ready(function(){
var students = ["Jeanette", 'Julio', 'Ashley', 'Wilder', 'Brittany'];
var teachers = ["Justin", 'Zach', 'Aaron','Julia','Alyxe']

$('#studentButton').click(function() {
    $('#studentDisplay').html(students[Math.floor(Math.random()*students.length)]);
});
$('#teacherButton').click(function() {
    $('#teacherDisplay').html(teachers[Math.floor(Math.random()*teachers.length)]);
});

});

