
// const teamAmountListBox = document.querySelector("#l-billboardList-amount");
// const teamSpeedListBox = document.querySelector("#l-billboardList-speed");
// const personTop3List = document.querySelector("#personTop3");
// const personOtherList = document.querySelector("#personOther");

// let data;
// let teamAll = {};
// let teamSortAmountList = [];
// let teamSortSpeedList = [];
// function init() {
//     axios
//         .get(
//             "https://raw.githubusercontent.com/hexschool/js-traninging-week6API/main/data.json"
//         )
//         .then(function(response) {
//             data = response.data;
//             //   console.log(data);
//             teamClassify();
//             teamSort();
//             //   console.log(teamAll);
//             teamListRender();
//             //   console.log(teamAll.team1);
//             //   console.log(teamAll.team1.time);
//             personListRender();
//         });
// }
// init();

// //分類組別
// function teamClassify() {
//     peopleTimeSort();
//     data.forEach(function(item) {
//         let timeSec = parseInt(item.practiceMinute);
//         let timeMin = parseInt(item.practiceMinute) * 60;
//         if (teamAll[`team${item.jsGroup}`] == undefined) {
//             teamAll[`team${item.jsGroup}`] = {};
//             teamAll[`team${item.jsGroup}`]["member"] = [];
//             teamAll[`team${item.jsGroup}`]["member"].push(item);
//             teamAll[`team${item.jsGroup}`].num = 1;
//             teamAll[`team${item.jsGroup}`].name = item.jsGroup;
//             teamAll[`team${item.jsGroup}`].time = timeMin + timeSec;
//         } else {
//             teamAll[`team${item.jsGroup}`]["member"].push(item);
//             teamAll[`team${item.jsGroup}`].num += 1;
//             teamAll[`team${item.jsGroup}`].time =
//                 teamAll[`team${item.jsGroup}`].time + timeMin + timeSec;
//         }
//     });
//     delete teamAll[`team未分組`];
// }

// //先照時間排序
// function peopleTimeSort() {
//     data.forEach(function(item) {
//         let timeSec = parseInt(item.practiceMinute);
//         let timeMin = parseInt(item.practiceMinute) * 60;
//         item.time = timeMin * 60 + timeSec;
//     });
//     data.sort(function(a, b) {
//         return a.time - b.time;
//     });
// }

// //整理資料
// function teamSort() {
//     let amountList = [];
//     let speedList = [];
//     array = Object.keys(teamAll);
//     array.forEach(function(item) {
//         //順便做組別平均時間整理
//         teamAll[item].time = (teamAll[item].time / teamAll[item].num).toFixed(0);
//         teamAll[item].timeMin = Math.floor(teamAll[item].time / 60);
//         teamAll[item].timeSec = teamAll[item].time - teamAll[item].timeMin * 60;
//         let obj = {};
//         obj.name = item;
//         obj.num = teamAll[item].num;
//         obj.time = teamAll[item].time;
//         amountList.push(obj);
//         speedList.push(obj);
//     });
//     teamSortAmountList = amountList.sort(function(a, b) {
//         return b.num - a.num;
//     });
//     teamSortSpeedList = speedList.sort(function(a, b) {
//         return a.time - b.time;
//     });
//     //   console.log(teamSortSpeedList);
// }

// function teamListRender() {
//     let amountStr = "";
//     let speedStr = "";
//     let newAmountData = teamSortAmountList.slice(0, 3);
//     let newSpeedData = teamSortSpeedList.slice(0, 3);
//     newAmountData.forEach(function(item, index) {
//         amountStr += teamCard(teamAll[item.name], index);
//     });
//     newSpeedData.forEach(function(item, index) {
//         speedStr += teamCard(teamAll[item.name], index);
//     });
//     teamAmountListBox.innerHTML = amountStr;
//     teamSpeedListBox.innerHTML = speedStr;
// }

// function personListRender() {
//     peopleTimeSort();
//     let top3Str = "";
//     let otherStr = "";

