const $ = function(selector) {
    return new $.prototype.init(selector);  //Возвращаем функцию init, которая возвращает новый объект
};

$.prototype.init = function(selector){
    if(!selector){
        return this; //{} возвращаем просто пустой объект, который был создан в 2 строке 
    }
    Object.assign(this, document.querySelectorAll(selector));  //Добавляем в созданный на 2 строке объект результат
    this.length = document.querySelectorAll(selector).length;

    return this;
};

$.prototype.init.prototype = $.prototype; //Записываем в прототип возвращаемого объекта прототип главной функции
                                          //для того чтобы использовать на новом объекте методы главной функции 
window.$ = $; 

export default $;