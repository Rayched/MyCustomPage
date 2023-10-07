"use strict";
//북마크 바 버튼 관련 logic
//[북마크 열기] 버튼을 클릭하면 북마크 바가 열리고
//[북마크 닫기] 버튼을 클릭하면 북마크 바가 닫혀야한다.
var _a, _b;
/* 북마크와 관련된 logic을 구현하려면
 * index.html에서 구현한 북마크 관련 요소들인
 * id가 Bookmark_Bar, Bookmark_Open, Bookmark_Close인 요소들을
 * DOM 객체로 가져와야한다.
*/
const BookmarkBar = document.getElementById("Bookmark_Bar");
const BookmarkOpen = document.getElementById("Bookmark_Open");
const BookmarkClose = document.getElementById("Bookmark_Close");
/*
    * [북마크 열기]를 클릭하면, 북마크 바를 열고
      [북마크 닫기]를 클릭하면, 북마크 바를 닫는 동작을 수행하는
      BookmarkBarToggle 함수
*/
const BookmarkBarToggle = () => {
    if (!BookmarkBar)
        return;
    if (!BookmarkOpen)
        return;
    if (!BookmarkClose)
        return;
    //북마크 바를 열어놓은 상태에서 웹 페이지를 나갔다면
    //다음에 접속했을 때, 북마크 바가 열려있는 상태를 유지하고
    //북마크 바를 닫아놓은 상태에서 웹 페이지를 나갔다면
    //다음에 접속했을 때, 북마크 바가 닫혀있는 상태를 유지해야한다..?
    //굳이..?
    //강의에서는 이렇게 구현을 했지만
    //나는 북마크 바를 열어놓은 상태로 종료해도
    //다음에 접속하면 북마크 바가 닫혀있는 상태를 유지하는 형태로
    //구현을 진행하였다.
    //Default 값 == 북마크 닫힘 상태
    const isBookmarkBarOpen = localStorage.getItem("isBookmarkBarOpen");
    if (isBookmarkBarOpen === "open") {
        localStorage.setItem("isBookmarkBarOpen", "close");
        BookmarkBar.style.display = "none";
        BookmarkOpen.style.display = "none";
        BookmarkClose.style.display = "flex";
    }
    else {
        localStorage.setItem("isBookmarkBarOpen", "open");
        BookmarkBar.style.display = "block";
        BookmarkOpen.style.display = "flex";
        BookmarkClose.style.display = "none";
    }
};
(_a = document.getElementById("Bookmark_Open_Btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", BookmarkBarToggle);
(_b = document.getElementById("Bookmark_Close_Btn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", BookmarkBarToggle);
