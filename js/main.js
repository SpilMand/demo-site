const app = Vue.createApp ({
    data() {
        return {
            isShowing: false,
            blackStyles: {
                display: 'none',
            },

            isInfoShow: false,
            infoStyle: {},

            viewImage: '',
            image1: './img/certificate.jpeg',
            image2: './img/shura.jpg',
            image3: './img/dog.jpg',
            image4: './img/lipa.jpg',

            contentStyle: {
                left: 0
            },
            currentElement: 1,
            btnStyleL: {},
            btnStyleR: {},

            dotStyle1: {
                width: '32px',
                height: '32px',
                backgroundColor: 'rgb(189, 20, 20)',
            },
            dotStyle2: {},
            dotStyle3: {},

            //timer
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00'
        }
    },
    methods: {
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

        setDisplay(image) {
            if (this.isShowing == false) {
                this.isShowing = true
                this.blackStyles = {display: ''}
                this.viewImage = image            
            } else {
                this.isShowing = false
                setTimeout(() => {
                    this.blackStyles = {display: 'none'}
                }, 200);
            }
        },
        moveContent(dir) {
            if (dir == 'right') {
                this.btnStyleR = {
                    boxShadow: 'inset 5px 5px 10px black',
                }
                setTimeout(() =>{
                    this.btnStyleR = {boxShadow: 'inset -5px -5px 5px black'}
                }, 200);
                if (this.currentElement < 3)
                    this.currentElement++
                else
                    this.currentElement = 1
            }
            else if (dir == 'left') {
                this.btnStyleL = {
                    boxShadow: 'inset 5px 5px 10px black',
                }
                setTimeout(() =>{
                    this.btnStyleL = {boxShadow: 'inset -5px -5px 5px black'}
                }, 200);
                if (this.currentElement > 1)
                    this.currentElement--
                else
                    this.currentElement = 3
            }
            this.activeDot(this.currentElement)
            
        },
        activeDot(element) {
            /* Да, код страшный и костыльный, зато работает :) */
            switch (Number(element)) {
                case 1:
                    this.contentStyle = {left: '0', transition: 'all 1s'}

                    this.dotStyle1 = {
                        width: '32px',
                        height: '32px',
                        backgroundColor: 'rgb(189, 20, 20)',
                        transition: 'all 0.2s',
                    }
                    this.dotStyle2 = {
                        width: '16px',
                        height: '16px',
                        backgroundColor: 'black',
                        transition: 'all 0.2s',
                    }
                    this.dotStyle3 = {
                        width: '16px',
                        height: '16px',
                        backgroundColor: 'black',
                        transition: 'all 0.2s',
                    }
                    break;
                case 2:
                    this.contentStyle = {left: '-70vw', transition: 'all 1s'}

                    this.dotStyle2 = {
                        width: '32px',
                        height: '32px',
                        backgroundColor: 'rgb(189, 20, 20)',
                        transition: 'all 0.2s',
                    }
                    this.dotStyle1 = {
                        width: '16px',
                        height: '16px',
                        backgroundColor: 'black',
                        transition: 'all 0.2s',
                    }
                    this.dotStyle3 = {
                        width: '16px',
                        height: '16px',
                        backgroundColor: 'black',
                        transition: 'all 0.2s',
                    }
                    break;
                case 3:
                    this.contentStyle = {left: '-140vw', transition: 'all 1s'}

                    this.dotStyle3 = {
                        width: '32px',
                        height: '32px',
                        backgroundColor: 'rgb(189, 20, 20)',
                        transition: 'all 0.2s',
                    }
                    this.dotStyle1 = {
                        width: '16px',
                        height: '16px',
                        backgroundColor: 'black',
                        transition: 'all 0.2s',
                    }
                    this.dotStyle2 = {
                        width: '16px',
                        height: '16px',
                        backgroundColor: 'black',
                        transition: 'all 0.2s',
                    }
                    break;
            }
        },
    },
    mounted() {
        targetDate = new Date('1 September 2023');
        setInterval(() => {
            curDate = new Date();
            difference = targetDate - curDate;
            seconds = Math.floor(difference / 1000);
            minutes = Math.floor(seconds / 60);
            hours = Math.floor(minutes / 60);
            this.days = Math.floor(hours / 24);

            this.hours = String(hours % 24).padStart(2, 0);
            this.minutes = String(minutes % 60).padStart(2, 0);
            this.seconds = String(seconds % 60).padStart(2, 0);
        }, 1000);
    }
})

const mountedApp = app.mount('#app')