require(["gitbook","jquery"],function(o,n){var e,a,t=4,i=0,s=[{config:"white",text:"White",id:0},{config:"sepia",text:"Sepia",id:1},{config:"night",text:"Night",id:2}],f=[{config:"serif",text:"Serif",id:0},{config:"sans",text:"Sans",id:1}];function r(){o.storage.set("fontState",a),h()}function c(e){e.preventDefault(),a.size>=t||(a.size++,r())}function l(e){e.preventDefault(),a.size<=i||(a.size--,r())}function u(e,t){t&&t instanceof Event&&t.preventDefault();var n=g(e);a.family=n,r()}function m(e,t){t&&t instanceof Event&&t.preventDefault();var n=o.state.$book;0!==a.theme&&n.removeClass("color-theme-"+a.theme);var i=d(e);a.theme=i,0!==a.theme&&n.addClass("color-theme-"+a.theme),r()}function g(t){var e=n.grep(f,function(e){return e.config==t})[0];return e?e.id:0}function d(t){var e=n.grep(s,function(e){return e.config==t})[0];return e?e.id:0}function h(){var e=o.state.$book;n(".font-settings .font-family-list li").removeClass("active"),n(".font-settings .font-family-list li:nth-child("+(a.family+1)+")").addClass("active"),e[0].className=e[0].className.replace(/\bfont-\S+/g,""),e.addClass("font-size-"+a.size),e.addClass("font-family-"+a.family),0!==a.theme&&(e[0].className=e[0].className.replace(/\bcolor-theme-\S+/g,""),e.addClass("color-theme-"+a.theme))}function v(){e&&o.toolbar.removeButton(e),e=o.toolbar.createButton({icon:"fa fa-font",label:"Font Settings",className:"font-settings",dropdown:[[{text:"A",className:"font-reduce",onClick:l},{text:"A",className:"font-enlarge",onClick:c}],n.map(f,function(t){return t.onClick=function(e){return u(t.config,e)},t}),n.map(s,function(t){return t.onClick=function(e){return m(t.config,e)},t})]})}o.events.bind("start",function(e,t){var n=t.fontsettings;v(),function(e){var t=g(e.family),n=d(e.theme);a=o.storage.get("fontState",{size:e.size||2,family:t,theme:n}),h()}(n)}),o.fontsettings={enlargeFontSize:c,reduceFontSize:l,setTheme:m,setFamily:u,getThemes:function(){return s},setThemes:function(e){s=e,v()},getFamilies:function(){return f},setFamilies:function(e){f=e,v()}}});