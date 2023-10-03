# My React Router App
Dự án này sử dụng React Router DOM phiên bản 6.16 và Bootstrap 5 để tạo hiểu về cấu trúc router cơ bản.
## Hướng Dẫn Sử Dụng

1. **Cài Đặt Dependencies**: 
Trước hết, cài đặt các dependencies cần thiết bằng npm hoặc yarn:
   ```bash
   npx create-react-app demo
   cd demo
   npm install react-router-dom
Khởi Tạo Các Component:
- `Login.js`: Component cho trang đăng nhập.
- `Layout.js`: Component cho trang gốc của ứng dụng, xử lý xác thực.
- `Home.js`: Component cho trang chủ.
- `Category.js`: Component cho trang danh mục.
2. **Cấu Hình Routes**: Trong thư mục config, cấu hình đường dẫn tại file `routes.js` để quản lý các định tuyến

3. **Cấu Hình BrowserRouter**:Tại file `index.js`, cần cấu hình `BrowserRouter` để bọc App.
```javascript
    import { BrowserRouter } from 'react-router-dom';
    
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      document.getElementById('root')
    );
```

4. **Sử Dụng Layout.js Trong App**:
4.1 Trong tệp `App.js`, gọi `Layout.js` để bắt đầu ứng dụng và xử lý xác thực.
4.2 Xử Lý trong Layout.js

## Tài Liệu Tham Khảo

- [React Router DOM Documentation](https://reactrouter.com/)
- [Bootstrap Documentation](https://getbootstrap.com/)

