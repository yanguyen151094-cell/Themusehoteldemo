// ===== MỞ / ĐÓNG MODAL =====
document.querySelectorAll(".btn-book, #bookingBtn").forEach(btn=>{
  btn.addEventListener("click", e=>{
    e.preventDefault();
    document.getElementById("bookingModal").style.display="flex";
  });
});

document.querySelector(".modal .close").addEventListener("click", ()=>{
  document.getElementById("bookingModal").style.display="none";
});

window.addEventListener("click", e=>{
  if(e.target.id==="bookingModal"){
    document.getElementById("bookingModal").style.display="none";
  }
});

// ===== GỬI FORM SANG ZALO =====
document.getElementById("bookingForm").addEventListener("submit", function(e){
  e.preventDefault();

  let fullname=this.fullname.value;
  let phone=this.phone.value;
  let guests=this.guests.value;
  let checkin=this.checkin.value;
  let checkout=this.checkout.value;

  // Tin nhắn gửi qua Zalo
  let message=`ĐẶT PHÒNG\nHọ tên: ${fullname}\nSĐT: ${phone}\nSố người: ${guests}\nNhận phòng: ${checkin}\nTrả phòng: ${checkout}`;

  // link Zalo (thay số điện thoại bằng số Zalo bạn)
  let zaloLink=`https://zalo.me/0888808818?text=${encodeURIComponent(message)}`;

  window.open(zaloLink,"_blank");

  document.getElementById("bookingModal").style.display="none";
  this.reset();
});
document.getElementById("bookingBtn").addEventListener("click", function(e) {
  e.preventDefault(); // Ngăn cuộn về đầu trang
  document.getElementById("bookingModal").style.display = "flex";
});
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Ngăn reload trang

  // Lấy dữ liệu từ form
  const name = this.fullname.value;
  const phone = this.phone.value;
  const guests = this.guests.value;
  const checkin = this.checkin.value;
  const checkout = this.checkout.value;

  // Tạo nội dung tin nhắn
  const message = `Xin chào, tôi muốn đặt phòng:
- Họ tên: ${name}
- SĐT: ${phone}
- Số người: ${guests}
- Ngày nhận: ${checkin}
- Ngày trả: ${checkout}`;

  // Encode để đưa vào link Zalo
  const encodedMessage = encodeURIComponent(message);

  // Link Zalo (thay số của bạn vào)
  const zaloLink = `https://zalo.me/0888808818?text=${encodedMessage}`;

  // Mở Zalo trong tab mới
  window.open(zaloLink, "_blank");
});
// ====== SLIDER TỰ ĐỘNG ======
let slideIndex = 0;
const slides = document.querySelectorAll('.slides .slide');

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === n) slide.classList.add('active');
  });
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) slideIndex = 0;
  showSlide(slideIndex);
}

// chạy slide đầu tiên
showSlide(slideIndex);

// tự động đổi slide mỗi 4 giây
setInterval(nextSlide, 4000);
