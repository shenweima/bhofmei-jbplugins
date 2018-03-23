//>>built
require({cache:{"JBrowse/Model/DataView":function(){define(["jDataView"],function(r){var l=function(){r.apply(this,arguments)};try{l.prototype=new r(new ArrayBuffer([1]),0,1)}catch(a){console.error(a)}l.prototype.getUint64Approx=function(a,h){var d=this._getBytes(8,a,h),g=d[0]*Math.pow(2,56)+d[1]*Math.pow(2,48)+d[2]*Math.pow(2,40)+d[3]*Math.pow(2,32)+d[4]*Math.pow(2,24)+(d[5]<<16)+(d[6]<<8)+d[7];if(d[0]||d[1]&224)g=Number(g),g.overflow=!0;return g};l.prototype.getUint64=function(a,h){var d=this.getUint64Approx(a,
h);if(d.overflow)throw Error("integer overflow");return d};return l})},"jDataView/jdataview":function(){define([],function(){var r={};(function(l){var a={ArrayBuffer:"undefined"!==typeof ArrayBuffer,DataView:"undefined"!==typeof DataView&&("getFloat64"in DataView.prototype||"getFloat64"in new DataView(new ArrayBuffer(1))),NodeBuffer:"undefined"!==typeof Buffer&&"readInt16LE"in Buffer.prototype},c={Int8:1,Int16:2,Int32:4,Uint8:1,Uint16:2,Uint32:4,Float32:4,Float64:8},h={Int8:"Int8",Int16:"Int16",Int32:"Int32",
Uint8:"UInt8",Uint16:"UInt16",Uint32:"UInt32",Float32:"Float",Float64:"Double"},d=function(g,n,b,u){if(!(this instanceof d))throw Error("jDataView constructor may not be called as a function");this.buffer=g;if(!(a.NodeBuffer&&g instanceof Buffer)&&!(a.ArrayBuffer&&g instanceof ArrayBuffer)&&"string"!==typeof g)throw new TypeError("jDataView buffer has an incompatible type");this._isArrayBuffer=a.ArrayBuffer&&g instanceof ArrayBuffer;this._isDataView=a.DataView&&this._isArrayBuffer;this._isNodeBuffer=
a.NodeBuffer&&g instanceof Buffer;this._littleEndian=Boolean(u);var q=this._isArrayBuffer?g.byteLength:g.length;void 0===n&&(n=0);this.byteOffset=n;void 0===b&&(b=q-n);this.byteLength=b;if(!this._isDataView){if("number"!==typeof n)throw new TypeError("jDataView byteOffset is not a number");if("number"!==typeof b)throw new TypeError("jDataView byteLength is not a number");if(0>n)throw Error("jDataView byteOffset is negative");if(0>b)throw Error("jDataView byteLength is negative");}this._isDataView&&
(this._view=new DataView(g,n,b),this._start=0);this._start=n;if(n+b>q)throw Error("jDataView (byteOffset + byteLength) value is out of bounds");this._offset=0;if(this._isDataView)for(var m in c)c.hasOwnProperty(m)&&function(m,e){var k=c[m];e["get"+m]=function(f,b){void 0===b&&(b=e._littleEndian);void 0===f&&(f=e._offset);e._offset=f+k;return e._view["get"+m](f,b)}}(m,this);else if(this._isNodeBuffer&&a.NodeBuffer)for(m in c)c.hasOwnProperty(m)&&function(m,e,k){var f=c[m];e["get"+m]=function(m,b){void 0===
m&&(m=e._offset);e._offset=m+f;return e.buffer[k](e._start+m)}}(m,this,"Int8"===m||"Uint8"===m?"read"+h[m]:u?"read"+h[m]+"LE":"read"+h[m]+"BE");else for(m in c)c.hasOwnProperty(m)&&function(m,e){var k=c[m];e["get"+m]=function(f,b){void 0===b&&(b=e._littleEndian);void 0===f&&(f=e._offset);e._offset=f+k;if(e._isArrayBuffer&&0===(e._start+f)%k&&(1===k||b))return(new l[m+"Array"](e.buffer,e._start+f,1))[0];if("number"!==typeof f)throw new TypeError("jDataView byteOffset is not a number");if(f+k>e.byteLength)throw Error("jDataView (byteOffset + size) value is out of bounds");
return e["_get"+m](e._start+f,b)}}(m,this)};d.createBuffer=a.NodeBuffer?function(){return new Buffer(arguments)}:a.ArrayBuffer?function(){return(new Uint8Array(arguments)).buffer}:function(){return String.fromCharCode.apply(null,arguments)};d.prototype={compatibility:a,_getBytes:function(g,n,b){var a;void 0===b&&(b=this._littleEndian);void 0===n&&(n=this._offset);if("number"!==typeof n)throw new TypeError("jDataView byteOffset is not a number");if(0>g||n+g>this.byteLength)throw Error("jDataView length or (byteOffset+length) value is out of bounds");
n+=this._start;this._isArrayBuffer?a=new Uint8Array(this.buffer,n,g):(a=this.buffer.slice(n,n+g),this._isNodeBuffer||(a=Array.prototype.map.call(a,function(b){return b.charCodeAt(0)&255})));b&&1<g&&(a instanceof Array||(a=Array.prototype.slice.call(a)),a.reverse());this._offset=n-this._start+g;return a},getBytes:function(g,a,b){var d=this._getBytes.apply(this,arguments);d instanceof Array||(d=Array.prototype.slice.call(d));return d},getString:function(g,a){var b;if(this._isNodeBuffer){void 0===a&&
(a=this._offset);if("number"!==typeof a)throw new TypeError("jDataView byteOffset is not a number");if(0>g||a+g>this.byteLength)throw Error("jDataView length or (byteOffset+length) value is out of bounds");b=this.buffer.toString("ascii",this._start+a,this._start+a+g);this._offset=a+g}else b=String.fromCharCode.apply(null,this._getBytes(g,a,!1));return b},getChar:function(g){return this.getString(1,g)},tell:function(){return this._offset},seek:function(g){if("number"!==typeof g)throw new TypeError("jDataView byteOffset is not a number");
if(0>g||g>this.byteLength)throw Error("jDataView byteOffset value is out of bounds");return this._offset=g},_getFloat64:function(g,a){var b=this._getBytes(8,g,a),d=1-2*(b[0]>>7),c=((b[0]<<1&255)<<3|b[1]>>4)-(Math.pow(2,10)-1),b=(b[1]&15)*Math.pow(2,48)+b[2]*Math.pow(2,40)+b[3]*Math.pow(2,32)+b[4]*Math.pow(2,24)+b[5]*Math.pow(2,16)+b[6]*Math.pow(2,8)+b[7];return 1024===c?0!==b?NaN:Infinity*d:-1023===c?d*b*Math.pow(2,-1074):d*(1+b*Math.pow(2,-52))*Math.pow(2,c)},_getFloat32:function(g,a){var b=this._getBytes(4,
g,a),d=1-2*(b[0]>>7),c=(b[0]<<1&255|b[1]>>7)-127,b=(b[1]&127)<<16|b[2]<<8|b[3];return 128===c?0!==b?NaN:Infinity*d:-127===c?d*b*Math.pow(2,-149):d*(1+b*Math.pow(2,-23))*Math.pow(2,c)},_getInt32:function(a,d){var b=this._getUint32(a,d);return b>Math.pow(2,31)-1?b-Math.pow(2,32):b},_getUint32:function(a,d){var b=this._getBytes(4,a,d);return b[0]*Math.pow(2,24)+(b[1]<<16)+(b[2]<<8)+b[3]},_getInt16:function(a,d){var b=this._getUint16(a,d);return b>Math.pow(2,15)-1?b-Math.pow(2,16):b},_getUint16:function(a,
d){var b=this._getBytes(2,a,d);return(b[0]<<8)+b[1]},_getInt8:function(a){a=this._getUint8(a);return a>Math.pow(2,7)-1?a-Math.pow(2,8):a},_getUint8:function(a){return this._getBytes(1,a)[0]}};"undefined"!==typeof jQuery&&"1.6.2"<=jQuery.fn.jquery&&(jQuery.ajaxSetup({converters:{"* dataview":function(a){return new d(a)}},accepts:{dataview:"text/plain; charset\x3dx-user-defined"},responseHandler:{dataview:function(a,d,b){if("mozResponseArrayBuffer"in b)a.text=b.mozResponseArrayBuffer;else if("responseType"in
b&&"arraybuffer"===b.responseType&&b.response)a.text=b.response;else if("responseBody"in b){d=b.responseBody;var c;try{c=IEBinaryToArray_ByteStr(d)}catch(h){window.execScript("Function IEBinaryToArray_ByteStr(Binary)\r\n\tIEBinaryToArray_ByteStr \x3d CStr(Binary)\r\nEnd Function\r\nFunction IEBinaryToArray_ByteStr_Last(Binary)\r\n\tDim lastIndex\r\n\tlastIndex \x3d LenB(Binary)\r\n\tif lastIndex mod 2 Then\r\n\t\tIEBinaryToArray_ByteStr_Last \x3d AscB( MidB( Binary, lastIndex, 1 ) )\r\n\tElse\r\n\t\tIEBinaryToArray_ByteStr_Last \x3d -1\r\n\tEnd If\r\nEnd Function\r\n",
"vbscript"),c=IEBinaryToArray_ByteStr(d)}d=IEBinaryToArray_ByteStr_Last(d);b="";for(var m=0,t=c.length%8,e;m<t;)e=c.charCodeAt(m++),b+=String.fromCharCode(e&255,e>>8);for(t=c.length;m<t;)b+=String.fromCharCode((e=c.charCodeAt(m++),e&255),e>>8,(e=c.charCodeAt(m++),e&255),e>>8,(e=c.charCodeAt(m++),e&255),e>>8,(e=c.charCodeAt(m++),e&255),e>>8,(e=c.charCodeAt(m++),e&255),e>>8,(e=c.charCodeAt(m++),e&255),e>>8,(e=c.charCodeAt(m++),e&255),e>>8,(e=c.charCodeAt(m++),e&255),e>>8);-1<d&&(b+=String.fromCharCode(d));
a.text=b}else a.text=b.responseText}}}),jQuery.ajaxPrefilter("dataview",function(a,d,b){jQuery.support.ajaxResponseType&&(a.hasOwnProperty("xhrFields")||(a.xhrFields={}),a.xhrFields.responseType="arraybuffer");a.mimeType="text/plain; charset\x3dx-user-defined"}));l.jDataView=(l.module||{}).exports=d;"undefined"!==typeof module&&(module.exports=d)})(r);return r.jDataView})},"JBrowse/Store/SeqFeature/BigWig/Window":function(){define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","./RequestWorker"],
function(r,l,a,c){return r(null,{constructor:function(a,d,c,n){this.bwg=a;if(!(0<=d))throw"invalid cirTreeOffset!";if(!(0<c))throw"invalid cirTreeLength!";this.cirTreeOffset=d;this.cirTreeLength=c;this.isSummary=n},BED_COLOR_REGEXP:/^[0-9]+,[0-9]+,[0-9]+/,readWigData:function(a,d,c,n,b){(a=this.bwg.refsByName[a])?this.readWigDataById(a.id,d,c,n,b):n([])},readWigDataById:function(h,d,g,n,b){this.cirHeader?(new c(this,h,d,g,n,b)).cirFobRecur([this.cirTreeOffset+48],1):(h=l.hitch(this,"readWigDataById",
h,d,g,n,b),this.cirHeaderLoading?this.cirHeaderLoading.push(h):(this.cirHeaderLoading=[h],this.bwg.data.read(this.cirTreeOffset,48,l.hitch(this,function(b){this.cirHeader=b;this.cirBlockSize=this.bwg.newDataView(b,4,4).getUint32();a.forEach(this.cirHeaderLoading,function(a){a()});delete this.cirHeaderLoading}),b)))}})})},"JBrowse/Store/SeqFeature/BigWig/RequestWorker":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array JBrowse/Util JBrowse/Util/RejectableFastPromise dojo/promise/all JBrowse/Model/Range JBrowse/Model/SimpleFeature jszlib/inflate jszlib/arrayCopy".split(" "),
function(r,l,a,c,h,d,g,n,b,u){var q=function(){console.log.apply(console,arguments)};return r(null,{BIG_WIG_TYPE_GRAPH:1,BIG_WIG_TYPE_VSTEP:2,BIG_WIG_TYPE_FSTEP:3,constructor:function(a,b,e,k,f,d){this.window=a;this.source=a.bwg.name||void 0;this.blocksToFetch=[];this.outstanding=0;this.chr=b;this.min=e;this.max=k;this.callback=f;this.errorCallback=d||function(e){console.error(e,e.stack,arguments.caller)}},cirFobRecur:function(a,b){this.outstanding+=a.length;for(var e=4+32*this.window.cirBlockSize,
k,f=0;f<a.length;++f){var d=new g(a[f],Math.min(a[f]+e,this.window.cirTreeOffset+this.window.cirTreeLength));k=k?k.union(d):d}e=k.ranges();for(k=0;k<e.length;++k)this.cirFobStartFetch(a,e[k],b)},cirFobStartFetch:function(a,b,e,k){k=b.max()-b.min();this.window.bwg._read(b.min(),k,l.hitch(this,function(f){for(var k=0;k<a.length;++k)b.contains(a[k])&&(this.cirFobRecur2(f,a[k]-b.min(),e),--this.outstanding,0==this.outstanding&&this.cirCompleted())}),this.errorCallback)},cirFobRecur2:function(a,b,e){a=
this.window.bwg.newDataView(a,b);var k=a.getUint8();b=a.getUint16(2);if(0!=k)for(k=0;k<b;++k){var f=a.getUint32(),d=a.getUint32(),c=a.getUint32(),g=a.getUint32(),v=a.getUint64();e=a.getUint64();(f<this.chr||f==this.chr&&d<=this.max)&&(c>this.chr||c==this.chr&&g>=this.min)&&this.blocksToFetch.push({offset:v,size:e})}else{for(var p=[],k=0;k<b;++k)f=a.getUint32(),d=a.getUint32(),c=a.getUint32(),g=a.getUint32(),v=a.getUint64(),(f<this.chr||f==this.chr&&d<=this.max)&&(c>this.chr||c==this.chr&&g>=this.min)&&
p.push(v);0<p.length&&this.cirFobRecur(p,e+1)}},cirCompleted:function(){this.blockGroupsToFetch=this.groupBlocks(this.blocksToFetch);0==this.blockGroupsToFetch.length?this.callback([]):(this.features=[],this.readFeatures())},groupBlocks:function(a){a.sort(function(a,e){return(a.offset|0)-(e.offset|0)});for(var b=[],e,k,f=0;f<a.length;f++)e&&2E3>=a[f].offset-k?(e.size+=a[f].size-k+a[f].offset,e.blocks.push(a[f])):b.push(e={blocks:[a[f]],size:a[f].size,offset:a[f].offset}),k=e.offset+e.size;return b},
createFeature:function(a,b,e){a={start:a,end:b,source:this.source};for(var k in e)a[k]=e[k];e=new n({data:a});this.features.push(e)},maybeCreateFeature:function(a,b,e){a<=this.max&&b>=this.min&&this.createFeature(a,b,e)},parseSummaryBlock:function(a,b){for(var e=this.window.bwg.newDataView(a,b),k=a.byteLength/32,f=0;f<k;++f){var d=e.getInt32(),c=e.getInt32(),g=e.getInt32(),v=e.getInt32()||1,p=e.getFloat32(),h=e.getFloat32(),n=e.getFloat32();e.getFloat32();d==this.chr&&(d={score:n/v,maxScore:h,minScore:p},
"bigbed"==this.window.bwg.type&&(d.type="density"),this.maybeCreateFeature(c,g,d))}},parseBigWigBlock:function(a,b){var e=this.window.bwg.newDataView(a,b),k=e.getUint32(16),f=e.getUint8(20),d=e.getUint16(22);if(f==this.BIG_WIG_TYPE_FSTEP)for(var c=e.getInt32(4),g=e.getUint32(12),f=0;f<d;++f){var h=e.getFloat32(4*f+24);this.maybeCreateFeature(c+f*g,c+f*g+k,{score:h})}else if(f==this.BIG_WIG_TYPE_VSTEP)for(f=0;f<d;++f)c=e.getInt32(8*f+24),h=e.getFloat32(),this.maybeCreateFeature(c,c+k,{score:h});else if(f==
this.BIG_WIG_TYPE_GRAPH)for(f=0;f<d;++f)c=e.getInt32(12*f+24),k=e.getInt32(),h=e.getFloat32(),c>k&&(c=k),this.maybeCreateFeature(c,k,{score:h});else q("Currently not handling bwgType\x3d"+f)},parseBigBedBlock:function(a,b){for(var e=this.window.bwg.newDataView(a,b),k=0;k<a.length;){for(var f=e.getUint32(k),d=e.getInt32(k+4),c=e.getInt32(k+8),k=k+12,h="";k<a.length;){var l=e.getUint8(k++);if(0!=l)h+=String.fromCharCode(l);else break}var l={},p=h.split("\t");0<p.length&&(l.label=p[0]);1<p.length&&(l.score=
parseInt(p[1]));2<p.length&&(l.orientation=p[2]);5<p.length&&(h=p[5],this.window.BED_COLOR_REGEXP.test(h)&&(l.override_color="rgb("+h+")"));if(9>p.length)f==this.chr&&this.maybeCreateFeature(d,c,l);else if(f==this.chr&&d<=this.max&&c>=this.min){var f=p[3]|0,c=p[4]|0,h=p[6]|0,w=p[7].split(","),r=p[8].split(",");l.type="bb-transcript";var q=new n;q.id=p[0];q.type="bb-transcript";q.notes=[];l.groups=[q];if(10<p.length){var q=p[9],p=p[10],s=new n;s.id=q;s.label=p;s.type="gene";l.groups.push(s)}p=null;
for(q=0;q<h;++q)s=(r[q]|0)+d,s=new g(s,s+(w[q]|0)),p=p?p.union(s):s;w=p.ranges();for(d=0;d<w.length;++d)h=w[d],this.createFeature(h.min(),h.max(),l);if(c>f&&(d=p.intersection(new g(f,c)))){l.type="bb-translation";f=d.ranges();for(d=0;d<f.length;++d)h=f[d],this.createFeature(h.min(),h.max(),l)}}}},readFeatures:function(){var c=this,g=a.map(c.blockGroupsToFetch,function(a){var b=new h;c.window.bwg._read(a.offset,a.size,function(f){a.data=f;b.resolve(a)},l.hitch(b,"reject"));return b},c);d(g).then(function(e){a.forEach(e,
function(e){a.forEach(e.blocks,function(a){var d=a.offset-e.offset;0<c.window.bwg.uncompressBufSize?(a=b(e.data,d+2,a.size-2),d=0):a=e.data;c.window.isSummary?c.parseSummaryBlock(a,d):"bigwig"==c.window.bwg.type?c.parseBigWigBlock(a,d):"bigbed"==c.window.bwg.type?c.parseBigBedBlock(a,d):q("Don't know what to do with "+c.window.bwg.type)})});c.callback(c.features)},c.errorCallback)}})})},"JBrowse/Util/RejectableFastPromise":function(){define([],function(){var r=function(){this.callbacks=[];this.errbacks=
[]};r.prototype.then=function(l,a){"value"in this?l(this.value):"error"in this?a(this.error):(this.callbacks.push(l),this.errbacks.push(a))};r.prototype.resolve=function(l){this.value=l;delete this.errbacks;l=this.callbacks;delete this.callbacks;for(var a=0;a<l.length;a++)l[a](this.value)};r.prototype.reject=function(l){this.error=l;delete this.callbacks;var a=this.errbacks;delete this.errbacks;for(var c=0;c<a.length;c++)a[c](l)};return r})},"JBrowse/Model/Range":function(){define(["dojo/_base/declare"],
function(r){var l=r(null,{constructor:function(){this._ranges=2==arguments.length?[{min:arguments[0],max:arguments[1]}]:0 in arguments[0]?dojo.clone(arguments[0]):[arguments[0]]},min:function(){return this._ranges[0].min},max:function(){return this._ranges[this._ranges.length-1].max},contains:function(a){for(var c=0;c<this._ranges.length;++c){var h=this._ranges[c];if(h.min<=a&&h.max>=a)return!0}return!1},isContiguous:function(){return 1<this._ranges.length},ranges:function(){return this._ranges.map(function(a){return new l(a.min,
a.max)})},toString:function(){return this._ranges.map(function(a){return"["+a.min+"-"+a.max+"]"}).join(",")},union:function(a){a=this.ranges().concat(a.ranges()).sort(this.rangeOrder);for(var c=[],h=a[0],d=1;d<a.length;++d){var g=a[d];g.min()>h.max()+1?(c.push(h),h=g):g.max()>h.max()&&(h=new l(h.min(),g.max()))}c.push(h);if(1==c.length)return c[0];alert("unknown error: _Compound")},intersection:function(a){for(var c,h=this.ranges(),d=a.ranges(),g=h.length,n=d.length,b=0,r=0,q=[];b<g&&r<n;){c=h[b];
a=d[r];var m=Math.max(c.min(),a.min()),t=Math.min(c.max(),a.max());t>=m&&q.push(new l(m,t));c.max()>a.max()?++r:++b}if(0==q.length)return null;if(1==q.length)return q[0];alert("unknown error: _Compound")},coverage:function(){for(var a=0,c=this.ranges(),h=0;h<c.length;++h)var d=c[h],a=a+(d.max()-d.min()+1);return a},rangeOrder:function(a,c){2>arguments.length&&(c=a,a=this);return a.min()<c.min()?-1:a.min()>c.min()?1:a.max()<c.max()?-1:c.max()>a.max()?1:0}});return l})}}});
define("JBrowse/Store/SeqFeature/BigWig","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/url JBrowse/Model/DataView JBrowse/has JBrowse/Errors JBrowse/Store/SeqFeature JBrowse/Store/DeferredStatsMixin JBrowse/Store/DeferredFeaturesMixin ./BigWig/Window JBrowse/Util JBrowse/Model/XHRBlob".split(" "),function(r,l,a,c,h,d,g,n,b,u,q,m,t){return r([n,b,u],{BIG_WIG_MAGIC:-2003829722,BIG_BED_MAGIC:-2021002517,BIG_WIG_TYPE_GRAPH:1,BIG_WIG_TYPE_VSTEP:2,BIG_WIG_TYPE_FSTEP:3,_littleEndian:!0,
constructor:function(a){this.data=a.blob||new t(this.resolveUrl(a.urlTemplate||"data.bigwig"));this.name=a.name||this.data.url&&(new c(this.data.url)).path.replace(/^.+\//,"")||"anonymous";this.storeTimeout=3E3;this._load()},_defaultConfig:function(){return m.deepUpdate(dojo.clone(this.inherited(arguments)),{chunkSizeLimit:3E7})},_getGlobalStats:function(a,b){var f=this._globalStats||{};"scoreMean"in f||(f.scoreMean=f.basesCovered?f.scoreSum/f.basesCovered:0);"scoreStdDev"in f||(f.scoreStdDev=this._calcStdFromSums(f.scoreSum,
f.scoreSumSquares,f.basesCovered));a(f)},_read:function(a,b,f,d){b>this.config.chunkSizeLimit?d(new g.DataOverflow("Too much data. Chunk size "+m.commifyNumber(b)+" bytes exceeds chunkSizeLimit of "+m.commifyNumber(this.config.chunkSizeLimit)+".")):this.data.read.apply(this.data,arguments)},_load:function(){this._read(0,512,l.hitch(this,function(a){if(a){var b=this.newDataView(a),f=b.getInt32();if(f!=this.BIG_WIG_MAGIC&&f!=this.BIG_BED_MAGIC&&(this._littleEndian=!1,b=this.newDataView(a),b.getInt32()!=
this.BIG_WIG_MAGIC&&f!=this.BIG_BED_MAGIC)){console.error("Not a BigWig or BigBed file");this._deferred.reject("Not a BigWig or BigBed file");return}this.type=f==this.BIG_BED_MAGIC?"bigbed":"bigwig";(this.fileSize=a.fileSize)||console.warn("cannot get size of BigWig/BigBed file, widest zoom level not available");this.version=b.getUint16();this.numZoomLevels=b.getUint16();this.chromTreeOffset=b.getUint64();this.unzoomedDataOffset=b.getUint64();this.unzoomedIndexOffset=b.getUint64();this.fieldCount=
b.getUint16();this.definedFieldCount=b.getUint16();this.asOffset=b.getUint64();this.totalSummaryOffset=b.getUint64();this.uncompressBufSize=b.getUint32();this.zoomLevels=[];for(f=0;f<this.numZoomLevels;++f){var d=b.getUint32(4*(6*f+16)),c=b.getUint64(4*(6*f+18)),g=b.getUint64(4*(6*f+20));this.zoomLevels.push({reductionLevel:d,dataOffset:c,indexOffset:g})}this.totalSummaryOffset?function(){var b=this.newDataView(a,this.totalSummaryOffset);this._globalStats={basesCovered:b.getUint64(),scoreMin:b.getFloat64(),
scoreMax:b.getFloat64(),scoreSum:b.getFloat64(),scoreSumSquares:b.getFloat64()}}.call(this):console.warn("BigWig "+this.data.url+" has no total summary data.");this._readChromTree(function(){this._deferred.features.resolve({success:!0});this._deferred.stats.resolve({success:!0})},l.hitch(this,"_failAllDeferred"))}else this._failAllDeferred("BBI header not readable")}),l.hitch(this,"_failAllDeferred"))},newDataView:function(a,b,f){return new h(a,b,f,this._littleEndian)},_readChromTree:function(a,b){var f=
this;this.refsByNumber={};this.refsByName={};for(var c=this.unzoomedDataOffset;0!=c%4;)++c;this._read(this.chromTreeOffset,c-this.chromTreeOffset,function(b){if(d("typed-arrays")){var c=f.newDataView(b);if(2026540177!==c.getUint32())throw"parse error: not a Kent bPlusTree";c.getUint32();var k=c.getUint32();c.getUint32();c.getUint64();var g=function(a){if(a>=b.length)throw"reading beyond end of buffer";var e=c.getUint8(a),d=c.getUint16(a+2);a+=4;for(var h=0;h<d;++h)if(e){for(var l="",m=0;m<k;++m){var n=
c.getUint8(a++);0!=n&&(l+=String.fromCharCode(n))}m=c.getUint32(a);n=c.getUint32(a+4);a+=8;n={name:l,id:m,length:n};f.refsByName[f.browser.regularizeReferenceName(l)]=n;f.refsByNumber[m]=n}else a+=k,l=c.getUint64(a),a+=8,l-=f.chromTreeOffset,g(l)};g(32);a.call(f,f)}else f._failAllDeferred("Web browser does not support typed arrays")},b)},hasRefSeq:function(a,b,c){var d=this;a=d.browser.regularizeReferenceName(a);this._deferred.features.then(function(){b(a in d.refsByName)},c)},_getFeatures:function(b,
c,d,g){var h=this.browser.regularizeReferenceName(b.ref),l=b.start,m=b.end;(b=b.basesPerSpan?this.getView(1/b.basesPerSpan):b.scale?this.getView(b.scale):this.getView(1))?b.readWigData(h,l,m,dojo.hitch(this,function(b){a.forEach(b||[],c);d()}),g):d()},getUnzoomedView:function(){if(!this.unzoomedView){var a=4E3;this.zoomLevels[0]&&(a=this.zoomLevels[0].dataOffset-this.unzoomedIndexOffset);this.unzoomedView=new q(this,this.unzoomedIndexOffset,a,!1)}return this.unzoomedView},getView:function(a){if(!this.zoomLevels||
!this.zoomLevels.length)return null;if(!this._viewCache||this._viewCache.scale!=a)this._viewCache={scale:a,view:this._getView(a)};return this._viewCache.view},_getView:function(a){a=1/a;var b=this.zoomLevels.length;for(this.fileSize||b--;0<b;b--){var c=this.zoomLevels[b];if(c&&c.reductionLevel<=2*a)return new q(this,c.indexOffset,b<this.zoomLevels.length-1?this.zoomLevels[b+1].dataOffset-c.indexOffset:this.fileSize-4-c.indexOffset,!0)}return this.getUnzoomedView()},saveStore:function(){return{urlTemplate:this.config.blob.url}}})});
//# sourceMappingURL=BigWig.js.map