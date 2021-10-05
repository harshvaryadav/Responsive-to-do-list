function fun()
{
      $("#add").click(function(){
      var v=$("#b").val();  
      if(v!="")
      {
         $("#b").val("");  
         var l=$("<li></li>");
         var p=$("<p></p>");
         var s=$("<span>Remove</span>");
         p.text(v);
         l.addClass("container");
         p.addClass("p");
         s.addClass("span");
         l.append(p,s);
         $("#d").append(l);
         s.click(function(){
             var p=s.parent();
             p.remove();
         });
      }
});
}