function getTime(){let t=new Date,e=t.getMonth()+1,s=t.getDate(),n=String(t.getHours()).padStart(2,"0"),a=String(t.getMinutes()).padStart(2,"0");$(".month").text(`${e}月${s}日`),$(".hour").text(`${n}:${a}`)}function updateTime(){setInterval((()=>{getTime()}),6e4)}getTime(),updateTime(),$(".button2").on("click",(function(){$(this).toggleClass("press"),$(".indexBox").hasClass("animation")?$(".indexBox").removeClass("animation"):$(".indexBox").addClass("animation")})),$(".button1").on("click",(function(){if($(this).toggleClass("press"),$(".mes-area").hasClass("openAnimation"))return $(".mes-area").removeClass("openAnimation"),void $(".mes-area").addClass("closeAnimation");$(".mes-area").addClass("openAnimation")}));const messageControl={template:'<div class="message">\n    <p class="title">{{title}}</p>\n    <p class="inner-text">{{text}}</p>\n  </div>',addMessage(){console.log("submit");const t=$(".mes-title input").val(),e=$(".mes-text input").val();$(".messageBox").append(this.template.replace("{{title}}",t).replace("{{text}}",e)),$(".mes-title input").val(""),$(".mes-text input").val("")},submitEvent(){const t=this;$(".output").on("click",(function(){t.addMessage()}))},init(){this.submitEvent()}};messageControl.init();