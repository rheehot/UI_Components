# Dark Mode

<br>
<br>

### 기능 설명

- 토글 버튼이 존재
- 토글 버튼을 클릭하면, 다크 모드와 라이트모드가 토글링 되는 것
- 다크모드를 만드는 방식은 여러개 존재한다.
  1. 클래스를 탈부착 하는 것
  2. style sheet 두 개(다크모드, 라이트모드)만들어서 css 파일 로딩을 하는 방식으로 js로 조정할 수 있다.
  3. CSS에서 제공하는 변수를 사용(커스텀 프로퍼티)하여 값을 바꿔준다면 CSS를 다르게 먹여줄 수 있다.
  4. OS가 제공하는 다크모드 사용

<br>
<br>

### 기능 구현

- 토글 버튼 구현
- 로컬스토리지를 이용
  - 로컬 스토리지에 `theme : light | dark`를 저장해둔다.
  - 토글버튼을 누르면 로컬스토리지에 저장되어 있는 theme의 value가 바뀌게 된다.
  - 리로드를 해도 theme을 유지하기 위해 로컬스토리지를 이용한다.

<br>
<br>

### 베이스 코드

```html
<body>
  <!-- 토글버튼 -->
  <div class="toggle-button">
    <!-- 토글의 동그란 버튼 -->
    <div class="toggle-button-switch"></div>
    <div class="toggle-button-text">
      <div class="toggle-button-text-on"><i class="far fa-sun fa-lg"></i></div>
      <div class="toggle-button-text-off">
        <i class="far fa-moon fa-lg"></i>
      </div>
    </div>
  </div>
</body>
```

<br>
<br>

```css
/* dark theme*/
body.dark {
  background-color: #232323;
}

body.dark .toggle-button > .toggle-button-switch {
  left: 52px;
}

body.dark .toggle-button > .toggle-button-text {
  background-color: #fc3164;
}

body.dark article {
  color: #fff;
}
```

- body에 dark 클래스를 먹이면 dark모드가 되게끔 만든다.