//     //整理前三名
//     let arrayTop3 = data.slice(0, 3);
//     let arrayOther = data.slice(3, data.length);
//     //   console.log(arrayTop3)
//     //   console.log(arrayOther)
//     arrayTop3.forEach(function(item, index) {
//         let underTenTag = "";
//         let codeTag = "";
//         let videoTag = "";
//         let message = "";
//         if (item.haveTen == "是") {
//             underTenTag = `
//             <li class="l-badges__item">
//                 <div class="o-badge">Under 10 mins</div>
//             </li>`;
//         }
//         if (item.codepenUrl !== "") {
//             codeTag = `
//             <div class="l-badges__item">
//                 <div class="o-badge o-badge--outline">
//                     <a href ="${item.codepenUrl}">Code</a>
//                 </div>
//             </div>`;
//         }
//         if (item.youtubeUrl !== "") {
//             videoTag = `
//             <div class="l-badges__item">
//                 <div class="o-badge o-badge--outline">
//                     <a href ="${item.codepenUrl}">Video</a>
//                 </div>
//             </div>`;
//         }
//         if (item.message !== undefined) {
//             message = `
//             <div class="c-card__main">
//                 <div class="l-stack">
//                     <div class="l-stack__top">
//                         <p class="o-title o-title--sm o-title--gy">留言</p>
//                     </div>
//                     <div class="l-stack__cnt">
//                         <p class="o-txt">${item.message}</p>
//                     </div>
//                 </div>
//             </div>`;
//         } else if (item.message == undefined) {
//             message = `
//             <div class="c-card__main">
//                 <div class="l-stack">
//                     <div class="l-stack__top">
//                         <p class="o-title o-title--sm o-title--gy">留言</p>
//                     </div>
//                     <div class="l-stack__cnt">
//                         <p class="o-txt">沒留言</p>
//                     </div>
//                 </div>
//             </div>`;
//         }
//         top3Str += top3Card(
//             item,
//             index + 1,
//             underTenTag,
//             codeTag,
//             videoTag,
//             message
//         );
//     });

//     //整理之後的名次
//     arrayOther.forEach(function(item, index) {
//         let underTenTag = "";
//         let codeTag = "";
//         let videoTag = "";
//         let message = "";
//         if (item.haveTen == "是") {
//             underTenTag = `
//             <li class="l-badges__item">
//                 <div class="o-badge">Under 10 mins</div>
//             </li>`;
//         }
//         if (item.codepenUrl !== "") {
//             codeTag = `
//             <div class="l-badges__item">
//                 <div class="o-badge o-badge--outline">
//                     <a href ="${item.codepenUrl}">Code</a>
//                 </div>
//             </div>`;
//         }
//         if (item.youtubeUrl !== "") {
//             videoTag = `
//             <div class="l-badges__item">
//                 <div class="o-badge o-badge--outline">
//                     <a href ="${item.codepenUrl}">Video</a>
//                 </div>
//             </div>`;
//         }
//         if (item.message !== undefined) {
//             message = `
//             <div class="l-stack__top">
//                 <p class="o-title o-title--sm o-title--gy">留言</p>
//             </div>
//             <div class="l-stack__cnt">
//                 <p class="o-txt">${item.message}</p>
//             </div>`;
//         } else if (item.message == undefined) {
//             message = `
//             <div class="l-stack">
//                 <div class="l-stack__top">
//                     <p class="o-title o-title--sm o-title--gy">留言</p>
//                 </div>
//                 <div class="l-stack__cnt">
//                     <p class="o-txt">沒留言</p>
//                 </div>
//             </div>`;
//         }
//         otherStr += personCard(
//             item,
//             index + 1,
//             underTenTag,
//             codeTag,
//             videoTag,
//             message
//         );
//     });
//     personTop3List.innerHTML = top3Str;
//     personOtherList.innerHTML = otherStr;
// }

// // 可以看到最佳組別投稿數排名、總平均秒數排名
// // 可以看到個人排名列表，
// // 我能在每個參賽者中看到每個人的留言、YT 連結、分鐘數
// // 篩選排序方式：可依投遞時間、秒數(由高到低)

// //顯示組別卡片樣式
// function teamCard(team, number) {
//     // console.log(team);
//     // console.log(team.member.length);
//     // console.log(team.timeSec)
//     let memberFri = team.member[0];
//     let memberSec = team.member[1];
//     let memberTri = team.member[2];
//     let text = `
//     <li class="l-billboardList__item">
//         <div class="c-card c-card--medal c-card--${number + 1}">
//             <div class="c-card__tit">
//                 <p class="o-title">第${team.name}組</p>
//                 <div class="l-stackWrap">
//                     <div class="l-stackWrap__item">
//                         <div class="l-stack">
//                             <div class="l-stack__top">
//                                 <p class="o-title o-title--sm o-title--normal o-title--gy">繳交人數</p>
//                             </div>
//                             <div class="l-stack__cnt">
//                                 <p class="o-txt">${team.member.length}人</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="l-stackWrap__item">
//                         <div class="l-stack">
//                             <div class="l-stack__top">
//                                 <p class="o-title o-title--sm o-title--normal o-title--gy">平均時間</p>
//                             </div>
//                             <div class="l-stack__cnt">
//                                 <p class="o-txt">${team.timeMin}分 ${team.timeSec}秒</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="c-card__main">
//                 <div class="l-stack">
//                     <div class="l-stack__top">
//                         <p class="o-title o-title--sm o-title--normal o-title--gy">組內排名</p>
//                     </div>
//                     <div class="l-stack__cnt">
//                         <ul class="l-memberList">
//                             <li class="l-memberList__item">
//                                 <div class="c-memberClip">
//                                     <div class="c-memberClip__title">${memberFri.slackName}</div>
//                                     <div class="c-memberClip__timer">${memberFri.practiceMinute}分${memberFri.practiceSecond}秒</div>
//                                 </div>
//                             </li>
//                             <li class="l-memberList__item">
//                                 <div class="c-memberClip">
//                                     <div class="c-memberClip__title">${memberSec.slackName}</div>
//                                     <div class="c-memberClip__timer">${memberSec.practiceMinute}分${memberSec.practiceSecond}秒</div>
//                                 </div>
//                             </li>
//                             <li class="l-memberList__item">
//                                 <div class="c-memberClip">
//                                     <div class="c-memberClip__title">${memberTri.slackName}</div>
//                                     <div class="c-memberClip__timer">${memberTri.practiceMinute}分${memberTri.practiceSecond}秒</div>
//                                 </div>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             <div class="c-card__bottom c-card__bottom--r">
//                 <div class="o-txt o-txt--sm o-txt--gy">${memberTri.timestamp}</div>
//             </div>
//         </div>
//     </li>`;
//     return text;
// }

