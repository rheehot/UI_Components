import "./solution1.css"
import renderList from "./listeRenderer"

const app = document.querySelector("#App")
const fetchMoreTrigger = document.querySelector("#fetchMore")
let page = 0

const fetchMore = async () => {
    const target = page ? fetchMoreTrigger : app;
    // PAGE가 0일 때, 초기 데이터 가져올 땐 APP에다가 로딩중을 띄우기 위해
    // TARGET을 삼항연산자로 잡는다.
    
    target.classList.add("loading")
    await renderList(page++)
    target.classList.remove("loading")
}

const onScroll = evt => {
    // 스크롤이 끝에 도달했을 때, fetchMore를 실행해주면 된다.
    // scrollHeight, scrollTop, clientHeight
    // scrollTop 와 clientHeight를 더했을 때, scrollHeight의 height와 같으면 끝에 도달한것
    const {
        scrollHeight,
        scrollTop,
        clientHeight
    } = e.target.scrollingElement
    if(scrollTop + clientHeight >= scrollHeight) fetchMore()
    // 이렇게 짜도 동작은 하지만, 스크롤 한 번에 이벤트가 너무 많이 발생한다. 
    // 스크롤 이벤트 발생 시 매번 onScroll 함수가 실행된다. 성능저하의 요인
    // throttle 또는 debounce 설정을 해주자.
    // throttle : 일정시간 간격으로 한 번씩만 실행
    // debounce : 연속으로 발생하는 이벤트에 대해, 마지막/처음 이벤트 객체에 대해서만 실행

}
// 스크롤 맨 마지막에 동작하면 되니까 debounce만 있어도 충분하다.
document.addEventListener("scroll", debounce(onScroll, 200))
fetchMore()

const debounce = (func, delay) => {
    let timeoutId = null
    return (...args) => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(func.bind(null, ...args), delay)
    }
}