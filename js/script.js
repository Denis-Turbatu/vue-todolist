console.log(Vue);

const {createApp} = Vue;

createApp({
    data(){
        return{
            todo: {
                mark: "",
                object: [],
                tag: "",
                done: "",
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
            this.todo.mark = `X`;
            this.todo.done = false;

            this.newTodo.mark = "";
            this.newTodo.object = "";
            this.newTodo.tag = "";
        },
        doneItem: function(curItem, index) {
            this.todo.mark = true;
            this.todo.done = true;
            if (this.todo.mark == true && this.todo.done == true) {
                this.todo.mark = `V`;
            }
        },
        removeList: function (curItem, index) {
            this.todo.object.splice(index, 1)
        }
    }
}).mount('#app');

