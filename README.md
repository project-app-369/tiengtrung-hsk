# Từ vựng HSK 1–6

Sổ từ học trọn bộ 5.002 từ vựng HSK 1–6. Mỗi từ có pinyin, âm Hán Việt, nghĩa tiếng Việt, bộ thủ và cách tách chữ, nét viết động, phát âm, và 3 câu ví dụ. Có thêm các phần Liên từ, Bộ thủ (214), Câu cửa miệng và Lượng từ, cùng chế độ ôn thẻ.

Đây là trang tĩnh, không cần đăng nhập. Tiến độ học được lưu trong trình duyệt của bạn. Có thể cài như ứng dụng (PWA) trên điện thoại và máy tính, dùng được khi mất mạng sau lần mở đầu tiên.

Trang: https://project-app-369.github.io/tiengtrung-hsk/

- `index.html`: ứng dụng
- `words.json`, `chars.json`, `extra.json`, `examples.json`: dữ liệu
- `strokes/`: dữ liệu nét chữ (từ hanzi-writer-data)
- `manifest.webmanifest`, `sw.js`, `icons/`, `og-image.png`: cài đặt PWA, chạy offline, biểu tượng và ảnh chia sẻ

Nguồn dữ liệu chữ: Make Me a Hanzi, hanzi-writer-data, Unihan.

## Font
Font được nhúng sẵn trong `fonts/`, hiển thị giống nhau trên mọi thiết bị:
- Chữ Hán: AR PL UKai (kiểu chữ Khải/KaiTi, Arphic Public License), rút gọn còn các chữ dùng trong sổ; vài bộ kiện hiếm lấy từ LXGW WenKai (OFL).
- Tiếng Việt và pinyin: Be Vietnam Pro (OFL), bổ sung dấu thanh pinyin ǎ ǐ ǒ ǔ ǖ ǘ ǚ ǜ.
