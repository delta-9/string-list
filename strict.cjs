var a=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var m=Object.prototype.hasOwnProperty;var d=(t,e)=>{for(var r in e)a(t,r,{get:e[r],enumerable:!0})},y=(t,e,r,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of c(e))!m.call(t,i)&&i!==r&&a(t,i,{get:()=>e[i],enumerable:!(s=h(e,i))||s.enumerable});return t};var w=t=>y(a({},"__esModule",{value:!0}),t);var O={};d(O,{default:()=>b,sl:()=>f,stringList:()=>l});module.exports=w(O);var n=(t,e)=>{if(t&&e&&Object.isFrozen(t)){/* c8 ignore next 3 @preserve */return Object.freeze(e)}return e},u=class t extends Array{infered={Union:void 0,Tuple:void 0,Mutable:void 0,Unsorted:void 0};enum;hasEmpty=!1;constructor(...e){let r=[],s=[],i=!1;for(let p of e.flat())typeof p=="string"&&(p===""&&(i=!0),r.push([p,p]),s.push(p));super(...s),this.hasEmpty=i,this.enum=Object.fromEntries(r),this.hasEmpty&&(this.enum[""]=""),Object.freeze(this.enum)}concat(...e){return n(this,new t(...super.concat.apply(this,e.flat())))}concatList(e){return this.concat(...e)}toSorted(){return n(this,new t(...super.toSorted.apply(this,arguments)))}toReversed(){return n(this,new t(...super.toReversed.apply(this,arguments)))}reverse(){return n(this,new t(...super.reverse.apply(this,arguments)))}toSpliced(){return n(this,new t(...super.toSpliced.apply(this,arguments)))}slice(){return n(this,new t(...super.slice.apply(this,arguments)))}without(){let e=Array.from(arguments).flatMap(r=>Array.isArray(r)?r.filter(s=>typeof s=="string"):typeof r=="string"?[r]:[]);return n(this,new t(...this.filter(r=>!e.includes(r))))}withTrim(){return n(this,new t(...super.map(e=>e.trim())))}withPrefix(e=""){return n(this,new t(...super.map(r=>`${e}${r}`)))}withSuffix(e=""){return n(this,new t(...super.map(r=>`${r}${e}`)))}withReplace(e,r=void 0){return n(this,new t(...super.map(s=>s.replace(e,r))))}withReplaceAll(e,r=void 0){return n(this,new t(...super.map(s=>s.replaceAll(e,r))))}toLowerCase(){return n(this,new t(...super.map(e=>e.toLowerCase())))}toUpperCase(){return n(this,new t(...super.map(e=>e.toUpperCase())))}toCapitalize(){return this.withReplace(/\b\w/g,e=>e.toUpperCase())}toUnCapitalize(){return this.withReplace(/\b\w/g,e=>e.toLowerCase())}value(e){if(typeof e=="string"&&(this.enum[e]||this.hasEmpty&&e===""))return e;throw new Error(`Invalid value ${e}`)}mutable(){return Array.from(this)}toRecordValue(e=void 0,...r){return Object.assign({},...r,Object.fromEntries(super.map(s=>[s,e])))}toRecordType(e="any",r=void 0,...s){return Object.assign({},...s,Object.fromEntries(super.map(i=>[i,r])))}asMap(){return new Map(super.map(e=>[e,e]))}asSet(){return new Set(this)}asObject(){return Object.assign({},...super.map(e=>({[e]:e})))}map(){let e=this.mutable();return e.map.apply(e,arguments)}filter(){let e=this.mutable();return e.filter.apply(e,arguments)}reduce(){let e=this.mutable();return e.reduce.apply(e,arguments)}reduceRight(){let e=this.mutable();return e.reduceRight.apply(e,arguments)}flat(){let e=this.mutable();return e.flat.apply(e,arguments)}flatMap(){let e=this.mutable();return e.flatMap.apply(e,arguments)}with(){let e=this.mutable();return e.with.apply(e,arguments)}},A=Object.freeze({push:"push",unshift:"unshift",shift:"shift",copyWithin:"copyWithin",pop:"pop",fill:"fill",splice:"splice"});function g(...t){let e=t,r=t.some(s=>typeof s!="string");return t.length&&r&&(typeof window>"u"&&process&&process.env,e=t.flatMap(s=>Array.isArray(s)?s.filter(i=>typeof i=="string"):typeof s=="string"?[s]:typeof s=="number"?[String(s)]:[])),new u(...e)}function o(...t){return Object.freeze(g(...t))}var l=o,f=o,b={stringList:l,sl:f};
