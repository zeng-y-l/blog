import{b as a,r as v,c as r,w as o,v as _,a as e,e as n,o as l}from"./chunks/framework.c7704f1f.js";const c=e("p",null,"做到宽度平分、有最小宽度、自动换行、左对齐",-1),p=e("p",null,"如下，拖动滑竿控制宽度：",-1),u=n('<div id="containergrid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div><p>使用repeat的auto-fill实现自动换行，minmax实现最小宽度，1fr实现平分。</p><p>不过，若外层宽度过小，内层会超出。<br> 若希望此时内层宽度占满，而非超出，不知有没有什么好办法？</p><p>源代码：<a href="https://jsbin.com/wesekofeje/edit?html,css,output" target="_blank" rel="noreferrer">https://jsbin.com/wesekofeje/edit?html,css,output</a></p>',4),h=JSON.parse('{"title":"CSS 中 Grid 实现自动拉伸+换行","description":"","frontmatter":{"title":"CSS 中 Grid 实现自动拉伸+换行","create":"2023-07-01T00:00:00.000Z","desc":"宽度平分、有最小宽度、自动换行、左对齐（这是一篇旧文章，日期是后来的）"},"headers":[],"relativePath":"blog/cssgrid.md","filePath":"blog/cssgrid.md"}'),m={name:"blog/cssgrid.md"},b=Object.assign(m,{setup(g){a(t=>({"697f2a02":i.value+"%"}));const i=v(100);return(t,d)=>(l(),r("div",null,[c,p,o(e("input",{id:"rangegrid",type:"range",min:"0",max:"100",step:"any","onUpdate:modelValue":d[0]||(d[0]=s=>i.value=s)},null,512),[[_,i.value]]),u]))}});export{h as __pageData,b as default};
