console.log('hello world');

const {createApp} = Vue;



// - Aggiungiamo un input con v-model che aggiunge un nuovo oggetto al keyup
    

createApp({
    data() {
        return{
            //message: 'ciao',
            toDoList:[
                // - Creiamo un array di oggetti e ogni oggetto formato da due proprietà 'text:stringa' e 'done: booleano'
                {
                    text: 'Learn to Vue',
                    done: false,
                },
                {
                    text: 'Learn to Laravel',
                    done: true,
                },
                {
                    text: 'Learn to Js',
                    done: false,
                },
                {
                    text: 'Learn to Php',
                    done: true,
                },
            ]
        }
    },
    methods: {
        removeItem(indexEl){
            this.toDoList.splice(indexEl,1)
        }
    }
}).mount('#app')