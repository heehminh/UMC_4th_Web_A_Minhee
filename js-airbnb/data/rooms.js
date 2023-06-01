const rooms = [
  {
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-34113796/original/372e7d6f-7fb9-4668-92f0-25bb9a346814.jpeg?im_w=720",
    loc: "Abiansemal, 인도",
    star: 4.86,
    plus: "5275km",
    when: "12월 14일~19일",
    price: 518356,
    standard: "박",
  },
  {
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-50876204/original/9df41105-3c80-40c3-829a-d7fae852c15b.jpeg?im_w=720",
    loc: "시모다, 일본",
    star: 4.91,
    plus: "바다 전망",
    when: "4월 3일~8일",
    price: 1130142,
    standard: "박",
  },

  {
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-659600087552092324/original/45fe0ffd-7569-4bad-8ccc-620d0a625c65.jpeg?im_w=720",
    loc: "완산구, 전주시, 한국",
    star: 5.0,
    plus: "196km",
    when: "4월 9일~14일",
    price: 285294,
    standard: "박",
  },
  {
    img: "https://a0.muscache.com/im/pictures/5dc109f3-16c7-4396-85e9-be91f76bdc86.jpg?im_w=720",
    loc: "Poggibonsi, 이탈리아",
    star: 5.0,
    plus: "건축 연도: 998",
    when: "7월 2일~7일",
    price: 1734699,
    standard: "박",
  },
  {
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-34113796/original/372e7d6f-7fb9-4668-92f0-25bb9a346814.jpeg?im_w=720",
    loc: "Abiansemal, 인도",
    star: 4.86,
    plus: "5275km",
    when: "12월 14일~19일",
    price: 518356,
    standard: "박",
  },
  {
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-50876204/original/9df41105-3c80-40c3-829a-d7fae852c15b.jpeg?im_w=720",
    loc: "시모다, 일본",
    star: 4.91,
    plus: "바다 전망",
    when: "4월 3일~8일",
    price: 1130142,
    standard: "박",
  },

  {
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-659600087552092324/original/45fe0ffd-7569-4bad-8ccc-620d0a625c65.jpeg?im_w=720",
    loc: "완산구, 전주시, 한국",
    star: 5.0,
    plus: "196km",
    when: "4월 9일~14일",
    price: 285294,
    standard: "박",
  },
  {
    img: "https://a0.muscache.com/im/pictures/5dc109f3-16c7-4396-85e9-be91f76bdc86.jpg?im_w=720",
    loc: "Poggibonsi, 이탈리아",
    star: 5.0,
    plus: "건축 연도: 998",
    when: "7월 2일~7일",
    price: 1734699,
    standard: "박",
  },
  {
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-34113796/original/372e7d6f-7fb9-4668-92f0-25bb9a346814.jpeg?im_w=720",
    loc: "Abiansemal, 인도",
    star: 4.86,
    plus: "5275km",
    when: "12월 14일~19일",
    price: 518356,
    standard: "박",
  },
  {
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-50876204/original/9df41105-3c80-40c3-829a-d7fae852c15b.jpeg?im_w=720",
    loc: "시모다, 일본",
    star: 4.91,
    plus: "바다 전망",
    when: "4월 3일~8일",
    price: 1130142,
    standard: "박",
  },

  {
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-659600087552092324/original/45fe0ffd-7569-4bad-8ccc-620d0a625c65.jpeg?im_w=720",
    loc: "완산구, 전주시, 한국",
    star: 5.0,
    plus: "196km",
    when: "4월 9일~14일",
    price: 285294,
    standard: "박",
  },
  {
    img: "https://a0.muscache.com/im/pictures/5dc109f3-16c7-4396-85e9-be91f76bdc86.jpg?im_w=720",
    loc: "Poggibonsi, 이탈리아",
    star: 5.0,
    plus: "건축 연도: 998",
    when: "7월 2일~7일",
    price: 1734699,
    standard: "박",
  },
  {
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-34113796/original/372e7d6f-7fb9-4668-92f0-25bb9a346814.jpeg?im_w=720",
    loc: "Abiansemal, 인도",
    star: 4.86,
    plus: "5275km",
    when: "12월 14일~19일",
    price: 518356,
    standard: "박",
  },
  {
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-50876204/original/9df41105-3c80-40c3-829a-d7fae852c15b.jpeg?im_w=720",
    loc: "시모다, 일본",
    star: 4.91,
    plus: "바다 전망",
    when: "4월 3일~8일",
    price: 1130142,
    standard: "박",
  },

  {
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-659600087552092324/original/45fe0ffd-7569-4bad-8ccc-620d0a625c65.jpeg?im_w=720",
    loc: "완산구, 전주시, 한국",
    star: 5.0,
    plus: "196km",
    when: "4월 9일~14일",
    price: 285294,
    standard: "박",
  },
  {
    img: "https://a0.muscache.com/im/pictures/5dc109f3-16c7-4396-85e9-be91f76bdc86.jpg?im_w=720",
    loc: "Poggibonsi, 이탈리아",
    star: 5.0,
    plus: "건축 연도: 998",
    when: "7월 2일~7일",
    price: 1734699,
    standard: "박",
  },
  {
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-34113796/original/372e7d6f-7fb9-4668-92f0-25bb9a346814.jpeg?im_w=720",
    loc: "Abiansemal, 인도",
    star: 4.86,
    plus: "5275km",
    when: "12월 14일~19일",
    price: 518356,
    standard: "박",
  },
  {
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-50876204/original/9df41105-3c80-40c3-829a-d7fae852c15b.jpeg?im_w=720",
    loc: "시모다, 일본",
    star: 4.91,
    plus: "바다 전망",
    when: "4월 3일~8일",
    price: 1130142,
    standard: "박",
  },

  {
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-659600087552092324/original/45fe0ffd-7569-4bad-8ccc-620d0a625c65.jpeg?im_w=720",
    loc: "완산구, 전주시, 한국",
    star: 5.0,
    plus: "196km",
    when: "4월 9일~14일",
    price: 285294,
    standard: "박",
  },
  {
    img: "https://a0.muscache.com/im/pictures/5dc109f3-16c7-4396-85e9-be91f76bdc86.jpg?im_w=720",
    loc: "Poggibonsi, 이탈리아",
    star: 5.0,
    plus: "건축 연도: 998",
    when: "7월 2일~7일",
    price: 1734699,
    standard: "박",
  },
  {
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-34113796/original/372e7d6f-7fb9-4668-92f0-25bb9a346814.jpeg?im_w=720",
    loc: "Abiansemal, 인도",
    star: 4.86,
    plus: "5275km",
    when: "12월 14일~19일",
    price: 518356,
    standard: "박",
  },
  {
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-50876204/original/9df41105-3c80-40c3-829a-d7fae852c15b.jpeg?im_w=720",
    loc: "시모다, 일본",
    star: 4.91,
    plus: "바다 전망",
    when: "4월 3일~8일",
    price: 1130142,
    standard: "박",
  },

  {
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-659600087552092324/original/45fe0ffd-7569-4bad-8ccc-620d0a625c65.jpeg?im_w=720",
    loc: "완산구, 전주시, 한국",
    star: 5.0,
    plus: "196km",
    when: "4월 9일~14일",
    price: 285294,
    standard: "박",
  },
  {
    img: "https://a0.muscache.com/im/pictures/5dc109f3-16c7-4396-85e9-be91f76bdc86.jpg?im_w=720",
    loc: "Poggibonsi, 이탈리아",
    star: 5.0,
    plus: "건축 연도: 998",
    when: "7월 2일~7일",
    price: 1734699,
    standard: "박",
  },
];

export default rooms;