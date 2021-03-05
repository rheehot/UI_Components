/* 
 * Intersection Observer API의 사용
 * 아직 드래프트 단계라 명시되어 있지만, 모든 브라우저에서 사용 가능하다.
 * debounce 등록으로 충분하긴 하지만, 
 * JS가 개입하지 않고 Debounce와 동일한 효과를 낼 수 있다.
 * 스크롤과 관련된 부하 줄여주는데 좋은 API다.
 */
import "./solution1.css"
import renderList from "./listeRenderer"

const app = document.querySelector("#App")
const fetchMoreTrigger = document.querySelector("#fetchMore")
let page = 0

const fetchMore = async () => {
    const target = page ? fetchMoreTrigger : app;
    target.classList.add("loading")
    await renderList(page++)
    target.classList.remove("loading")
}

/* 
 * const fetchMoreObserver = new IntersectionObserver((entry)=> { console.log(entry)})
 * 인자에 있는 entry 배열의 isIntersecting과 isVisible 값을 보고 판단한다.
 * 여기선 isIntersecting만 알면 된다.
 */
const fetchMoreObserver = new IntersectionObserver(([{isIntersecting}])=> {
    if(isIntersecting) fetchMore()
    //isIntersecting이 되었을 때에 한해서 fetchMore를 호출하면 된다.
    //Observe한 대상(fetchMoreTrigger 요소)의 isIntersecting이 true가 되면(화면에 나타나면) fetchMore 호출
    //intersecting에 대해서 알아봐야 될듯
})

fetchMoreObserver.observe(fetchMoreTrigger)
// observe로 등록한 대상들이 entry 배열에 담긴다.

fetchMore()

