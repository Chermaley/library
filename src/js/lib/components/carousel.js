import $ from '../core';

$.prototype.carousel = function({hoverPause, autoplayTimeout, autoplay, indicators} = {}) {
    for(let i = 0; i < this.length; i++){
        const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
        const slides = this[i].querySelectorAll('.carousel-item');
        const slidesField = this[i].querySelector('.carousel-slides');

        //Задаем обертку c шириной всех слайдов
        slidesField.style.width = 100 * slides.length + '%';
        slides.forEach(slide => {
            slide.style.width = width;
        });

        let offset = 0;
        let slideIndex = 0;
        let dots = [];
        
        if(indicators){
            const indicatorsContainer = document.createElement('ol');
            indicatorsContainer.classList.add('carousel-indicators');
            for(let j = 0; j < slides.length; j++){
                const dot = document.createElement('li');
                dot.setAttribute('data-slide-to', j);
                indicatorsContainer.appendChild(dot);
                dots.push(dot);
            }
           
            this[i].append(indicatorsContainer);
        }
        
        const showSlide = () =>{
            if(indicators){
                dots.forEach(dot => dot.classList.remove('active'));
                dots[slideIndex].classList.add('active');
            }
            slidesField.style.transform = `translateX(-${offset}px)`;
        };

        showSlide();  //Вызываю чтобы добавить класс активности на первый индикатор

        const nextSlide = () => {
            if(slideIndex == slides.length - 1){
                slideIndex = 0;
            }else{
                slideIndex++;
            }
            if(offset == (+width.replace(/\D/g, '') * (slides.length - 1))){
                offset = 0;
            }else{
                offset += +width.replace(/\D/g, '');
            }
            showSlide();
        };

        $(this[i].querySelector('[data-slide="next"]')).click((e) => {
            e.preventDefault();
            nextSlide();
        });

        $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
            e.preventDefault();
            if(slideIndex == 0){
                slideIndex = slides.length - 1;
            }else{
                slideIndex--;
            }
            if(offset == 0){
                offset = +width.replace(/\D/g, '') * (slides.length - 1);
            }else{
                offset -= +width.replace(/\D/g, '');
            }
            showSlide();
        });

        const sliderId = this[i].getAttribute('id');
        $(`#${sliderId} .carousel-indicators li`).click(e => {
            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo;
            offset = +width.replace(/\D/g, '') * slideTo;
            showSlide();
        });

        const auto = (autoplayTimeout) => {
            if(!autoplayTimeout){       // Задаю значение по умолчанию
                autoplayTimeout = 2000;
            }
            let interval = setInterval(() => {
                nextSlide();
            }, autoplayTimeout);
            if(hoverPause){
                this[i].addEventListener('mouseenter', () => {
                    clearInterval(interval);
                });
                this[i].addEventListener('mouseleave', () => {
                    auto(autoplayTimeout);
                });
            }
        };
        if(autoplay){
            auto(autoplayTimeout);
        }
    }
};