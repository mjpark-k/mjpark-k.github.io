import { getArticle, createArticle, patchArticle, deleteArticle, getArticleList } from './ArticleService.js'

// const data = await getArticle();
// console.log(data);
// console.log(await createArticle("사세요", "아니다. 사지마세요", "https://picsum.photos/200"));


const articleData = {
  title: "마이크 구매",
  content: "바로 고장",
  image: "https://picsum.photos/200",
};
console.log(Object.keys(articleData));
// 
// getArticleList(1, 2, '메론빵').then((data) => console.log(data));

// getArticle(30).then((data) => console.log(data));

// createArticle(articleData).then((data) => console.log(data));

// patchArticle(10, articleData).then((data) => console.log(data));

// deleteArticle(30).then((data) => console.log(data));

