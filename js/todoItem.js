var TodoItem=Backbone.Model.extend({
    defaults:{
        isCompleted:false
    },
   validate: function(){
       if(!attrs.description)
       return "Description is required."
   },
   toggle:function(){
       this.set("isCompleted", !this.get("isCompleted"))
   }
});
