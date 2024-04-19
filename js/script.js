console.log(Vue);

const {createApp} = Vue;

createApp({
    data(){
        return{
            done: "",
            todo: {
                object: [],
            },
            
            newTodo: {
                mark: "",
                object: "",
                tag: "",
            },
        }
    },
    methods: {
        addTodo: function(){
            this.todo.object.push(this.newTodo.object);
            this.todo.done = false;

            this.newTodo.mark = "";
            this.newTodo.object = "";
            this.newTodo.tag = "";
        },
        doneItem: function(curItem, index) {
            if (this.done == "") {
                this.done = "done";
            } else if (this.done == "done") {
                this.done = "";
            }
        },
        removeList: function (index) {
            this.todo.object.splice(index, 1)
        }
    }
}).mount('#app');

