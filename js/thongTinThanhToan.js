const thongTinThanhToan = `
<div class="mx-4 mt-2 p-3" style="width: 650px; height: 500px; border: 1px black solid;">
                <div class="row">
                    <div class="col-12">
                        <h4 class=" text-center" style="font-weight: bold;">Thông tin thanh toán</h4>
                    </div>
                    <div class="col-4 my-2">
                        <h5 style="font-weight: bold;" class="">Họ và tên:</h5>
                    </div>
                    <div class="col-8 my-2">
                        <span class="" style="font-size: 20px;">Lê Văn Quân</span>
                    </div>
                    <div class="col-4 my-2">
                        <h5 style="font-weight: bold;" class="">SĐT:</h5>
                    </div>
                    <div class="col-8 my-2">
                        <span class="" style="font-size: 20px;">0397099702</span>
                    </div>
                    <div class="col-4 my-2">
                        <h5 style="font-weight: bold;" class="">Địa chỉ:</h5>
                    </div>
                    <div class="col-8 my-2">
                        <span class="" style="font-size: 20px;">175 Tây Sơn - Đống Đa - Hà Nội</span>
                    </div>
                    <div class="col-4 my-2">
                        <h5 style="font-weight: bold;" class="">Số người lớn:</h5>
                    </div>
                    <div class="col-8 my-2">
                        <span class="" style="font-size: 20px;">1</span>
                    </div>
                    <div class="col-4 my-2">
                        <h5 style="font-weight: bold;" class="">Số trẻ em:</h5>
                    </div>
                    <div class="col-8 my-2">
                        <span class="" style="font-size: 20px;">0</span>
                    </div>
                    <div class="col-4 my-2">
                        <h5 style="font-weight: bold;" class="">Loại phòng:</h5>
                    </div>
                    <div class="col-8 my-2">
                        <span class="" style="font-size: 20px;">Phòng đơn</span>
                    </div>
                    <div class="col-4 my-2">
                        <h5 style="font-weight: bold;" class="">Ngày nhận phòng:</h5>
                    </div>
                    <div class="col-8 my-2">
                        <span class="" style="font-size: 20px;">08h00 - 27/06/2024</span>
                    </div>
                    <div class="col-4 my-2">
                        <h5 style="font-weight: bold;" class="">Ngày trả phòng:</h5>
                    </div>
                    <div class="col-8 my-2">
                        <span class="" style="font-size: 20px;">10h00 - 28/06/2024</span>
                    </div>
                    <div class="col-4 my-2">
                        <h5 style="font-weight: bold;" class="">Tổng thanh toán:</h5>
                    </div>
                    <div class="col-8 my-2">
                        <h5 class="" style="color: #33AA29; font-weight: bold;">1.000.0000 VNĐ</h5>
                    </div>    
                </div>
            </div>
`;

document.addEventListener("DOMContentLoaded", function() {
document.getElementById('thongTinThanhToan').innerHTML = thongTinThanhToan;
});