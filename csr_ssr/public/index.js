//console.log($);
function restart(){
    $("#list").empty();
    $.get('/todo',(data)=>{
        console.log("data")
        console.log(data)
        for(let i of data){
           $('#list').append(`<li>${i}</li>`)
        }
    })
}
restart()
$('#btn').on('click',()=>{
    let data= $('#inp').val()
    console.log(data,"datata");
    $.post('/todo',{data},(res)=>{
        console.log(res,"sahi hai");
        $('#inp').val('')
        restart()
    })
})

