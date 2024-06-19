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

function checkRadio(name, message = '') {
    if ($(`input[name="${name}"]:checked`).length === 0) {
        $(`input[name="${name}"]`).closest('.col-8').find('.message').text(message).show();
        return false;
    } else {
        $(`input[name="${name}"]`).closest('.col-8').find('.message').text('').hide();
        return true;
    }
}

// function checkAddress(id, regex, message = '') {
//     if($(id).val().trim() === '') {
//         $(id).parent().next('.message').text('Địa chỉ không được bỏ trống. Ví dụ: 175 Tây Sơn, Đống Đa, Hà Nội').show();
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

$(document).ready( () => {
    $('#inputName').on('input', () => {
        check($('#inputName'), /^[a-zA-Zà-Ỹ ]+$/, 'Họ tên không chứa ký tự số và ký tự đặc biệt. Ví dụ: Lê Văn Quân');
    })
    $('#inputPhone').on('input', () => {
        check($('#inputPhone'), /^0\d{9}$/, 'Số điện thoại không chứa ký tự chữ và ký tự đặc biệt. Ví dụ: 0123456789');
    })
    $('#inputAddress').on('input', () => {
        check($('#inputAddress'), '0', 'Địa chỉ không chứa ký tự đặc biệt. Ví dụ: 175 Tây Sơn, Đống Đa, Hà Nội');
    })

    $('input[name="check_radio"]').on('change', () => {
        checkRadio('check_radio', 'Vui lòng chọn phương thức thanh toán');
        if ($('#radio1').is(':checked')) {
            $('#exampleModalCenteredScrollable2').modal('show');
            $('#exampleModalCenteredScrollable').modal('hide');
        } else if ($('#radio2').is(':checked')) {
            $('#exampleModalCenteredScrollable3').modal('show');
            $('#exampleModalCenteredScrollable').modal('hide');
        }
    });

    $('#submit_').click( (e) => {
        e.preventDefault();

        const isname = check($('#inputName'), /^[a-zA-Zà-Ỹ ]+$/, 'Họ tên không chứa ký tự số và ký tự đặc biệt. Ví dụ: Lê Văn Quân');
        const isphone = check($('#inputPhone'), /^0\d{9}$/, 'Số điện thoại không chứa ký tự chữ và ký tự đặc biệt. Ví dụ: 0123456789');
        const isaddress = check($('#inputAddress'), '0', 'Địa chỉ không chứa ký tự đặc biệt. Ví dụ: 175 Tây Sơn, Đống Đa, Hà Nội');
        const isradio = checkRadio('check_radio', 'Vui lòng chọn phương thức thanh toán');
        const isdate1 = check($('#ngayNhanPhong'), '0', '');
        const isdate2 = check($('#ngayTraPhong'), '0', '');

        if(isname && isphone && isaddress && isradio && isdate1 && isdate2) {
            $('#exampleModalCenteredScrollable1').modal('show');
            $('#exampleModalCenteredScrollable').modal('hide');
        }
    } )

})

