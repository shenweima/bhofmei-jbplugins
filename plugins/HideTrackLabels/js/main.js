//>>built
require({cache:{"JBrowse/Plugin":function(){define(["dojo/_base/declare","JBrowse/Component"],function(d,k){return d(k,{constructor:function(e){this.name=e.name;this.cssLoaded=e.cssLoaded;this._finalizeConfig(e.config)},_defaultConfig:function(){return{baseUrl:"/plugins/"+this.name}}})})}}});
define("HideTrackLabels/main","dojo/_base/declare dojo/_base/lang dojo/Deferred dojo/dom-construct dijit/form/Button dojo/fx dojo/dom dojo/dom-style dojo/on dojo/query dojo/dom-geometry JBrowse/Plugin".split(" "),function(d,k,e,p,l,m,a,q,r,g,h,n){return d(n,{constructor:function(e){this._defaultConfig();var f=this,d=dojo.queryToObject(window.location.search.slice(1));this.browser.afterMilestone("initView",function(){var b=dojo.byId("navbox");f.browser.hideTitlesButton=new l({title:"Hide/Show Track Titles",
id:"hidetitles-btn",width:"24px",onClick:dojo.hitch(f,function(a){f.browser.showTrackLabels("toggle");dojo.stopEvent(a)})},dojo.create("button",{},b));if(0==d.tracklabels||0==f.browser.config.show_tracklabels)g(".track-label").style("visibility","hidden"),dojo.attr(a.byId("hidetitles-btn"),"hidden-titles","")});this.browser.showTrackLabels=function(b){if(null!=dojo.byId("hidetitles-btn")){var c=1;"show"==b&&(dojo.removeAttr(a.byId("hidetitles-btn"),"hidden-titles"),c=1);"hide"==b&&(dojo.attr(a.byId("hidetitles-btn"),
"hidden-titles",""),c=-1);if("hide-if"==b)if(dojo.hasAttr(a.byId("hidetitles-btn"),"hidden-titles"))c=-1;else return;"toggle"==b&&(dojo.hasAttr(a.byId("hidetitles-btn"),"hidden-titles")?(dojo.removeAttr(a.byId("hidetitles-btn"),"hidden-titles"),c=1):(dojo.attr(a.byId("hidetitles-btn"),"hidden-titles",""),c=-1));dojo.attr(a.byId("hidetitles-btn"),"disabled","");setTimeout(function(){dojo.removeAttr(a.byId("hidetitles-btn"),"disabled")},200);-1==c?setTimeout(function(){g(".track-label").style("visibility",
"hidden")},200):g(".track-label").style("visibility","visible");g(".track-label").forEach(function(a,b,d){b=h.getMarginBox(a).w;m.slideTo({node:a,duration:200,top:h.getMarginBox(a).t.toString(),left:(h.getMarginBox(a).l+b*c).toString(),unit:"px"}).play()})}};dojo.subscribe("/jbrowse/v1/n/tracks/redraw",function(a){f.browser.showTrackLabels("hide-if")})}})});
//# sourceMappingURL=main.js.map
