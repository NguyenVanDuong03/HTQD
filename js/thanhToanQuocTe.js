// function check(id, regex, message = '') {
//     if($(id).val().trim() === '') {
//         $(id).parent().next('.message').text('Vui lòng nhập đầy đủ thông tin!').show();
//         return false;
//     }else if(regex !== '0') {
//         if(!regex.test($(id).val())) {
//             $(id).parent().next('.message').text(message).show();
//             return false;
//         }
//     }
//     $(id).parent().next('.message').text('').show();
//     return true;
// }
function check(id, regex, message = '') {
    if($(id).val().trim() === '') {
        $(id).parent().next('.message').text(message).show();
        return false;
    }else if(regex !== '0') {
        if(!regex.test($(id).val())) {
            $(id).parent().next('.message').text(message).show();
            return false;
        }
    }
    $(id).parent().next('.message').text('').show();
    return true;
}

function checkDate(id, message = '') {
    const inputDate = new Date($(id).val());
    const currentDate = new Date();

    if($(id).val().trim() === '') {
        $(id).parent().next('.message').text(message).show();
        return false;
    } else if(inputDate < currentDate) {

        $(id).parent().next('.message').text(message).show();
        return false;
    }
    $(id).parent().next('.message').text('').show();
    return true;
}
    
function reset() {
    $('#soThe').val('');
    $('#ngayHetHan').val('');
    $('#maBaoMat').val('');
}

$(document).ready( () => {
    $('#soThe').on('input', () => {
        check($('#soThe'), /^\d+$/, 'Số thẻ không được để trống và là ký tự số');
    })
    $('#soThe').on('change', displayTenChuThe);
    $('#maBaoMat').on('input', () => {
        check($('#maBaoMat'), /^\d{4}$/, 'Vui lòng nhập thông tin mã bảo mật. Ví dụ hợp lệ: 1234');
    })
    $('#ngayHetHan').on('input', () => {
        check($('#ngayHetHan'), /^(0[1-9]|1[0-2])(\/)(20[2-9][0-9])$/,'Vui lòng nhập đúng thông tin. Ví dụ hợp lệ: 06/2024');
    })


    $('#thanhToan').click( (e) => {
        e.preventDefault();

        const iscard = check($('#soThe'), /^\d+$/, 'Số thẻ không được để trống và là ký tự số');
        
        const isdate = check($('#ngayHetHan'), /^(0[1-9]|1[0-2])(\/)(20[2-9][0-9])$/,'Vui lòng nhập đúng thông tin. Ví dụ hợp lệ: 06/2024');
        const ispassword = check($('#maBaoMat'),/^\d{4}$/, 'Vui lòng nhập thông tin mã bảo mật. Ví dụ hợp lệ: 1234');
        

        if(iscard  && isdate && ispassword) {
            $('#exampleModalCenteredScrollable').modal('show');
            $('#btn_xacNhan').click( (e) => {
                e.preventDefault();
                reset();
            })
        }
    } )

    function displayTenChuThe() {
        var soTheValue = $('#soThe').val();
        var tenChuTheInput = $('#tenChuThe');
        
        // Kiểm tra giá trị của "Số thẻ"
       
        if (soTheValue === "123456789") { // Đây là giá trị có sẵn để kiểm tra
            // Nếu giá trị hợp lệ, hiển thị trường "Tên chủ thẻ"
            tenChuTheInput.prop('readonly', false);
            tenChuTheInput.val("LE VAN QUAN");
        } 
        
        if(soTheValue!=="" && soTheValue!=="123456789" ){
            // Nếu giá trị không hợp lệ, ẩn trường "Tên chủ thẻ" và xóa giá trị
            var soThe = document.querySelector('.message');
            soThe.textContent = 'Số thẻ không tồn tại. Vui lòng nhập lại';
            tenChuTheInput.prop('readonly', true);
            tenChuTheInput.val("");
        }
    }
})