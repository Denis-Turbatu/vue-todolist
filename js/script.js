console.log(Vue);

const {createApp} = Vue;

createApp({
    data(){
        return{

            todo: {
                object: [],
                tag: [],
                isDone: [],
            },
            
            newTodo: {
                object: "",
                tag: "",
            },
        }
    },
    methods: {
        addTodo: function(){
            this.todo.object.push(this.newTodo.object);
            this.todo.tag.push(this.newTodo.tag);
            this.todo.isDone.push(false);

            this.newTodo.object = "";
            this.newTodo.tag = "";
        },
        doneItem: function(index) {
            if (this.todo.isDone[index] == false) {
                this.todo.isDone[index] = true;
                console.log("fatto");
            } else if (this.todo.isDone[index] == true) {
                this.todo.isDone[index] = false;
                console.log("da fare");
            }
        },
        removeList: function (index) {
            this.todo.object.splice(index, 1);
            this.todo.tag.splice(index, 1);
            this.todo.isDone.splice(index, 1);
        }
    }
}).mount('#app');

