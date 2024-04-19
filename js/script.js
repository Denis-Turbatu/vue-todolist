console.log(Vue);

const {createApp} = Vue;

createApp({
    data(){
        return{
            todo: {
                mark: "",
                object: [],
                tag: "",
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
            
            this.newTodo.mark = "";
            this.newTodo.object = "";
            this.newTodo.tag = "";
        }
    }
}).mount('#app');

