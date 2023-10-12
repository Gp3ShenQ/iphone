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