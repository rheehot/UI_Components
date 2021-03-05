// 대부분의 운영체제는 OS차원에서 다크모드를 지원해주는 기능이 있다.
// OS레벨에서 지정한 테마가 있다면, 그 테마를 우선해서 보여주고
// 우리 사이트에서 라이트모드와 다크모드도 바꿀 수 있도록 하자 

// js에서도 os레벨에서 설정된 theme을 감지할 수 있는 기능이 있다.
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
//MediaQueryList {media: "(prefers-color-scheme: light)", matched:false, onchange:null}
//위와 같은 객체가 반환됨
//matched가 true/false를 반환하게 된다.

darkModeMediaQuery.addListener(e=>{
    const darkModeOn = e.matches
})


//실제 코드 
document.addEventListener("DOMContentLoaded",()=>{
    let theme = localStorage.getItem("theme")
    if(!theme) {
        const {matches} = window.matchMedia('(prefers-color-scheme: dark)')
        theme = matches ? 'dark' : 'light'  
        localStorage.setItem("theme", theme)
    }
    
    document.body.classList.toggle('dark', theme === 'dark')

    setTimeout(()=>{
        document.body.style.visibility = "visible"
    },300)
})
