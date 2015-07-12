!function(a,b,c){"function"==typeof define&&define.amd?define([],c):"object"==typeof exports?module.exports=c():b[a]=c()}("Please",this,function(){"use strict";function a(){function a(a,b,c){var d=Math.random;return c instanceof g&&(d=c.random),Math.floor(d()*(b-a+1))+a}function b(a,b,c){var d=Math.random;return c instanceof g&&(d=c.random),d()*(b-a)+a}function c(a,b,c){return Math.max(b,Math.min(a,c))}function d(a,b){var c;switch(a){case"hex":for(c=0;c<b.length;c++)b[c]=h.HSV_to_HEX(b[c]);break;case"rgb":for(c=0;c<b.length;c++)b[c]=h.HSV_to_RGB(b[c]);break;case"rgb-string":for(c=0;c<b.length;c++){var d=h.HSV_to_RGB(b[c]);b[c]="rgb("+d.r+","+d.g+","+d.b+")"}break;case"hsv":break;default:console.error("Format not recognized.")}return b}function e(a){var b=h.HSV_to_RGB(a),c=(299*b.r+587*b.g+114*b.b)/1e3;return c>=128?"dark":"light"}function f(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}function g(a){function b(){d=(d+1)%256,e=(e+c[d])%256;var a=c[d];return c[d]=c[e],c[e]=a,c[(c[d]+c[e])%256]}for(var c=[],d=0,e=0,f=0;256>f;f++)c[f]=f;for(var g=0,h=0;256>g;g++){h=(h+c[g]+a.charCodeAt(g%a.length))%256;var i=c[g];c[g]=c[h],c[h]=i}this.random=function(){for(var a=0,c=0,d=1;8>a;a++)c+=b()*d,d*=256;return c/0x10000000000000000}}var h={},i={aliceblue:"F0F8FF",antiquewhite:"FAEBD7",aqua:"00FFFF",aquamarine:"7FFFD4",azure:"F0FFFF",beige:"F5F5DC",bisque:"FFE4C4",black:"000000",blanchedalmond:"FFEBCD",blue:"0000FF",blueviolet:"8A2BE2",brown:"A52A2A",burlywood:"DEB887",cadetblue:"5F9EA0",chartreuse:"7FFF00",chocolate:"D2691E",coral:"FF7F50",cornflowerblue:"6495ED",cornsilk:"FFF8DC",crimson:"DC143C",cyan:"00FFFF",darkblue:"00008B",darkcyan:"008B8B",darkgoldenrod:"B8860B",darkgray:"A9A9A9",darkgrey:"A9A9A9",darkgreen:"006400",darkkhaki:"BDB76B",darkmagenta:"8B008B",darkolivegreen:"556B2F",darkorange:"FF8C00",darkorchid:"9932CC",darkred:"8B0000",darksalmon:"E9967A",darkseagreen:"8FBC8F",darkslateblue:"483D8B",darkslategray:"2F4F4F",darkslategrey:"2F4F4F",darkturquoise:"00CED1",darkviolet:"9400D3",deeppink:"FF1493",deepskyblue:"00BFFF",dimgray:"696969",dimgrey:"696969",dodgerblue:"1E90FF",firebrick:"B22222",floralwhite:"FFFAF0",forestgreen:"228B22",fuchsia:"FF00FF",gainsboro:"DCDCDC",ghostwhite:"F8F8FF",gold:"FFD700",goldenrod:"DAA520",gray:"808080",grey:"808080",green:"008000",greenyellow:"ADFF2F",honeydew:"F0FFF0",hotpink:"FF69B4",indianred:"CD5C5C",indigo:"4B0082",ivory:"FFFFF0",khaki:"F0E68C",lavender:"E6E6FA",lavenderblush:"FFF0F5",lawngreen:"7CFC00",lemonchiffon:"FFFACD",lightblue:"ADD8E6",lightcoral:"F08080",lightcyan:"E0FFFF",lightgoldenrodyellow:"FAFAD2",lightgray:"D3D3D3",lightgrey:"D3D3D3",lightgreen:"90EE90",lightpink:"FFB6C1",lightsalmon:"FFA07A",lightseagreen:"20B2AA",lightskyblue:"87CEFA",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"B0C4DE",lightyellow:"FFFFE0",lime:"00FF00",limegreen:"32CD32",linen:"FAF0E6",magenta:"FF00FF",maroon:"800000",mediumaquamarine:"66CDAA",mediumblue:"0000CD",mediumorchid:"BA55D3",mediumpurple:"9370D8",mediumseagreen:"3CB371",mediumslateblue:"7B68EE",mediumspringgreen:"00FA9A",mediumturquoise:"48D1CC",mediumvioletred:"C71585",midnightblue:"191970",mintcream:"F5FFFA",mistyrose:"FFE4E1",moccasin:"FFE4B5",navajowhite:"FFDEAD",navy:"000080",oldlace:"FDF5E6",olive:"808000",olivedrab:"6B8E23",orange:"FFA500",orangered:"FF4500",orchid:"DA70D6",palegoldenrod:"EEE8AA",palegreen:"98FB98",paleturquoise:"AFEEEE",palevioletred:"D87093",papayawhip:"FFEFD5",peachpuff:"FFDAB9",peru:"CD853F",pink:"FFC0CB",plum:"DDA0DD",powderblue:"B0E0E6",purple:"800080",rebeccapurple:"663399",red:"FF0000",rosybrown:"BC8F8F",royalblue:"4169E1",saddlebrown:"8B4513",salmon:"FA8072",sandybrown:"F4A460",seagreen:"2E8B57",seashell:"FFF5EE",sienna:"A0522D",silver:"C0C0C0",skyblue:"87CEEB",slateblue:"6A5ACD",slategray:"708090",slategrey:"708090",snow:"FFFAFA",springgreen:"00FF7F",steelblue:"4682B4",tan:"D2B48C",teal:"008080",thistle:"D8BFD8",tomato:"FF6347",turquoise:"40E0D0",violet:"EE82EE",wheat:"F5DEB3",white:"FFFFFF",whitesmoke:"F5F5F5",yellow:"FFFF00",yellowgreen:"9ACD32"},j=.618033988749895,k={hue:null,saturation:null,value:null,base_color:"",greyscale:!1,grayscale:!1,golden:!0,full_random:!1,colors_returned:1,format:"hex",seed:null},l={scheme_type:"analogous",format:"hex"},m={golden:!1,format:"hex"};return h.NAME_to_HEX=function(a){return a=a.toLowerCase(),a in i?i[a]:void console.error("Color name not recognized.")},h.NAME_to_RGB=function(a){return h.HEX_to_RGB(h.NAME_to_HEX(a))},h.NAME_to_HSV=function(a){return h.HEX_to_HSV(h.NAME_to_HEX(a))},h.HEX_to_RGB=function(a){var b=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;a=a.replace(b,function(a,b,c,d){return b+b+c+c+d+d});var c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);return c?{r:parseInt(c[1],16),g:parseInt(c[2],16),b:parseInt(c[3],16)}:null},h.RGB_to_HEX=function(a){return"#"+((1<<24)+(a.r<<16)+(a.g<<8)+a.b).toString(16).slice(1)},h.HSV_to_RGB=function(a){var b,c,d,e,f,g,h,i,j=a.h,k=a.s,l=a.v;if(0===k)return{r:l,g:l,b:l};switch(j/=60,e=Math.floor(j),f=j-e,g=l*(1-k),h=l*(1-k*f),i=l*(1-k*(1-f)),e){case 0:b=l,c=i,d=g;break;case 1:b=h,c=l,d=g;break;case 2:b=g,c=l,d=i;break;case 3:b=g,c=h,d=l;break;case 4:b=i,c=g,d=l;break;case 5:b=l,c=g,d=h}return{r:Math.floor(255*b),g:Math.floor(255*c),b:Math.floor(255*d)}},h.RGB_to_HSV=function(a){var b=a.r/255,c=a.g/255,d=a.b/255,e=0,f=0,g=0,h=Math.min(b,Math.min(c,d)),i=Math.max(b,Math.max(c,d));if(h===i)return g=h,{h:0,s:0,v:g};var j=b===h?c-d:d===h?b-c:d-b,k=b===h?3:d===h?1:5;return e=60*(k-j/(i-h)),f=(i-h)/i,g=i,{h:e,s:f,v:g}},h.HSV_to_HEX=function(a){return h.RGB_to_HEX(h.HSV_to_RGB(a))},h.HEX_to_HSV=function(a){return h.RGB_to_HSV(h.HEX_to_RGB(a))},h.make_scheme=function(a,b){function e(a){return{h:a.h,s:a.s,v:a.v}}var g,h,i,j,k,m=f(l);if(null!==b)for(var n in b)b.hasOwnProperty(n)&&(m[n]=b[n]);var o=[a];switch(m.scheme_type.toLowerCase()){case"monochromatic":case"mono":for(k=1;2>=k;k++)g=e(a),i=g.s+.1*k,i=c(i,0,1),j=g.v+.1*k,j=c(j,0,1),g.s=i,g.v=j,o.push(g);for(k=1;2>=k;k++)g=e(a),i=g.s-.1*k,i=c(i,0,1),j=g.v-.1*k,j=c(j,0,1),g.s=i,g.v=j,o.push(g);break;case"complementary":case"complement":case"comp":g=e(a),g.h=(g.h+180)%360,o.push(g);break;case"split-complementary":case"split-complement":case"split":g=e(a),g.h=(g.h+165)%360,o.push(g),g=e(a),g.h=Math.abs((g.h-165)%360),o.push(g);break;case"double-complementary":case"double-complement":case"double":g=e(a),g.h=(g.h+180)%360,o.push(g),g.h=(g.h+30)%360,h=e(g),o.push(g),g.h=(g.h+180)%360,o.push(h);break;case"analogous":case"ana":for(k=1;5>=k;k++)g=e(a),g.h=(g.h+20*k)%360,o.push(g);break;case"triadic":case"triad":case"tri":for(k=1;3>k;k++)g=e(a),g.h=(g.h+120*k)%360,o.push(g);break;default:console.error("Color scheme not recognized.")}return d(m.format.toLowerCase(),o),o},h.make_color=function(e){var i=[],l=f(k),m=null;if(null!==e)for(var n in e)e.hasOwnProperty(n)&&(l[n]=e[n]);var o=null;"string"==typeof l.seed&&(o=new g(l.seed)),l.base_color.length>0&&(m=l.base_color.match(/^#?([0-9a-f]{3})([0-9a-f]{3})?$/i)?h.HEX_to_HSV(l.base_color):h.NAME_to_HSV(l.base_color));for(var p=0;p<l.colors_returned;p++){var q,r,s,t=a(0,360,o);null!==m?(q=c(a(m.h-5,m.h+5,o),0,360),r=0===m.s?0:b(.4,.85,o),s=b(.4,.85,o),i.push({h:q,s:r,v:s})):(q=l.greyscale===!0||l.grayscale===!0?0:l.golden===!0?(t+t/j)%360:null===l.hue||l.full_random===!0?t:c(l.hue,0,360),r=l.greyscale===!0||l.grayscale===!0?0:l.full_random===!0?b(0,1,o):null===l.saturation?.4:c(l.saturation,0,1),s=l.full_random===!0?b(0,1,o):l.greyscale===!0||l.grayscale===!0?b(.15,.75,o):null===l.value?.75:c(l.value,0,1),i.push({h:q,s:r,v:s}))}return d(l.format.toLowerCase(),i),i},h.make_contrast=function(a,b){var g=f(m);if(null!==b)for(var i in b)b.hasOwnProperty(i)&&(g[i]=b[i]);var k,l,n=e(a);if(g.golden===!0)l=a.h*(1+j)%360;else{var o=h.make_scheme(a,{scheme_type:"complementary",format:"hsv"})[1];l=c(o.h-30,0,360)}var p;return"dark"===n?p=c(a.v-.25,0,1):"light"===n&&(p=c(a.v+.25,0,1)),k=[{h:l,s:a.s,v:p}],d(g.format.toLowerCase(),k),k[0]},h}return a()});var app=angular.module("asecApp",["ngMaterial","ngRoute","perfect_scrollbar"]);app.config(["$routeProvider","$locationProvider",function(a,b){b.html5Mode(!0),a.when("/",{templateUrl:"/views/home.html",controller:"homeCTL",redirectTo:function(a,b,c){return c["goto"]?"/"+c["goto"]:"/"}}).when("/municipio/:municipioId",{templateUrl:"/views/municipio.html",controller:"municipioCTL"}).otherwise({redirectTo:"/"})}]),app.config(["$httpProvider",function(a){a.defaults.useXDomain=!0,a.defaults.withCredentials=!0,delete a.defaults.headers.common["X-Requested-With"],a.defaults.headers.common.Accept="application/json",a.defaults.headers.common["Content-Type"]="application/json"}]),angular.module("asecApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),app.controller("homeCTL",["$scope","$http",function(a,b){a.municipios=[],a.bubbleChartData=[],a.getMunicipios=function(){for(var c=38,d="http://desarrollo.optimit.com.mx/auditoria_coahuila/web_service.php?accion=get_n_entidades_todos_datos&id_entidad=",e="",f=1;c+1>f;f++)e+=f==c?f:f+",";var g=d+e+"&callback=JSON_CALLBACK";b.jsonp(g).success(function(b,c,d,e){_.each(b,function(b){b&&a.municipios.push(b)}),a.bubbleChartData=a.municipios}).error(function(a,b,c,d){})},a.getMunicipios()}]),app.controller("municipioCTL",["$scope","$http","$routeParams",function(a,b,c){a.municipioId=c.municipioId,a.municipio={},a.getMunicipio=function(){var c="http://desarrollo.optimit.com.mx/auditoria_coahuila/web_service.php?accion=get_entidad_todos_datos&id_entidad=",d=a.municipioId,e=c+d+"&callback=JSON_CALLBACK";b.jsonp(e).success(function(b,c,e,f){console.log(d),console.log(b),a.municipio=b[d],console.log(a.municipio)}).error(function(a,b,c,d){})},a.getMunicipio()}]),function(){var a=function(a,b,c,d){a.getRandomInt=function(a,b){return Math.floor(Math.random()*(b-a+1))+a},a.getRandomColor=function(){var b=["red","blue","orange"],c=a.getRandomInt(0,b.length-1),d=Please.make_color({base_color:b[c]});return d[0]},a.processData=function(a){var b=[];return _.each(a,function(a){b.push({name:a.datos_entidad.nombre_completo,className:a.datos_entidad.nombre_completo.toLowerCase(),size:a.li_pe.pe_oficial,opacity:1-a.porcentaje_cumplimiento,cumplimiento:a.porcentaje_cumplimiento,resourceId:a.datos_entidad.id})}),{children:b}},a.getTooltip=function(a){var c="<p><strong>"+a.name+"</strong></p>";return c+="<hr/>",c+="<p>Porcentaje de cumplimiento: "+a.cumplimiento+"%</p>",c+="<p>PE oficial:</p>",c+='<p><strong class="quantity">'+b("currency")(a.size,"$")+"</strong></p>"},a.initBubbles=function(){var b;if(b=a.chartData,b.length>0){d3.select("svg").remove();var e=parseInt(d3.select("#bubble-chart").style("width"),10),f=parseInt(d3.select("#bubble-chart").style("height"),10),g=d3.tip().attr("class","bubble-chart-tip").offset([-10,0]).html(function(b){return a.getTooltip(b)}),h=d3.select("#bubble-chart").append("svg").attr("width",e).attr("height",f);h.call(g);var i=d3.layout.pack().size([e,f]).padding(8).value(function(a){return a.size}),j=i.nodes(a.processData(b)).filter(function(a){return!a.children}),k=h.selectAll("circle").data(j,function(a){return a.name});k.enter().append("circle").attr("fill",a.getRandomColor).attr("opacity",function(a){return a.opacity}).attr("transform",function(a){return"translate("+a.x+","+a.y+")"}).attr("r",function(a){return a.r}).on("mouseover",function(a){g.show(a),d3.select(this).transition().duration(750).attr("r",function(a){return 1.1*a.r})}).on("mouseout",function(a){g.hide(a),d3.select(this).transition().duration(750).attr("r",function(a){return 1*a.r})}).on("click",function(a){d.$apply(function(){c.path("/municipio/"+a.resourceId)})}).attr("class",function(a){return a.className})}},a.resize=function(){a.initBubbles()},d3.select(window).on("resize",a.resize),a.initBubbles(),a.$watch("chartData",function(b,c){b&&a.initBubbles()},!0)};a.$inject=["$scope","$filter","$location","$rootScope"];var b=function(){return{controller:a,scope:{chartData:"="},template:'<div class="asec-chart" id="bubble-chart"></div>'}};app.directive("bubbleChart",b)}();