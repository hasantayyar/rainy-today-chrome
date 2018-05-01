    function displayError(){}
      function displayPosition(position) {
        $.post("http://rainy-today.appspot.com",{lat:position.coords.latitude,lon:position.coords.longitude},
          function(data){
            dataObj = JSON.parse(data);
              desc = dataObj.weather[0].description;
              if(desc.search('rainy')>0){
                  $("body").addClass('hell');$("h1").addClass('hell');
                  $("h1").html("Hell Yes!"); 
              }else{
                  $("body").addClass('well');$("h1").addClass('well');
                  $("h1").html("No!"); 
              }
              $("#desc").html(desc); 
          })
      }
if (navigator.geolocation) {
        var timeoutVal = 10 * 1000;
        navigator.geolocation.getCurrentPosition(
          displayPosition,
          displayError,
          { enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 }
        );
      }
      else {
        alert("Geolocation is not supported by this browser");
      }


  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-1301980-38', 'rainy-today.appspot.com');
  ga('send', 'pageview');
