const headerHTML = `
<header class="navbar navbar-expand-lg navbar-light" style="background-color: #B9D3F0;">
    <div class="container-fluid">
      <a class="navbar-brand" href="trangChu.html"><img src="imgs/logo.png" alt="Logo"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav w-100 justify-content-around align-items-center">
          <li class="nav-item">
            <a class="navbar-brand" aria-current="page" href="trangChu.html">TRANG CHỦ</a>
          </li>
          <li class="nav-item">
            <a class="navbar-brand" aria-current="page" href="#">QUY ĐỊNH</a>
          </li>
          <li class="nav-item">
            <a class="navbar-brand" aria-current="page" href="#">HỘI NGHỊ VÀ SỰ KIỆN</a>
          </li>
          <li class="nav-item">
            <a class="navbar-brand" aria-current="page" href="datPhong.html">ĐẶT PHÒNG</a>
          </li>
          <li class="nav-item">
            <a class="navbar-brand" aria-current="page" href="#">ƯU ĐÃI</a>
          </li>
          <li class="nav-item">
            <a class="navbar-brand" aria-current="page" href="lichSuDatDichVu.html">LỊCH SỬ ĐẶT DỊCH VỤ</a>
          </li>
          <li class="nav-item">
            <div class="user ">
              <a class="navbar-brand d-flex align-items-center" aria-current="page" href="#"><img src="imgs/user.png" alt=""> <i class="fas fa-angle-down"></i></a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>
`;

document.addEventListener("DOMContentLoaded", function() {
document.getElementById('header-placeholder').innerHTML = headerHTML;
});