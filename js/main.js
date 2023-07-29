new Vue ({
    el: '#app',
    data: {
        //параметры для блока просмотра картинки
        isShowing: false,
        blackStyles: { 
            backgroundColor: 'rgba(0, 0, 0, 0)',
            backdropFilter: 'blur(0px)',
            zIndex: -5
        },

        //параметры для блока с ссылками
        isInfoShow: false,
        infoStyle: {},

        //отображаемая в данный момент картинка
        viewImage: '',
        //пути ко всем картинкам
        image1: './img/certificate.jpeg',
        image2: './img/shura.jpg',
        image3: './img/dog.jpg',
        image4: './img/lipa.jpg',

        //параметры таймера
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
    },
    methods: {
        //выдвигание блока с ссылками
        getLinks() {
            this.isInfoShow = !this.isInfoShow;
            if (!this.isInfoShow) {
                this.infoStyle = {
                    left: '-120px',
                }
            } else {
                this.infoStyle = {
                    left: '-20px',
                }
            }
        },

        //отображение и скрытие блока с просмотром картинки
        setDisplay(imageNum) { //функция получает индекс картинки
            let imageObj = document.querySelector('#img'); //находит объект изображения
            if (!this.isShowing) { //если блок не показывался, то:
                this.viewImage = document.querySelector('.image' +
                    imageNum).firstChild.getAttribute('src'); //определяется какое изображение необходимо показать

                //плавное появление объекта изображения
                imageObj.setAttribute('style', 'max-height: 80vh; transition: all 0.3s;');
                //плавное появление блока с просмотром картинки
                this.blackStyles = {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(8px)',
                    zIndex: 5
                }
            } else { //если блок показывался, то:
                //плавное исчезновение объекта изображения
                imageObj.setAttribute('style', 'max-height: 0; transition: all 0.3s;');
                //плавное исчезновение блока с просмотром картинки
                this.blackStyles = {
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    backdropFilter: 'blur(0px)',
                    zIndex: -5
                }
            }
            //смена состояния отображения блока
            this.isShowing = !this.isShowing;
        },
        //подъем в начало страницы
        moveUp(speed) {
            var moving = setInterval(() => {
                if (window.scrollY > 0)
                    window.scrollBy(0, -speed);
                else
                    clearInterval(moving);
            }, 10);
        }
    },
    mounted() {
        //реализация счётчика до предполагаемой даты перевода
        let targetDate = new Date('1 September 2023'); //получаем дату
        setInterval(() => { //каждую секунду обновляем данные
            let curDate = new Date(); //текущая дата и время
            let difference = targetDate - curDate; //разница между текущей датой и предполагаемой в милисекундах
            //перевод в необходимые единицы и округление
            let seconds = Math.floor(difference / 1000);
            let minutes = Math.floor(seconds / 60); 
            let hours = Math.floor(minutes / 60);
            this.days = Math.floor(hours / 24);

            /*
            получение остатка от деления единиц для корректного отображения
            в таймере + перевод в строку и добавление 0 в начале, если число
            имеет длину менее 2 чисволов
            */
            this.hours = String(hours % 24).padStart(2, 0);
            this.minutes = String(minutes % 60).padStart(2, 0);
            this.seconds = String(seconds % 60).padStart(2, 0);
        }, 1000);
    }
});