var messages=new function(){function e(){manScrollTimeOut--,s&&0==manScrollTimeOut&&m()}function t(e){if(null!==e&&"object"==typeof e){switch(e.Type){case"swipeleft":e.Next=r?"actions":"visitors",e.UserNo=r;break;case"swiperight":e.Next="chats";break;case"isms":case"iemail":e.Command=e.Type;break;default:return}e.Page="messages"}else{var t=e;if(0==t)return;if(e={Type:"",UserNo:e,Page:"messages",Next:"actions",Command:"SaveId"},t==config.MyId&&(e.Next="profile"),t<0&&delete e.Next,t>=0&&visitors.Classic){if(0!=t)return doModal("FrameDialog"),void classicSetDialog(e.Next,t);e={Command:"MakeId"}}}ToC(e)}function n(){Obj={Command:"EditToggle",Next:"chats"},ToC(Obj)}function a(){Obj={Command:"",Next:"visitors"},ToC(Obj)}function i(e){var t=document.getElementById("id_message_"+e);null!=t&&t.parentNode.removeChild(t)}var s,o,r=0,d=document.getElementById("messagesContainer"),l=document.getElementById("messagesSuperContainer");this.setChatName=function(e,t){var n=document.getElementById("TitleBarTitle");n&&addText(n,e),(r=t)&&setTextNode("TitleBarRight","")},this.main=function(t){function i(e){if(areaHTML!==s.innerHTML&&(areaHTML=s.innerHTML,areaHTML.indexOf("<br>")>-1)){var t={Type:"Send",Message:s.textContent,Command:"Send",Page:"messages"};ToC(t,!0),s.textContent="",areaHTML=""}"blur"===e.type&&onScrollEventHandler()}xatMain(t),addTitleBar(" ",[["","❮ "],["mob1.chats","Chats"]],n,["mob1.visitors","Visitors"],a),AddHammer(document.body);var s=document.getElementById("textEntryEditable");isWEB&&"MS"==Browser?(s.addEventListener("focus",function(e){areaHTML=s.innerHTML},!1),s.addEventListener("blur",i,!1),s.addEventListener("keyup",i,!1),s.addEventListener("paste",i,!1),s.addEventListener("input",i,!1)):(s.addEventListener("input",function(e){var t=e.target.innerHTML,n="<br>";if("FF"==Browser&&(n="<br><br>"),t.indexOf(n)>-1){var a={Type:"Send",Message:s.textContent,Command:"Send",Page:"messages"};ToC(a,!0),e.target.textContent=""}},!1),s.addEventListener("blur",function(e){onScrollEventHandler()},!1)),document.body.style.display="block",l.style.top=document.getElementById("titleBar").clientHeight,l.style.bottom=document.getElementById("footer").clientHeight,o=l.clientWidth,d.addEventListener("scroll",onScrollEventHandler,!1),doZap(10),setInterval(function(){e()},1e3),LoadLang({mob1:0})};this.addMessage=function(e){var n,a,s=JSON.parse(e);if(s.ignored)return void i(s.i);if(a=document.getElementById("id_message_"+s.i))a.innerHTML="";else{var o=document.getElementById("messages");a=makeElement(o,"li","message")}iidLine++,a.setAttribute("data-line",iidLine),LineVisible=0,a.setAttribute("data-visible",LineVisible);var r=s.id;a.onclick=function(){t(r)},a.id="id_message_"+s.i,LoadImage(a,s.image,"avatar",30,s),n=ProcessName(s.name,s.status,s.pFlags);var d=makeElement(a,"p");d.className="messagesName";var l=createSmText((void 0!=s.pawn?s.pawn:"")+n.name);void 0!==n.glow&&(l.style["text-shadow"]=MakeGlow(n.glow)),void 0!==n.col&&(l.style.color="#"+toHex6(n.col)),d.appendChild(l);var m=makeElement(a,"p");m.className="messagesMessage";var c=2+xInt(s.Big);0==r&&(c|=134217728),268435456&xInt(s.pFlags)&&(c|=268435456),m.appendChild(createSmText(s.text.trim(),void 0,void 0,void 0,c))},this.clearMessages=function(){modalClose();for(var e=document.getElementById("messages");e.firstChild;)e.removeChild(e.firstChild)};var m=this.scrollMessages=function(){if(manScrollTimeOut>0)return void(s=!0);s=!1,zapTimeout=setTimeout(doZap,10);var e=l.clientHeight-document.getElementById("messages").clientHeight-12;e<0&&(e=0),d.style.top=e,d.scrollTop=d.scrollHeight}};