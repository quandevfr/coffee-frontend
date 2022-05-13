import productImg from 'src/assets/images/coffee-png.png';
import productImgOne from 'src/assets/images/products01.png';
import productImgTwo from 'src/assets/images/products02.png';
import productImgThree from 'src/assets/images/products03.png';
import productImgFour from 'src/assets/images/products04.png';
import productImgFive from 'src/assets/images/products05.png';
import productImgSix from 'src/assets/images/products06.png';
import productImgSeven from 'src/assets/images/products07.png';
import productImgEight from 'src/assets/images/products08.png';
import blogImageOne from 'src/assets/images/blog01.png';
import blogImageTwo from 'src/assets/images/blog02.png';
import blogImageThree from 'src/assets/images/blog03.png';

const formatNumber = (number) => {
  console.log(number.toFixed(3));
  return number.toFixed(3);
};

export const slides = [
  {
    img: 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
    alt: 'banner-1',
  },
  {
    img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    alt: 'banner-2',
  },
  {
    img: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
    alt: 'banner-3',
  },
  {
    img: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1784&q=80',
    alt: 'banner-4',
  },
  {
    img: 'https://images.unsplash.com/photo-1499961524705-bfd103e65a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    alt: 'banner-4',
  },
];

export const productsHot = [
  {
    image: productImg,
    name: 'Cà phê đen đá',
    desc: 'Sự kết hợp ăn ý giữa Đào cùng trà 100% hoa Hibiscus tự nhiên, tạo nên tổng thể hài hoà dễ gây “thương nhớ” cho team thích món thanh mát, có vị chua nhẹ.',
  },
  {
    image: productImg,
    name: 'Cà phê cốt dừa',
    desc: 'Sự kết hợp ăn ý giữa Đào cùng trà 100% hoa Hibiscus tự nhiên, tạo nên tổng thể hài hoà dễ gây “thương nhớ” cho team thích món thanh mát, có vị chua nhẹ.',
  },
  {
    image: productImg,
    name: 'Cà phê sữa đá',
    desc: 'Sự kết hợp ăn ý giữa Đào cùng trà 100% hoa Hibiscus tự nhiên, tạo nên tổng thể hài hoà dễ gây “thương nhớ” cho team thích món thanh mát, có vị chua nhẹ.',
  },
];

export const productsList = [
  {
    image: productImgOne,
    name: 'Cà phê morning',
    desc: 'Sự kết hợp ăn ý giữa Đào cùng trà 100% hoa Hibiscus tự nhiên, tạo nên tổng thể hài hoà dễ gây “thương nhớ” cho team thích món thanh mát, có vị chua nhẹ.',
    price: formatNumber(18.9),
  },
  {
    image: productImgTwo,
    name: 'Cà phê nâu đá',
    desc: 'Sự kết hợp ăn ý giữa Đào cùng trà 100% hoa Hibiscus tự nhiên, tạo nên tổng thể hài hoà dễ gây “thương nhớ” cho team thích món thanh mát, có vị chua nhẹ.',
    price: formatNumber(21.99),
  },
  {
    image: productImgThree,
    name: 'Cà phê cốt dừa',
    desc: 'Sự kết hợp ăn ý giữa Đào cùng trà 100% hoa Hibiscus tự nhiên, tạo nên tổng thể hài hoà dễ gây “thương nhớ” cho team thích món thanh mát, có vị chua nhẹ.',
    price: formatNumber(19.0),
  },
  {
    image: productImgFour,
    name: 'Cà phê sữa đá',
    desc: 'Sự kết hợp ăn ý giữa Đào cùng trà 100% hoa Hibiscus tự nhiên, tạo nên tổng thể hài hoà dễ gây “thương nhớ” cho team thích món thanh mát, có vị chua nhẹ.',
    price: formatNumber(18.39),
  },
  {
    image: productImgFive,
    name: 'Bạc sỉu',
    desc: 'Sự kết hợp ăn ý giữa Đào cùng trà 100% hoa Hibiscus tự nhiên, tạo nên tổng thể hài hoà dễ gây “thương nhớ” cho team thích món thanh mát, có vị chua nhẹ.',
    price: formatNumber(18.99),
  },
  {
    image: productImgSix,
    name: 'Bạc sỉu nóng',
    desc: 'Sự kết hợp ăn ý giữa Đào cùng trà 100% hoa Hibiscus tự nhiên, tạo nên tổng thể hài hoà dễ gây “thương nhớ” cho team thích món thanh mát, có vị chua nhẹ.',
    price: formatNumber(19.99),
  },
  {
    image: productImgSeven,
    name: 'Cà phê sữa nóng',
    desc: 'Sự kết hợp ăn ý giữa Đào cùng trà 100% hoa Hibiscus tự nhiên, tạo nên tổng thể hài hoà dễ gây “thương nhớ” cho team thích món thanh mát, có vị chua nhẹ.',
    price: formatNumber(22.99),
  },
  {
    image: productImgEight,
    name: 'Cà phê đen nóng',
    desc: 'Sự kết hợp ăn ý giữa Đào cùng trà 100% hoa Hibiscus tự nhiên, tạo nên tổng thể hài hoà dễ gây “thương nhớ” cho team thích món thanh mát, có vị chua nhẹ.',
    price: formatNumber(17.99),
  },
];

export const blogs = [
  {
    image: blogImageOne,
    time: '11/03/2022',
    name: 'CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ ROBUSTA NGUYÊN CHẤT DỄ DÀNG NHẤT',
    desc: 'Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không...',
  },
  {
    image: blogImageTwo,
    time: '07/03/2022',
    name: 'BẬT MÍ NHIỆT ĐỘ LÝ TƯỞNG ĐỂ PHA CÀ PHÊ NGON, ĐẬM ĐÀ HƯƠNG VỊ',
    desc: 'Nhiệt độ nước là một yếu tố quan trọng để có thể tạo nên những tách cà phê thơm ngon. Bạn đã biết nhiệt độ nước lý tưởng để pha một tách cà phê...',
  },
  {
    image: blogImageThree,
    time: '10/05/2022',
    name: 'CÁCH PHA CÀ PHÊ PHIN THƠM NGON TRÒN VỊ',
    desc: 'Có nhiều cách để pha một ly cà phê ngon, nhưng đối với nhiều người Việt giây phút đợi chờ những giọt cà phê rơi từ chiếc phin đã trở thành...',
  },
  {
    image: blogImageThree,
    time: '10/05/2022',
    name: 'CÁCH PHA CÀ PHÊ PHIN THƠM NGON TRÒN VỊ',
    desc: 'Có nhiều cách để pha một ly cà phê ngon, nhưng đối với nhiều người Việt giây phút đợi chờ những giọt cà phê rơi từ chiếc phin đã trở thành...',
  },
  {
    image: blogImageThree,
    time: '10/05/2022',
    name: 'CÁCH PHA CÀ PHÊ PHIN THƠM NGON TRÒN VỊ',
    desc: 'Có nhiều cách để pha một ly cà phê ngon, nhưng đối với nhiều người Việt giây phút đợi chờ những giọt cà phê rơi từ chiếc phin đã trở thành...',
  },
  {
    image: blogImageThree,
    time: '10/05/2022',
    name: 'CÁCH PHA CÀ PHÊ PHIN THƠM NGON TRÒN VỊ',
    desc: 'Có nhiều cách để pha một ly cà phê ngon, nhưng đối với nhiều người Việt giây phút đợi chờ những giọt cà phê rơi từ chiếc phin đã trở thành...',
  },
];
