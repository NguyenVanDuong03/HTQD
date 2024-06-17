function check(id, regex, message = '') {
    if($(id).val().trim() === '') {
        $(id).parent().next('.message').text('Vui lòng nhập đầy đủ thông tin!').show();
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

function checkAddress(id, regex, message = '') {
    if($(id).val().trim() === '') {
        $(id).parent().next('.message').text('Địa chỉ không được bỏ trống. Ví dụ: 175 Tây Sơn, Đống Đa, Hà Nội').show();
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

$(document).ready( () => {
    $('#inputName').on('input', () => {
        check($('#inputName'), /^[a-zA-Zà-Ỹ ]+$/, 'Họ tên không chứa ký tự số và ký tự đặc biệt. Ví dụ: Lê Văn Quân');
    })
    $('#inputPhone').on('input', () => {
        check($('#inputPhone'), /^0\d{9}$/, 'Số điện thoại không chứa ký tự chữ và ký tự đặc biệt. Ví dụ: 0123456789');
    })
    $('#inputAddress').on('input', () => {
        $('#inputAddress').on('input', () => {
            checkAddress($('#inputAddress'), '0', '');
        })
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
        const isaddress = checkAddress($('#inputAddress'), '0', '');
        const isradio = checkRadio('check_radio', 'Vui lòng chọn phương thức thanh toán');

        if(isname && isphone && isaddress && isradio) {
            $('#exampleModalCenteredScrollable1').modal('show');
            $('#exampleModalCenteredScrollable').modal('hide');
        }
    } )

})

document.getElementById("ngayNhanPhong").addEventListener("change", function() {
    var fromDate = document.getElementById("ngayNhanPhong").value;
    var toDate = document.getElementById("ngayTraPhong").value;

    if (fromDate && toDate && toDate < fromDate) {
        document.getElementById("ngayTraPhong").value = fromDate;
    }
});

document.getElementById("ngayTraPhong").addEventListener("change", function() {
    var fromDate = document.getElementById("ngayNhanPhong").value;
    var toDate = document.getElementById("ngayTraPhong").value;

    if (fromDate && toDate && toDate < fromDate) {
        document.getElementById("ngayTraPhong").value = fromDate;
    }
});
document.getElementById("idNhanPhong").addEventListener("change", function() {
    var fromDate = document.getElementById("idNhanPhong").value;
    var toDate = document.getElementById("idTraPhong").value;

    if (fromDate && toDate && toDate < fromDate) {
        document.getElementById("idTraPhong").value = fromDate;
    }
});

document.getElementById("idTraPhong").addEventListener("change", function() {
    var fromDate = document.getElementById("idNhanPhong").value;
    var toDate = document.getElementById("idTraPhong").value;

    if (fromDate && toDate && toDate < fromDate) {
        document.getElementById("idTraPhong").value = fromDate;
    }
});

// 

function checkNotEmpty(id, message = '') {
    if($(id).val().trim() === '') {
        $(id).parent().next('.check_message').text('Vui lòng nhập đầy đủ thông tin!').show();
        return false;
    }else {
    $(id).parent().next('.check_message').text('').show();
    return true;
}}

function checkRoomType() {
    const roomTypeSelect = $('#loaiPhong');
    const selectMessage = $('.select_message');
  
    if (roomTypeSelect.val() === '1') {
        selectMessage.text('Vui lòng chọn loại phòng').show();
        return false;
    } else {
        selectMessage.text('').show();
        return true;
    }
}

$(document).ready(function() {
    $('#idNhanPhong').on('change', () => {
        checkNotEmpty($('#idNhanPhong'), '');
    })
    $('#idTraPhong').on('change', () => {
        checkNotEmpty($('#idTraPhong'), '');
    })
     $('#loaiPhong').on('input', () => {
    checkRoomType();
  });


    
    $('#btnTimPhong').click(function(e) {
        e.preventDefault();
        const isFromDate = checkNotEmpty($('#idNhanPhong'), 'Vui lòng chọn ngày nhận phòng');
        const isToDate = checkNotEmpty($('#idTraPhong'), 'Vui lòng chọn ngày trả phòng');
        const isRoomType = checkRoomType();
        if (isFromDate && isToDate && isRoomType) {
            // Thực hiện các hành động khác
        }
    });

   
});

