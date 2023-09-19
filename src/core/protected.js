document.addEventListener("DOMContentLoaded", function() {
  //loading
    function checkAuth() {
      const token = localStorage.getItem("userToken");
      if (token) {
        document.getElementById("protectedContent").style.display = "block";
        document.getElementById("nonProtectedContent").style.display = "none";
      } else {
        document.getElementById("protectedContent").style.display = "none";
        document.getElementById("nonProtectedContent").style.display = "block";
      }
      //API 
      //res localStorage.setItem("userToken", JSON.stringfy(res));
        //loading

    }
  
    // Initial check
    checkAuth();
  
    // Simulate login
    document.getElementById("loginButton").addEventListener("click", function() {
      const fakeToken = "123456789"; // Normally, you get this token from your server
      localStorage.setItem("userToken", fakeToken);
      checkAuth();
    });
  
  });
  
  