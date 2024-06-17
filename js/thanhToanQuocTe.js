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
    $('#maBaoMat').on('input', () => {
        check($('#maBaoMat'), '0', 'Vui lòng nhập thông tin mã bảo mật');
    })
    $('#ngayHetHan').on('input', () => {
        checkDate($('#ngayHetHan'), 'Vui lòng nhập đúng thông tin. Ví dụ hợp lệ: 27/06/2024');
    })


    $('#thanhToan').click( (e) => {
        e.preventDefault();

        const isname = check($('#soThe'), /^\d+$/, 'Số thẻ không được để trống và là ký tự số');
        const isdate = checkDate($('#ngayHetHan'), 'Vui lòng nhập đúng thông tin. Ví dụ hợp lệ: 27/06/2024');
        const ispassword = check($('#maBaoMat'),'0', 'Vui lòng nhập thông tin mã bảo mật');
        

        if(isname && isdate && ispassword) {
            $('#exampleModalCenteredScrollable').modal('show');
            $('#btn_xacNhan').click( (e) => {
                e.preventDefault();
                reset();
            })
        }
    } )

})