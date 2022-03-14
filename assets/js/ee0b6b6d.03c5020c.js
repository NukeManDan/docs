"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5821],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4058:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return d}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=n(4996),c=["components"],p={},s="Implementation",l={unversionedId:"dapp-dev-guide/tutorials/cep47/implementation",id:"dapp-dev-guide/tutorials/cep47/implementation",title:"Implementation",description:"This section will explore a smart contract that implements the NFT standard for the Casper Network, introduced as CEP-47. Please visit GitHub for the most up-to-date implementation.",source:"@site/source/docs/casper/dapp-dev-guide/tutorials/cep47/implementation.md",sourceDirName:"dapp-dev-guide/tutorials/cep47",slug:"/dapp-dev-guide/tutorials/cep47/implementation",permalink:"/docs/dapp-dev-guide/tutorials/cep47/implementation",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/tutorials/cep47/implementation.md",tags:[],version:"current",frontMatter:{},sidebar:"dapp-dev-guide",previous:{title:"Preparation",permalink:"/docs/dapp-dev-guide/tutorials/cep47/prepare"},next:{title:"Deployment",permalink:"/docs/dapp-dev-guide/tutorials/cep47/deploy"}},u={},d=[{value:"Installing Required Crates",id:"installing-required-crates",level:2},{value:"Constructing the Contract",id:"constructing-the-contract",level:2},{value:"Implementing Contract Endpoints",id:"implementing-contract-endpoints",level:2}],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"This section will explore a smart contract that implements the NFT standard for the Casper Network, introduced as ",(0,o.kt)("a",{parentName:"p",href:"/docs/dapp-dev-guide/tutorials/cep47/"},"CEP-47"),". Please visit ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/casper-nft-cep47"},"GitHub")," for the most up-to-date implementation."),(0,o.kt)("p",null,"To successfully execute this reference contract, you must copy the entire ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/casper-nft-cep47/blob/master/cep47/bin/cep47_token.rs"},"contract file")," with all the necessary imports, declarations, and functions. To execute the contract, you need to deploy the .wasm file on the network."),(0,o.kt)("h2",{id:"installing-required-crates"},"Installing Required Crates"),(0,o.kt)("p",null,"This sample CEP-47 NFT contract requires the following crates to function correctly:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/casper-contract/latest/casper_contract/"},"casper_contract")," - A Rust library for writing smart contracts on the Casper Network"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/casper-types/latest/casper_types/"},"casper_types")," - Types used to allow the creation of Wasm contracts and tests for use on the Casper Network"),(0,o.kt)("li",{parentName:"ul"},"cep47 - A library for developing CEP-47 tokens for the Casper Network")),(0,o.kt)("img",{src:(0,i.Z)("/image/tutorials/cep-47/crate_imports.png"),alt:"import-crates",width:"800"}),(0,o.kt)("h2",{id:"constructing-the-contract"},"Constructing the Contract"),(0,o.kt)("p",null,"The constructor uses three arguments to initialize the contract:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")," - Name of the NFT token"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"symbol")," - Symbol of the NFT token"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"meta")," - Metadata about the NFT token")),(0,o.kt)("img",{src:(0,i.Z)("/image/tutorials/cep-47/cep47_constructor.png"),alt:"cep47-constructor",width:"600"}),(0,o.kt)("h2",{id:"implementing-contract-endpoints"},"Implementing Contract Endpoints"),(0,o.kt)("p",null,"Contract endpoints handle token operations with your account and other accounts. Refer to the list of ",(0,o.kt)("a",{parentName:"p",href:"/docs/dapp-dev-guide/tutorials/cep47/#casper-nft-cep-47-functions"},"endpoints")," in the introduction section and ",(0,o.kt)("a",{parentName:"p",href:"/docs/dapp-dev-guide/tutorials/cep47/contract-interaction"},"endpoint event stream")," details in the token management section."))}f.isMDXComponent=!0}}]);