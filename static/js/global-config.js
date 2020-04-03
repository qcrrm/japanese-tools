var baseUrl = "http://localhost:8080/";
function loginPage() {
    window.sessionStorage.setItem("redirectUrl", window.location.href);
    window.location.href = "/login/index.html";
}
