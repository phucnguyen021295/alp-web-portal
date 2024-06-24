export default function formatMoney(number: number) {
    if (!number) return number;
    // Chuyển số thành chuỗi
    let [integerPart, decimalPart] = number.toString().split('.');

    // Định dạng phần nguyên với dấu chấm
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    // Nếu có phần thập phân, thêm dấu phẩy
    if (decimalPart) {
        return `${integerPart},${decimalPart}`;
    } else {
        return integerPart;
    }
}