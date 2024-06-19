document.getElementById("btn_date").addEventListener("click", function() {
    document.getElementById("input_date").style.display = "block";
    document.getElementById("btn_date").style.borderColor = "#413B89";
    document.getElementById("btn_all").style.borderColor = "#EBEBEE";
    // document.getElementById("content_show").style.display = "none";
});

document.getElementById("btn_all").addEventListener("click", function() {
    document.getElementById("btn_all").style.borderColor = "#413B89";
    document.getElementById("btn_date").style.borderColor = "#EBEBEE";
    document.getElementById("input_date").style.display = "none";
    // document.getElementById("content_show").style.display = "inline-block";
});

document.getElementById("view_history").addEventListener("click", function() {
    var fromDate = document.getElementById("from_date").value;
    var toDate = document.getElementById("to_date").value;

    if (fromDate && toDate) {
        if (toDate >= fromDate) {
            // Clear any previous messages
            document.getElementById("message").textContent = "";
            // Redirect to the new page
            window.location.href = "lichSuDatDichVuXemLichSu.html";
        } else {
            document.getElementById("message").textContent = "Ngày kết thúc phải lớn hơn hoặc bằng ngày bắt đầu";
            setTimeout(function() {
                document.getElementById("message").textContent = "";
            }, 5000);
        }
    } else {
        document.getElementById("message").textContent = "Ngày bắt đầu và ngày kết thúc không được để trống";
        setTimeout(function() {
            document.getElementById("message").textContent = "";
        }, 5000);
    }
});

document.getElementById("from_date").addEventListener("change", function() {
    var fromDate = document.getElementById("from_date").value;
    var toDate = document.getElementById("to_date").value;

    if (fromDate && toDate && toDate < fromDate) {
        document.getElementById("to_date").value = fromDate;
    }
});

document.getElementById("to_date").addEventListener("change", function() {
    var fromDate = document.getElementById("from_date").value;
    var toDate = document.getElementById("to_date").value;

    if (fromDate && toDate && toDate < fromDate) {
        document.getElementById("to_date").value = fromDate;
    }
});





