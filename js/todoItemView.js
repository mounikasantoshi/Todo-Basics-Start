var TodoItemView=Backbone.View.extend({
    tagName:"li",
    initialize:function(options){
        if(!(options&& options.model))
        throw new Error("model is not specified.")

        this.model.on("change",this.render,this);
    },

    events:{
     "click #toggle":"onClickToggle",
     "click #delete":"onClickDelete"
    },

   onClickDelete:function(){
       this.model.destroy()
   },

    onClickToggle: function(){
        // this.model.set("isCompleted",!this.model.get("isCompleted"))
        this.model.toggle()
        console.log(this.model.toJSON());
    //     if(this.model.get("isCompleted"))
    //     this.model.set("isCompleted",false)
    //   else
    //   this.model.set("isCompleted", true)
    },
    render:function(){

        this.$el.toggleClass("completed", this.model.get("isCompleted"))
        var checked= this.model.get("isCompleted")?"checked":"";
        this.$el.html("<input id='toggle' type='checkbox' "+ checked + "></input>" + this.model.escape("description")
        +"<button id='delete'>Delete</button>");

        return this
    }
})