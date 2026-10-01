let choice;
let orderCode = "";
let isValidOrder = false;

do {
    console.log("===== MENU =====");
    console.log("1. Nhập mã đơn hàng");
    console.log("2. Tính tiền và in hóa đơn");
    console.log("3. Thoát");

    choice = prompt("Nhập lựa chọn:");

    switch (choice) {
        case "1":
            orderCode = prompt("Nhập mã đơn hàng:");
            orderCode = orderCode.trim().toUpperCase();

            if (orderCode.startsWith("GYM-") && orderCode.length >= 8) {
                isValidOrder = true;
                console.log("Mã đơn hàng hợp lệ:", orderCode);
            } else {
                isValidOrder = false;
                console.log("Mã đơn hàng không hợp lệ!");
            }
            break;

        case "2":
            if (!isValidOrder) {
                console.log("Vui lòng nhập mã đơn hàng hợp lệ trước!");
                break;
            }

            let total = 0;
            let products = ["SHAKER", "GLOVES", "STRAP"];
            let prices = [120000, 180000, 150000];
            let quantities = [1, 1, 1];

            for (let i = 0; i < products.length; i++) {
                total += prices[i] * quantities[i];
            }

            let vip = prompt("Khách có thẻ VIP không? (Y/N)");
            vip = vip.trim().toUpperCase();

            let discount = 0;
            if (vip === "Y") {
                discount = total * 0.1;
            }

            let finalTotal = total - discount;

            console.log("-".repeat(40));
            console.log("HÓA ĐƠN GYM");
            console.log("-".repeat(40));
            console.log("Mã đơn hàng:", orderCode);
            console.log("Sản phẩm".padEnd(15) + "SL".padStart(5) + "Tiền".padStart(15));

            for (let i = 0; i < products.length; i++) {
                let money = prices[i] * quantities[i];
                console.log(products[i].padEnd(15) + String(quantities[i]).padStart(5) + String(money).padStart(15));
            }

            console.log("-".repeat(40));
            console.log("Tạm tính:".padEnd(25) + String(total).padStart(15));
            console.log("Giảm giá:".padEnd(25) + String(discount).padStart(15));
            console.log("Thanh toán:".padEnd(25) + String(finalTotal).padStart(15));
            console.log("-".repeat(40));
            break;

        case "3":
            console.log("Đã thoát chương trình!");
            break;

        default:
            console.log("Lựa chọn không hợp lệ!");
    }
} while (choice !== "3");