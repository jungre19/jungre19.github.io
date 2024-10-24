export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"CategoryA":{"path":"/category/categorya/","indexes":[2,11,12,5,10,4,3,13,7,9,8,6]},"CategoryB":{"path":"/category/categoryb/","indexes":[2,11,12,5,10,4,3,7,8,6]},"History":{"path":"/category/history/","indexes":[1,0]},"CategoryC":{"path":"/category/categoryc/","indexes":[15,14]}}}},"tag":{"/":{"path":"/tag/","map":{"tag A":{"path":"/tag/tag-a/","indexes":[5,13,7,9,8,6]},"tag B":{"path":"/tag/tag-b/","indexes":[5,13,7,9,8,6]},"WWII":{"path":"/tag/wwii/","indexes":[0]},"tag E":{"path":"/tag/tag-e/","indexes":[15,14]},"tag C":{"path":"/tag/tag-c/","indexes":[2,11,12,10,4,3]},"tag D":{"path":"/tag/tag-d/","indexes":[2,11,12,10,4,3]},"WWI":{"path":"/tag/wwi/","indexes":[1]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

