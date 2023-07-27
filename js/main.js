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
            dotStyle3: {}
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
        scrollUp() {
            window.scrollTo(0, 0)
        }
    },
})

const mountedApp = app.mount('#app')