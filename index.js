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

$(".button2").on("click",function(){
  $(this).toggleClass("press")
  if ($(".indexBox").hasClass("animation")){
    $(".indexBox").removeClass("animation")
    return
  }
  $(".indexBox").addClass("animation")
})

$(".button1").on("click",function(){
  $(this).toggleClass("press")
  if ($(".mes-area").hasClass("openAnimation")){
    $(".mes-area").removeClass("openAnimation")
    $(".mes-area").addClass("closeAnimation")
    return
  }
  $(".mes-area").addClass("openAnimation")
  })

const messageControl = {
  template: `<div class="message">
    <p class="title">{{title}}</p>
    <p class="inner-text">{{text}}</p>
  </div>`,
  addMessage(){
    console.log('submit')
    const title = $('.mes-title input').val();
    const text = $('.mes-text input').val();
    $('.message-area').append(this.template.replace('{{title}}',title).replace('{{text}}',text))
    $('.mes-title input').val('')
    $('.mes-text input').val('')
  },
  submitEvent(){
    const self = this;
    $('.output').on('click',function(){
      self.addMessage()
    })
  },
  init(){
    this.submitEvent()
  }
}
messageControl.init()

$('.clear').on("click",function(){
  $('.message-area').html('')
  if ('.message-area')html() == ('')
    ('.clear').css("display", "none")
})