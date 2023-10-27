// const panels = document.querySelector("panel");
// panels.forEach(panel=> {
//     panel.addEventListener("click", ()=>{
//         removeActive();
//         panel.classList.Add("active");
//     });
// })

// function removeActive(){
//     panels.forEach(panel => {
//         panel.classList.remove("active");
//     })
// }

const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
    panel.addEventListener("click", () => {

        removeActive();
        panel.classList.add("active");
    });
})

function removeActive(){
    panels.forEach(panel => {
        panel.classList.remove("active");
    })
}