const { createApp } = Vue;

createApp({
    data() {
        return {
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                },
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                },
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],

            immagineAttiva: 0,

        }
    },

    created(){
        //riutilizzo la funzione per lo scroll automatico
        this.startAutoscroll()

    },

    methods: {
        //click pulsante in basso passo all'immagine sucessiva
        immagineSuccessiva() {
            if (this.immagineAttiva < this.slides.length - 1) {
                this.immagineAttiva++;

            } else {
                this.immagineAttiva = 0;
            }
        },
        //click pulsante in alto passo all'immagine precedente
        immaginePrecedente() {
            if (this.immagineAttiva > 0) {
                this.immagineAttiva--;
                
            } else {
                this.immagineAttiva = this.slides.length - 1;
            }
        },

        //al click su una thumb visualizzo in grande l'immagine corrispondente
        scegliImmagine(index){
            this.immagineAttiva = index;
        
        },
        
        //fermo lo scroll automatico
        stopAutoscroll(){
            clearInterval(this.scrollAutomatico);
        },

        //attivo lo scroll automatico ogni 3 secondi
        startAutoscroll(){
            this.scrollAutomatico = setInterval(() =>{
                this.immagineSuccessiva()
            },3000);
    
        }


    }

}).mount('#app')



