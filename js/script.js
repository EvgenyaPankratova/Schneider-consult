let closestMonday = document.querySelector('.closestMonday');
let nowDate = new Date();
  
function showClosestMonday(nowDate){
  let newDate = new Date(nowDate); //создание копии переданной даты
  let nowWeekDay = nowDate.getDay(); //получаем номер текущего дня недели
  let addDays = 0; //сколько дней будем добавлять 
  if(nowWeekDay == 1){
    addDays = 0;
  }else if(nowWeekDay == 0){
    addDays = 1;
  }else{
    addDays = (8 - nowWeekDay);
}
  newDate.setDate(nowDate.getDate() + addDays); //прибавляем дни к дате, чтобы получился ближайший понедельник
  closestMonday.innerHTML = newDate.toLocaleDateString() + '!'; //превращем таймстамп в строку и выводим
}

showClosestMonday(nowDate);
  