function getTime(){
  let time = new Date();
  let month = time.getMonth() + 1
  let date = time.getDate()
  let hour = String(time.getHours()).padStart(2, "0")
  let minute = String(time.getMinutes()).padStart(2, "0")
  $('.month').text(`${month}月${date}日`)
  $('.hour').text(`${hour}:${minute}`)
  
}

function updateTime(){
  setInterval(()=>{
    getTime()
  },1000*60)
  
}
getTime()
updateTime()

$(".button1").on("click",function(){
  $(".button1").removeClass("buttonStyle")
  $(".button1").addClass("buttonStyleIn")
  $(".button2,.button3,.button4").removeClass("buttonStyleIn")
  $(".button2,.button3,.button4").addClass("buttonStyle")
  $(".indexBox").removeClass("animation")
})
$(".button2").on("click",function(){
  $(".button2").toggleClass("buttonStyleIn")
  if ($(".indexBox").hasClass("animation")){
    $(".indexBox").removeClass("animation")
    return
  }
  $(".indexBox").addClass("animation")
  $(".button1,.button3,.button4").removeClass("buttonStyleIn")
  $(".button1,.button3,.button4").addClass("buttonStyle")
})


$(".button3").on("click",function(){
  $(".button3").removeClass("buttonStyle")
  $(".button3").addClass("buttonStyleIn")
  $(".button2,.button1,.button4").removeClass("buttonStyleIn")
  $(".button2,.button1,.button4").addClass("buttonStyle")
  $(".indexBox").removeClass("animation")
})
$(".button4").on("click",function(){
  $(".button4").removeClass("buttonStyle")
  $(".button4").addClass("buttonStyleIn")
  $(".button2,.button3,.button1").removeClass("buttonStyleIn")
  $(".button2,.button3,.button1").addClass("buttonStyle")
  $(".indexBox").removeClass("animation")
})

