

const header_thanhToanNganHang = `
    <header class="navbar navbar-expand-lg navbar-light" style="border-bottom: 1px #CECECE solid;">
                <div class="container-fluid">
                    <nav class="navbar navbar-light bg-light w-100">
                        <div class="container-fluid">
                          <a id="id_header" class="navbar-brand" href="thanhToan.html"><div style="font-size: 35px;" class="fas fa-arrow-left-long"></div></a>
                          <div class="d-flex align-items-center">
                            <div class="me-4"><a href="#"><img style="width: 40px;" src="imgs/Notification.png" alt=""></a></div>
                            <div class="dropdown">
                                <button style="width: 300px; border: 1px #E8EFF7 solid;" class="btn btn-light" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <div class="user ">
                                        <a class="navbar-brand d-flex align-items-center justify-content-between" href="#">
                                            <div class="d-flex">
                                                <img src="imgs/user.png" alt=""> 
                                                <div class="ms-2" style="width: 50px;">
                                                    <span style="font-size: 14px;">#30122002</span> <br>
                                                    <span>Lê Văn Quân</span>
                                                </div>
                                            </div>                                       
                                            <i class="fas fa-angle-down"></i>
                                        </a>
                                      </div>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Thông tin cá nhân</a></li>
                                <li><a class="dropdown-item" href="thanhToan.html">Thanh toán</a></li>
                                <li><a class="dropdown-item" href="#">Đăng xuất</a></li>
                                </ul>
    
                            </div>
                        </div>  
                    </nav>
                </div>
            </header>
`;


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('header-thanhToanNganHang').innerHTML = header_thanhToanNganHang;
});
    