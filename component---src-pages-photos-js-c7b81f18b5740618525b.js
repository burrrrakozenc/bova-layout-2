(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"6Q04":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return l})),a.d(t,"pageQuery",(function(){return p}));var n=a("q1tI"),o=a.n(n),c=a("9eSz"),r=a.n(c),s=a("Bl7J"),i=a("vrFN");var l=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={activePopup:!1,selectedItem:0},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this,t=this.props.data,a=this.state,n=a.activePopup,c=a.selectedItem;return o.a.createElement(s.a,null,o.a.createElement(i.a,{title:"Photos",keywords:["Rohit Gupta","Frontend Developer","Developer","Photo"]}),o.a.createElement("div",{className:"site-container blogs-page",id:"Blogs"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"section-head"},o.a.createElement("h1",{className:"line-heading h2"},"Photos")),o.a.createElement("ul",{className:"photos-page-list"},t.contentfulPhotos.photos.map((function(t,a){return o.a.createElement("li",{key:a,className:"item"},o.a.createElement("div",{className:"inner",onClick:function(){e.setState({activePopup:!0,selectedItem:a})}},o.a.createElement(r.a,{fluid:t.fluid,objectFit:"cover",objectPosition:"50% 50%"})))}))),n?o.a.createElement("div",{className:"rg-popup"},o.a.createElement("span",{className:"popup-layer",onClick:function(){e.setState({activePopup:!1})}}),o.a.createElement("div",{className:"popup-inner"},o.a.createElement("i",{className:"fas fa-times",onClick:function(){e.setState({activePopup:!1})}}),o.a.createElement("img",{src:t.contentfulPhotos.photos[c].file.url,alt:"popup-img"}))):"")))},n}(n.Component),p="2830226650"}}]);
//# sourceMappingURL=component---src-pages-photos-js-c7b81f18b5740618525b.js.map