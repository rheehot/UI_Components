/*
1. 로컬스토리지에 저장되어 있는 theme을 기준으로 초기 렌더링을 한다.
2. 로컬스토리지에 저장된 theme이 없다면 라이트 모드로 초기 렌더링 한다.
3. theme을 적용하여 렌더링 할 때, 깜빡임 현상이 발생하지 않도록 한다.
4. 토글 버튼을 클릭하면 로컬스토리지에 theme을 저장하고 저장된 theme을 기준으로 다시 렌더링한다.
*/

// 로컬스토리지와 css 변경 코드
document.addEventListener("DOMContentLoaded",()=>{
    const theme = localStorage.getItem("theme")
    if(!theme) localStorage.setItem("theme", "light")
    
    //if(theme === "dark") document.body.classList.add("dark")
    //else document.body.classList.remove("light")
    document.body.classList.toggle('dark', theme === 'dark')

    // 초기 렌더링할 때 라이트 모드로 보이다가
    // 다크모드로 다시 적용하게 되면서 깜빡임 현상이 나타난다.
    //=> body를 우선 visibility: hidden을 해두고
    //=> 위 로직을 지난 다음에 body를 다시 보이게 만들면 된다.
    
    setTimeout(()=>{
        document.body.style.visibility = "visible"
    },300)
    // transition이 걸려있는 애들은 또 이상현상이 발생할 것이다.
    // 따라서 setTimeout을 걸어주자.
})


// 토글 버튼 이벤트 핸들러
document.querySelector(".toggle-button").onClick = (evt) => {
    const theme = localStorage.getItem("theme")

    //if(theme===dark) localStorage.setItem("theme","light")
    //else localStorage.setItem("theme","dark")
    localStorage.setItem("theme", `${theme ==="dark" ? 'light' : 'dark' }`)

    document.body.classList.toggle('dark')
}