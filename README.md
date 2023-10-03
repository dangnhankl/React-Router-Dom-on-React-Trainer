# My React Router App

Dự án này sử dụng React Router DOM phiên bản 6.16 và Bootstrap 5 để tạo ứng dụng web đơn giản với các trang khác nhau.

## Hướng Dẫn Sử Dụng

1. **Cài Đặt Dependencies**: Trước hết, cài đặt các dependencies cần thiết bằng npm hoặc yarn:

   ```bash
   npm install react-router-dom bootstrap
Khởi Tạo Các Component:

- `Login.js`: Component cho trang đăng nhập.
- `Layout.js`: Component cho trang gốc của ứng dụng, xử lý xác thực.
- `Home.js`: Component cho trang chủ.
- `Category.js`: Component cho trang danh mục.

Cấu Hình Routes:

Trong thư mục config, bạn có tệp `routes.js` để quản lý các định tuyến. Hãy đảm bảo định nghĩa các tuyến dẫn cần thiết tại đây.

Cấu Hình BrowserRouter:

Trong tệp `index.js`, bạn cần cấu hình `BrowserRouter` để bao bọc ứng dụng của bạn với các tuyến dẫn.
```javascript
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

Sử Dụng Layout.js Trong App:

Trong tệp `App.js`, gọi `Layout.js` để bắt đầu ứng dụng và xử lý xác thực.

Xử Lý Xác Thực Trong Layout.js:

Trong tệp `Layout.js`, bạn có thể xử lý xác thực và điều hướng người dùng đến các trang khác dựa trên trạng thái xác thực.

## Yêu Cầu Bài Tập

Dự án này có thể mở rộng bằng cách thêm các tính năng và trang mới, cải thiện giao diện, hoặc triển khai xác thực.

## Tài Liệu Tham Khảo

- [React Router DOM Documentation](https://reactrouter.com/)
- [Bootstrap Documentation](https://getbootstrap.com/)

