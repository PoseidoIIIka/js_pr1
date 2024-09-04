'use strict';

let surname = prompt('Введите фамилию', 'Неизвестное фамилия');
let name = prompt('Введите имя', 'Неизвестное имя');
let secname = prompt('Введите отчество', 'Неизвестное отчество');

let isTrue = confirm(`Верны ли ваш ФИО ${surname} ${name} ${secname}?`);
alert(isTrue);