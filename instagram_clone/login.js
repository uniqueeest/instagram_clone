const modal = `
<div class="container_wrap">
  <div class="forgot_container">
    <header>
      <img id="lock_icon" src="./image/login_lock.png">
    </header>
    <h4>로그인에 문제가 있나요?</h4>
    <div class="link_page">이메일 주소, 전화번호 또는 사용자 이름을 입력하시면 계정에 다시 액세스할 수 있는 링크를 보내드립니다.</div>
    <form name="login" action="" method="post">
      <input id="user_id" type="text" placeholder="이메일, 전화번호, 사용자 이름">
      <button>로그인 링크 보내기</button>
    </form>
    <div class="or_line">
      <div class="line"></div>
      <div class="or_text">또는</div>
      <div class="line"></div>
    </div>
    <div class="new_account">새 계정 만들기</div>
  </div>
  <div class="bottom_forgot_container">
    <div class="back_main">
      로그인으로 돌아가기
    </div>
  </div> 
</div>
`;

let forgot_pw = document.querySelector(".forgot_pw");

forgot_pw.addEventListener("click", function() {
  let add_div = document.createElement("div")
  add_div.setAttribute("class", "modal__layout");
  add_div.innerHTML = modal;
  document.body.prepend(add_div);

  document.querySelector(".back_main").addEventListener("click", function() {
    document.body.removeChild(add_div);
  })
})

