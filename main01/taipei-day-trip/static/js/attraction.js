//根據使用者點擊的導覽時間切換價錢
    const booking_TWD = document.querySelector(".booking-TWD");
    const morning = document.getElementById("morning");
    const afternoon = document.getElementById("afternoon");

    morning.addEventListener("click",function(){
        booking_TWD.textContent="新台幣:2000元"
    });
    afternoon.addEventListener("click",function(){
        booking_TWD.textContent="新台幣:2500元"
    });

    let url=window.location.pathname
    console.log(url)   
//串接景點 API，取得並展⽰特定景點資訊
    const attraction_name = document.querySelector(".attraction-name");
    const attraction_cat_mrt = document.querySelector(".attraction-cat-mrt");
    const attraction_introduce = document.querySelector(".attraction-introduce");
    const attraction_addres = document.querySelector(".attraction-addres");
    const attraction_transport = document.querySelector(".attraction-transport");

    fetch("/api/attraction/10").then(function(response){
        return response.json();
    }).then(function(data){
        let attractionData = data["data"];
        attraction_name.textContent = attractionData["name"];
        attraction_cat_mrt.textContent  = attractionData["category"]+"at "+attractionData["mrt"]
        attraction_introduce.textContent = attractionData["description"];
        attraction_addres.textContent = attractionData["address"];
        attraction_transport.textContent = attractionData["transport"];
        attraction_introduce.textContent = siteData["description"];
        attraction_addres.textContent = siteData["address"];
        attraction_transport.textContent = siteData["transport"];
    }); 

    