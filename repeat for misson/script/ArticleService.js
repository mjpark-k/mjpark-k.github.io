function errorLog(error) {
  console.log(`에러 발생! : ${error.name}, ${error.message}`);
}
  // params 객체는 함수의 인자로 받은 page, pageSize, keyword 값을 키-값 쌍으로 갖고 있는 객체입니다.
  // 예를 들어, getArticleList(1, 10, 'example')을 호출하면 params는 { page: 1, pageSize: 10, keyword: 'example' }가 됩니다.
export function getArticleList(page, pageSize, keyword) {
  const params = {page, pageSize, keyword};
  const url = new URL('https://sprint-mission-api.vercel.app/articles');
  // 객체의 키들로 구성된 배열을 반환합니다.
  // forEach 메서드를 사용하여 각 키에 대해 반복 작업을 수행합니다.
  // 예를 들어, 첫 번째 반복에서는 key가 'page'가 되고, params[key]는 1이 됩니다.
  // url.searchParams.append(key, params[key])는 URL에 쿼리 파라미터를 추가합니다.
  // url.searchParams.append('page', 1)는 URL에 ?page=1을 추가합니다.
  // 다음 반복에서는 url.searchParams.append('pageSize', 10)이 호출되어 &pageSize=10을 추가합니다.
  // 마지막 반복에서는 url.searchParams.append('keyword', 'example')이 호출되어 &keyword=example을 추가합니다
  Object.keys(params).forEach((key) => 
    url.searchParams.append(key, params[key])
  );
  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error (`데이터를 불러오는데 실패했습니다...`);
      }
      return res.json();
    }).catch(errorLog)
}
// 출력값
// getArticleList(1, 2, '메론빵').then((data) => console.log(data));


// 비교대상
export function getArticleList( params = {}) {
  const url = new URL('https://sprint-mission-api.vercel.app/articles');
  Object.keys(params).forEach((key) => 
    url.searchParams.append(key, params[key])
  );
  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error (`데이터를 불러오는데 실패했습니다...`);
      }
      return res.json();
    }).catch(errorLog)
// 출력값
// getArticleList({pages: 1, pageSize: 2, keyword: '메론빵'}).then((data) => console.log(data));






export function getArticle(id) {
  return fetch(`https://sprint-mission-api.vercel.app/articlesss/${id}`)
    .then((res) => {
      if(!res.ok) {
        throw new Error (`데이터를 불러오는데 실패했습니다...`);
      }
      return res.json();
    }).catch(errorLog)
}

export function createArticle(articleData) {
  return fetch('https://sprint-mission-api.vercel.app/articles', {
    method: "POST",
    body: JSON.stringify(articleData),
    headers: {
      'Content-Type': 'application/json',
    }
  }).then((res) => {
    if (!res.ok) {
      throw new Error ('데이터를 생성하는데 실패했습니다...');
    }
    return res.json();
  }).catch(errorLog)
}

export function patchArticle(id, articleData) {
  return fetch(`https://sprint-mission-api.vercel.app/articles/${id}`, {
    method: "PATCH",
    body: JSON.stringify(articleData),
    headers: {
      'Content-Type': 'application/json',
    }
  }).then((res) => {
    if (!res.ok) {
      throw new Error ("데이터를 수정하는데 실패했습니다...");
    }
    return res.json();
  }).catch(errorLog)
}

export function deleteArticle(id) {
  return fetch(`https://sprint-mission-api.vercel.app/articles/${id}`, {
    method: "DELETE",
  }).then((res) => {
    if(!res.ok) {
      throw new Error("데이터를 삭제하는데 실패했습니다...");
    }
    return res.json();
  }).catch(errorLog)
}