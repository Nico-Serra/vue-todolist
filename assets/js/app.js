console.log('hello world');

const {createApp} = Vue;





createApp({
    data() {
        return{
            //textInput:"",
            toDoUser: {
                text: '',
                done: false,
                delete: false,
            },
            toDoList:[
                // - Creiamo un array di oggetti e ogni oggetto formato da due proprietà 'text:stringa' e 'done: booleano'
                {
                    text: 'Learn to Vue',
                    done: false,
                },
                {
                    text: 'Learn to Laravel',
                    done: false,
                },
                {
                    text: 'Learn to Js',
                    done: false,
                },
                {
                    text: 'Learn to Php',
                    done: false,
                },
            ]
        }
    },
    methods: {
        removeItem(indexEl){
            this.toDoList.splice(indexEl,1)
        },
        addToDoList(){
            //this.toDoUser.text = this.toDoUser;
            // this.toDoUser.done = false;
            //this.toDoUser.text = {...this.textInput}
            //this.toDoList.unshift(this.toDoUser)
            
            //console.log(this.toDoUser);
            //this.textInput = ''
            const newToDo = {...this.toDoUser}
            console.log(newToDo);
            this.toDoList.unshift(newToDo)
            this.toDoUser.text = ''
        },
        reverseDone(toDo){
            if (toDo.done === true) {
                toDo.done = false
            } else /*if (toDo.done === false) */{
                toDo.done = true
            }
        }
    }
}).mount('#app')