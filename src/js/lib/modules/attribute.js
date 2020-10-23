import $ from '../core';

$.prototype.addAtt = function(attributeName, value){
    for (let i = 0; i < this.length; i++){
        this[i].setAttribute(attributeName, value);
    }
    return this;
};

$.prototype.deleteAtte = function(attributeName, value){
    for (let i = 0; i < this.length; i++){
        this[i].removeAttribute(attributeName, value);
    }
    return this;
};

$.prototype.toggleAtt = function(attributeName, value){
    for (let i = 0; i < this.length; i++){
        if(this[i].getAttribute(attributeName, value)){
            this[i].removeAttribute(attributeName, value);
        }else{
            this[i].setAttribute(attributeName, value);
        }
            
    }
    return this;
};
