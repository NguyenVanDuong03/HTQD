const footerHTML = `
<footer style="background-color: #B9D3F0;">
    <div class="p-2">
      <div class="row">
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h3 class="d-flex justify-content-around">Thông tin liên hệ</h3>
            <div class="d-flex align-items-center m-3">
              <img style="width: 30px; height: 30px;" src="imgs/address.png" alt="Address">
              <p class="px-2 mb-0">176 Tây Sơn, Đống Đa, Hà Nội</p>
            </div>
            <div class="d-flex align-items-center mx-3">
              <img style="width: 30px; height: 30px;" src="imgs/phone.png" alt="Phone">
              <p class="px-2 mb-0">0123456789</p>
            </div>
            <div class="d-flex align-items-center mx-3 mt-3">
              <img style="width: 30px; height: 30px;" src="imgs/email.png" alt="Email">
              <p class="px-2 mb-0">htqdhotel@gmail.com</p>
            </div>
          </div>
          

        <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
          <img src="imgs/logo.png" alt="Logo">
          <p style="font-family: amita; font-size: 12.8px; font-weight: bold;">"Vui lòng khách đến, Vừa lòng khách đi"</p>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h3 class="d-flex justify-content-around">Chính sách điều khoản</h3>
            <p class="d-flex justify-content-around">Đăng ký ngày: 10/6/2024</p>
            <div class="d-flex justify-content-around"><img src="imgs/BoCongThuong.png" alt="Bộ Công Thương"></div>
        </div>

        <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h3 class="d-flex justify-content-around mb-4">Quy định</h3>
            <p class="footer-link d-flex justify-content-around"><a style="color: black; text-decoration: underline;" href="#">Quy định của khách sạn</a></p>
            <p class="footer-link d-flex justify-content-around"><a style="color: black; text-decoration: underline;" href="#">Quy định đối với khách hàng</a></p>
        </div>
      
        <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
        <h3 class="d-flex justify-content-around mb-5">Theo dõi trên</h3>
          <div class="d-flex justify-content-around">
              <a href="https://www.facebook.com">
                  <img src="imgs/facebook.png" alt="Facebook">
              </a>
              <a href="https://www.instagram.com">
                  <img src="imgs/instagram.png" alt="Instagram">
              </a>
              <a href="https://www.youtube.com">
                  <img src="imgs/youtube.png" alt="Youtube">
              </a>
              <a href="https://www.tiktok.com">
                  <img src="imgs/tik-tok.png" alt="TikTok">
              </a>
          </div>
        </div>

    </div>
  </footer>
`;

document.addEventListener("DOMContentLoaded", function() {
document.getElementById('footer-placeholder').innerHTML = footerHTML;
});