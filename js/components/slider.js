Vue.component('slider-box', {
    template:
    /*html*/
    `<div :style="{width: '100%'}">
        <div class="slide_block">
            <div class="box">
                <button class="left" @click="moveContent('left')">
                    <div>➪</div>
                </button>
                <div class="visible_zone">
                    <div class="content" :style="contentStyle">
                        <div class="element">
                            Когда я был ребенком, отец строго-настрого запретил
                            мне открывать дверь подвала. Но однажды детское
                            любопытство пересилило. Я открыл дверь и увидел
                            вещи, которых никогда раньше не видел: траву,
                            деревья, небо, солнце...
                        </div>
                        <div class="element">
                            Работа программиста и шамана имеет много общего
                            — оба бормочут непонятные слова, совершают непонятные
                            действия и не могут объяснить, как оно работает.
                        </div>
                        <div class="element">
                            Решили американцы напасть на Россию. Обратились
                            к партнёрам в Европе: "Когда лучше напасть?"
                            Французы говорят: "В любое время года, только не зимой."
                            Немцы говорят: "В любое время года, только не летом."
                            Решили американцы спросить еще и у Китая, а китайцы
                            и говорят: "Не тяните, нападайте сейчас. В России
                            сейчас космодром новый строится, им пленные очень нужны."
                        </div>
                    </div>
                </div>
                <button class="right" @click="moveContent('right')">
                    <div>➪</div>
                </button>
                <ul class="dots">
                    <li :style="activeDotStyle" @click="activeDot('0')"></li>
                    <li @click="activeDot('1')"></li>
                    <li @click="activeDot('2')"></li>
                </ul>
            </div>
        </div>
    </div>`,
    data() {
        return {
            //параметры для контента
            contentStyle: {
                left: 0
            },
            currentElement: 0,
            //стиль активной точки
            activeDotStyle: "width: 32px; height: 32px; background-color: rgb(189, 20, 20)",
        }
    },
    methods: {
        //функция сдвига сонтента
        moveContent(dir) { //на входе получает направление
            //объекты кнопок
            let btnLeft = document.querySelector('.left');
            let btnRight = document.querySelector('.right');
            //нажатие на правую кнопку
            if (dir == 'right') {
                //отображение "нажатия" кнопки
                btnRight.setAttribute('style', 'text-shadow: 0px 0px 1px black; font-size: 90px; color: black');
                setTimeout(() =>{
                    //отображение "отжатия" кнопки через 0.2с
                    btnRight.setAttribute('style', 'text-shadow: 3px 3px 4px black');
                }, 200);
                //сдвиг элемента вправо и возврат на первую позицию
                if (this.currentElement < 2)
                    this.currentElement++
                else
                    this.currentElement = 0
            }
            //нажатие на левую кнопку
            else if (dir == 'left') {
                btnLeft.setAttribute('style', 'text-shadow: 0px 0px 1px black; font-size: 90px; color: black');
                setTimeout(() =>{
                    btnLeft.setAttribute('style', 'text-shadow: 3px 3px 4px black');
                }, 200);
                if (this.currentElement > 0)
                    this.currentElement--
                else
                    this.currentElement = 2
            }
            //вызов функции смены активной точки
            this.activeDot(this.currentElement);
        },
        //функция принимает значение индекса активного элемента
        activeDot(element) {
            //массив всех точек
            let dots = document.querySelector('.dots');
            //перебор массива и отключение стилей для каждой точки
            for(let i = 0; i < dots.children.length; i++) {
                dots.children[i].removeAttribute('style')
            }
            //включение стиля только для активной точки
            dots.children[element].setAttribute('style', this.activeDotStyle);
            //перемещение коетента в зависимости от активного элемента
            switch (Number(element)) {
                case 0:
                    this.contentStyle = {left: '0', transition: 'all 1s'}
                    break;
                case 1:
                    this.contentStyle = {left: '-70vw', transition: 'all 1s'}
                    break;
                case 2:
                    this.contentStyle = {left: '-140vw', transition: 'all 1s'}
                    break;
            }
        },
    },
});