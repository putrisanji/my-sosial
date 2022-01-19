window.onload = function () {
    // Array of Images
     var backgroundImg=["https://cdn.pixabay.com/photo/2013/06/06/15/36/world-117174_1280.png",
                       "https://cdn.pixabay.com/photo/2017/01/12/13/23/colorful-1974699_1280.png"
                       ]

       setInterval(changeImage, 2000);
      function changeImage() {   
       var i = Math.floor((Math.random() * 2));

       document.body.style.backgroundImage = "url('"+backgroundImg[i]+"')";

     }
   }