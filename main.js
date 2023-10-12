$(document).ready(function(){
    $.get("https://dev.to/api/articles", function(data, err){
        if(data){
            for(let i = 0; i < data.length; i++){
                let y = data [i];
                let x = posts(y);
                $("#contents").append(x);
            }
        }
    });
    let today = new Date()
    dateFormat = today.toLocaleDateString()
    function posts(data){
        return`
        <div class="mainContent">
                <div>
                <a href="${data.canonical_url}"><img src="${data.social_image}" alt="" class="image_one"></a>
                </div>
                <div>
                    <p>${data.title}</p>
                    <h4>${data.description}</h4>
                    <h5>Approximated Read time: ${data.reading_time_minutes} mins</h5>
                    <h6>Published on: ${data.readable_publish_date}</h6>
                </div>
            </div>
        `
    }

})
// $(document).ready(function(){
//     $('.your-class').slick({
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 3
//       });
//   });


function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("mySidenav").style.textAlign = "center";
    document.getElementById("mySidenav").style.opacity = "96%";

    document.getElementById("nav_bar").style.paddingTop = "50px";
    document.getElementById("nav_bar").style.fontSize = "50px";

    document.getElementById("nav_bars").style.paddingTop = "50px";
    document.getElementById("nav_bars").style.fontSize = "50px";

    document.getElementById("nav_barss").style.paddingTop = "50px";
    document.getElementById("nav_barss").style.fontSize = "50px";

    document.getElementById("nav_barsss").style.paddingTop = "50px";
    document.getElementById("nav_barsss").style.fontSize = "50px";
}
    
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}