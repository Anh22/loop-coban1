
// Bài 1: Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành.

// for (let i = 1; i <= 100; i++) {
//     if (i === 99) {
//         alert("Đã hoàn thành.");
//     }
// }
// Bài 2: Sử dụng hàm prompt() để lấy thông tin nhiệt độ hiện tại được nhập bởi người truy cập. Nếu nhiệt độ nhập vào trên 100, yêu cầu người dùng giảm nhiệt độ. Nếu nhiệt độ dưới 20, yêu cầu người dùng tăng nhiệt độ.
// let n= prompt('Nhập C')
// for (let i = 0; i<=100;i++){
//     if (i>100){
//         alert("Giảm nhiệt đọ")
//         break
//     }
//     else if(i<=20){
//         alert('Tăng nhiệt độ')
//         break
//     }
// }
// Bài 3: Hiển thị ra 20 số trong dãy fibonacci đầu tiên.
// let a = 1;
// let b =2 ;
// for (let dem = 0;dem<=20;dem++){
//     document.write(a+'<br>')
//     let c = a+b;
//     a = b ;
//     b=c;
// }
// Bài 4: Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.
// let a = 1;
// let b =2 ;
// for (let dem = 0;dem<=20;dem++){
//     document.write(a+'<br>')
//     let c = a+b;
//     a = b ;
//     b=c;
//     if(c%5===0){
//         alert(c)
//         break
//
//     }
// }

// Bài 5: Tính tổng của 20 số đầu tiên trong dãy fibonacci.
// let a = 1;
// let b =2 ;
// let tong=0;
// for (let dem = 0;dem<=20;dem++){
//     // document.write(a+'<br>')
//     let c = a+b;
//     a = b ;
//     b=c;
//     tong+=a;
//     console.log('tong = '+tong)
//
//
// }
// Bài 6: Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.
// let number=1;
// let sum=0;
// for(let i=1;i<=30;i++){
//     if(number%7===0){
//         sum+=number;
//     }
//    document.write(sum)
//
// }
// Bài 7: Hãy viết một chương trình in ra các số từ 1 đến 100. Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó. Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ "FizzBuzz".
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }
// bai8
// function myButton(){
//    let  a = +prompt('Nhap vào số bạn đoán')
//     let r=Math.floor(Math.random(a)*10);
//    console.log(r);
//
// let b= +prompt('Nhập vào số mà bạn dự đoán ')
//     let count = 0 ;
// while (r!=b){
//     count++;
//     if (count==4){
//         alert('Bạn hết lượt')
//     }
//     else if(r>b){
//         alert('so mà baạn dự đoán lon hơn')
//
//     }
//     else {
//         alert('số bạn đoán nhỏ hơn ')
//         b=+prompt('Nhâ[ vao số dự đoán')
//     }
// }
// if(count==4){
//     alert('bạn đã hết lượt ')
// }
// else {
//     alert('chúc muừng bạn')
// }
//
// }
