import { getArticle, createArticle, patchArticle, deleteArticle, getArticleList } from './ArticleService.js'
import { getProductList, getProduct, createProduct, patchProduct, deleteProduct } from './ProductService.js'

// ArticleService.js
const articleData = {
  title: "마이크 구매",
  content: "바로 고장",
  image: "image url",
};

// getArticleList({pages: 1, pageSize: 2, keyword: '메론빵'}).then((data) => console.log(data));

getArticle(33).then((data) => console.log(data));

// createArticle(articleData).then((data) => console.log(data));

// patchArticle(10, articleData).then((data) => console.log(data));

// deleteArticle(30).then((data) => console.log(data));


// ProductService.js
const productData = {
  name: '아이폰 11',
  description: '오래됨',
  price: 2222222,
  tags: [
    '전자 기기',
    '휴대폰',
  ],
  images: [
    'image url'
  ],
}

// try{
//   const data = await getProductList({page: 1, pageSize: 1, keyword: '아이폰'});
//   console.log(data);
// } catch (error) {
//   if (error.response) {
//     console.log(error.response.status);
//     console.log(error.response.data);
//   } else {
//     console.log('리퀘스트가 실패했습니다.');
//   }
// }

// try{
//   const data = await getProduct(48);
//   console.log(data);
// } catch (error) {
//   if (error.response) {
        // 리퀘스트는 성공했지만 상태 코드가 실패(4XX, 5XX)를 나타냄
//     console.log(error.response.status);
//     console.log(error.response.data);
//   } else {
        // 리퀘스트 자체가 실패
//     console.log('리퀘스트가 실패했습니다.');
//   }
// }

// try {
//   const data = await createProduct(productData);
//   console.log(data);
// } catch (error) {
//   if (error.response) {
//     console.log(error.response.status);
//     console.log(error.response.data);
//   } else {
//     console.log('리퀘스트가 실패했습니다.');
//   }
// }

// try{
//   const data = await patchProduct(48, productData);
//   console.log(data);
// } catch (error) {
//   if (error.response) {
//     console.log(error.response.status);
//     console.log(error.response.data);
//   } else {
//     console.log('리퀘스트가 실패했습니다.');
//   }
// }

// try {
//   const data = await deleteProduct(53);
//   console.log('데이터 삭제 완료!');
// } catch (error) {
//   if (error.response) {
//     console.log(error.response.status);
//     console.log(error.response.data);
//   } else {
//     console.log('리퀘스트가 실패했습니다.');
//   }
// }