// //顯示個別排名卡片樣式
// function top3Card(person, number, underTenTag, codeTag, videoTag, message) {
//     return `
//     <li class="l-card__item">
//         <div class="c-card">
//             <div class="c-card__tags">
//                 <ul class="l-badges">
//                     <li class="l-badges__item">
//                         <div class="o-badge o-badge--og">No.${number}</div>
//                     </li>
//                     <li class="l-badges__item">
//                         <div class="o-badge o-badge--gn">TEAM ${person.jsGroup}</div>
//                     </li>
//                     ${underTenTag}
//                 </ul>
//             </div>
//             <div class="c-card__tit">
//                 <div class="l-stack">
//                     <div class="l-stack__top">
//                         <p class="o-title">${person.slackName}</p>
//                     </div>
//                     <div class="l-stack__cnt">
//                         <p class="o-txt">${person.practiceMinute}分 ${person.practiceSecond} 秒</p>
//                     </div>
//                 </div>
//             </div>
//             ${message}
//             <div class="c-card__bottom c-card__bottom--apart">
//                 <div class="l-badges">${codeTag}${videoTag}</div>
//                 <div class="o-txt o-txt--sm o-txt--gy">${person.timestamp}</div>
//             </div>
//         </div>
//     </li>`;
// }

// function personCard(person, number, underTenTag, codeTag, videoTag, message) {
//     return `
//     <li id="person-${person.slackName}" class="l-card__item">
//         <div class="c-card">
//             <div class="c-card__info">
//                 <div class="l-stack l-stack--apart">
//                     <div class="l-stack__top">
//                         <div class="o-badge">No.${number + 3}</div>
//                         <p class="o-title o-title--long u-paraL-sm">${person.slackName}</p>
//                         <p class="o-txt">${person.practiceMinute}分 ${person.practiceSecond} 秒</p>
//                     </div>
//                     <div class="l-stack__cnt">
//                         <ul class="l-badges">${codeTag}${videoTag}
//                             <li class="l-badges__item">
//                                 <div class="o-badge o-badge--gn">TEAM ${person.jsGroup}</div>
//                             </li>
//                             <li class="l-badges__item">
//                                 <a  href="#">
//                                     <i data-name="${person.slackName}" class=" openBtn o-icon o-icon--lg o-icon--more"></i>
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             <div class="c-card__panel" data-panel>
//                 <div class="c-card__main c-card__main--noUnderline">
//                     <div class="l-stack">${message}</div>
//                 </div>
//                 <div class="c-card__bottom c-card__bottom--r">
//                     <div class="o-txt o-txt--sm o-txt--gy">${person.timestamp}</div>
//                 </div>
//             </div>
//         </div>
//     </li>`;
// }

// 第四名之後的卡片
// 點擊箭頭後 slider down 詳細資訊
// personOtherList.addEventListener("click", (e) => {
//     e.preventDefault();
//     let dataName = e.target.dataset.name;
//     let elementClasses = document.querySelector(`#person-${dataName} .c-card__panel`).classList;
//     if (e.target.className.indexOf("openBtn") >= 0) {
//         elementClasses.toggle("is-active");
//         e.target.classList.toggle('is-active');
//     } else {
//         return;
//     }

// });

// console.log(document.querySelectorAll("[data-target]"))

document.querySelectorAll("[data-target]").addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target)
    let dataName = e.target.dataset.name;
    let elementClasses = document.querySelector(`#person-${dataName} .c-card__panel`).classList;
    if (e.target.className.indexOf("openBtn") >= 0) {
        elementClasses.toggle("is-active");
        e.target.classList.toggle('is-active');
    } else {
        return;
    }

});