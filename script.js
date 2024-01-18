document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        let a = document.getElementsByTagName("iframe a");
        if (a) {
            console.log(a.length);
        }
    }, 2000);
});
