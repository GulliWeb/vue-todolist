const { createApp } = Vue;

// Creo oggetto Vue
createApp({
    // Dati che mi serviranno per la mia applicazione vue 
    data(){
        return{
            // Creare to do list di OGGETTI
            todoItem: [
                {text: 'Studiare Vue.js', done: true},
                {text: 'Aggiornare profilo Github', done: true},
                {text: 'Finire di sviluppare sito clone Playstation', done: false},
                {text: 'Completare la certificazione JS FreeCodeCademy', done: false}
            ]
        }
    },
    // Metodi vue
    methods: {
        // Metodo che restituisce solo le toDo true MILESTONE 1
        // getCompletedItems (){
        //     return this.todoItem.filter(item => item.done)
        // }
        toDoRemove(index){
            this.todoItem.splice(index, 1)
        }

    },
    
}).mount('#app');