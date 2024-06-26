document.addEventListener('DOMContentLoaded', function() {
    const selected = document.querySelector('.select-selected');
    const items = document.querySelector('.select-items');
    const options = items.querySelectorAll('.custom-option');

    selected.addEventListener('click', function() {
        items.classList.toggle('select-show');
        selected.classList.toggle('select-arrow-active');
    });

    options.forEach(option => {
        option.addEventListener('click', function() {
            selected.innerHTML = this.innerHTML;
            items.classList.remove('select-show');
        });
    });

    document.addEventListener('click', function(e) {
        if (!selected.contains(e.target)) {
            items.classList.remove('select-show');
            selected.classList.remove('select-arrow-active');
        }
    });
});

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

function checkDate(id, regex, message = '') {
    if($(id).val().trim() === '') {
        $(id).parent().next('.message').text('Vui lòng nhập đúng thông tin. Ví dụ hợp lệ: 06/2024').show();
        return false;
    } else if (regex !== '0') {
        if(!regex.test($(id).val())) {
            $(id).parent().next('.message').text(message).show();
            return false;
        }
    }
    $(id).parent().next('.message').text('').show();
    return true;
}
    
function reset() {
    $('#soThe').val('');
    $('#soDienThoai').val('');
    $('#ngayHetHan').val('');
}

$(document).ready( () => {
    $('#soThe').on('input', () => {
        check($('#soThe'), /^\d+$/, 'Số thẻ không được để trống và là ký tự số');
        var soTheValue = $('#soThe').val();
        var tenChuTheInput = $('#tenChuThe');
        
        // Kiểm tra giá trị của "Số thẻ"
        if (soTheValue === "123456789") { // Đây là giá trị có sẵn để kiểm tra
            // Nếu giá trị hợp lệ, hiển thị trường "Tên chủ thẻ"
            tenChuTheInput.val("LE VAN QUAN");
        }
        
        // if(soTheValue!=="123456789"){
        //     // Nếu giá trị không hợp lệ, ẩn trường "Tên chủ thẻ" và xóa giá trị
        //     var soThe = document.querySelector('.message');
        //     soThe.textContent = 'Số thẻ không tồn tại. Vui lòng nhập lại';
        //     tenChuTheInput.prop('readonly', true);
        //     tenChuTheInput.val("");
        // }
    })
    $('#soDienThoai').on('input', () => {
        check($('#soDienThoai'), /^0\d{9}$/, 'Vui lòng nhập đúng thông tin. Ví dụ hợp lệ: 0397099702');
    })
    $('#ngayHetHan').on('input', () => {
        checkDate($('#ngayHetHan'), /^(0[1-9]|1[0-2])(\/)(20[2-9][0-9])$/,'Vui lòng nhập đúng thông tin. Ví dụ hợp lệ: 06/2024');
    })
   


    $('#thanhToan').click( (e) => {
        e.preventDefault();

        const iscard = check($('#soThe'), /^123456789$/, 'Số thẻ không tồn tại. Vui lòng nhập lại');
        const isphone = check($('#soDienThoai'), /^0\d{9}$/, 'Vui lòng nhập đúng thông tin. Ví dụ hợp lệ: 0397099702');
        const isdate = checkDate($('#ngayHetHan'), /^(0[7-9]|1[0-2])\/(2024|20[2-9][5-9]|20[3-9][0-9])$/,'Thẻ của bạn đã hết hạn. Vui lòng chọn thẻ khác');

        if(iscard && isphone && isdate) {
            $('#exampleModalCenteredScrollable').modal('show');
            $('#btn_xacNhan').click( (e) => {
                e.preventDefault();
                reset();
            })
        }
    } )
    
})