$(document).ready(function() {
    var currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    function checkValidDate(date) {
        var selectedDate = new Date(date);
        return selectedDate >= currentDate;
    }

    function checkNotEmpty(id, message = '') {
        if($(id).val().trim() === '') {
            $(id).parent().next('.check_message').text(message).show();
            return false;
        } else {
            $(id).parent().next('.check_message').text('').show();
            return true;
        }
    }
    
    $('#soLuongNguoiLon').on('input', () => {
        $('#slNguoiLon').val($('#soLuongNguoiLon').val());
    });
    $('#soLuongTreEm').on('input', () => {
        $('#slTreEm').val($('#soLuongTreEm').val());
    });

    function checkRoomType() {
        const roomTypeSelect = $('#loaiPhong');
        const selectMessage = $('.select_message');
    
        // switch (roomTypeSelect.val()) {
        //     case '1':
        //         selectMessage.text('Vui lòng chọn loại phòng').show();
        //         break;
        //     case '2':
        //         selectMessage.text('').show();
        //         break;
        //     case '3':
        //         selectMessage.text('').show();
        //         break;
        //     case '4':
        //         selectMessage.text('').show();
        //         break;
        //     default: selectMessage.text('').show();
        //         break;
        // }
    }    

    $('#idNhanPhong').on('change', function() {
        checkNotEmpty($('#idNhanPhong'), 'Vui lòng chọn ngày nhận phòng');
        var fromDate = $('#idNhanPhong').val();
        var toDate = $('#idTraPhong').val();

        if (!checkValidDate(fromDate)) {
            $('#idNhanPhong').val('');
        }

        if (fromDate && toDate && toDate < fromDate) {
            $('#idTraPhong').val(fromDate);
        }

        $('#ngayNhanPhong').val(fromDate);
    });

    $('#idTraPhong').on('change', function() {
        checkNotEmpty($('#idTraPhong'), 'Vui lòng chọn ngày trả phòng');
        var fromDate = $('#idNhanPhong').val();
        var toDate = $('#idTraPhong').val();

        if (!checkValidDate(toDate)) {
            $('#idTraPhong').val('');
        }

        if (fromDate && toDate && toDate < fromDate) {
            $('#idTraPhong').val(fromDate);
        }

        $('#ngayTraPhong').val(toDate);
    });

    $('#ngayTraPhong').on('change', function() {
        checkNotEmpty($('#ngayTraPhong'), 'Vui lòng chọn ngày trả phòng');
    });

    $('#loaiPhong').on('change', () => {
        checkRoomType();
    });

    $('#btnTimPhong').click(function(e) {
        e.preventDefault();
        var isFromDate = checkNotEmpty($('#idNhanPhong'), 'Vui lòng chọn ngày nhận phòng');
        var isToDate = checkNotEmpty($('#idTraPhong'), 'Vui lòng chọn ngày trả phòng');
        var isRoomType = checkRoomType();

        var fromDate = $('#idNhanPhong').val();
        var toDate = $('#idTraPhong').val();

        if (!checkValidDate(fromDate)) {
            return;
        }

        if (!checkValidDate(toDate)) {
            return;
        }

        if (fromDate && toDate && toDate < fromDate) {
            return;
        }

        if (isFromDate && isToDate && isRoomType) {
            // Thực hiện các hành động khác
        }
    });
});


// 

// function checkNotEmpty(id, message = '') {
//     if($(id).val().trim() === '') {
//         $(id).parent().next('.check_message').text('Vui lòng nhập đầy đủ thông tin!').show();
//         return false;
//     }else {
//     $(id).parent().next('.check_message').text('').show();
//     return true;
// }}

// function checkRoomType() {
//     const roomTypeSelect = $('#loaiPhong');
//     const selectMessage = $('.select_message');
  
//     if (roomTypeSelect.val() === '1') {
//         selectMessage.text('Vui lòng chọn loại phòng').show();
//         return false;
//     } else {
//         selectMessage.text('').show();
//         return true;
//     }
// }

// $(document).ready(function() {
//     $('#idNhanPhong').on('change', () => {
//         checkNotEmpty($('#idNhanPhong'), '');
//     })
//     $('#idTraPhong').on('change', () => {
//         checkNotEmpty($('#idTraPhong'), '');
//     })
//      $('#loaiPhong').on('input', () => {
//     checkRoomType();
//   });

//     $('#btnTimPhong').click(function(e) {
//         e.preventDefault();
//         const isFromDate = checkNotEmpty($('#idNhanPhong'), 'Vui lòng chọn ngày nhận phòng');
//         const isToDate = checkNotEmpty($('#idTraPhong'), 'Vui lòng chọn ngày trả phòng');
//         const isRoomType = checkRoomType();
//         if (isFromDate && isToDate && isRoomType) {
//             // Thực hiện các hành động khác
//         }
//     });

   
// });

