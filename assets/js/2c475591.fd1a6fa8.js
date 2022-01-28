"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3415],{3905:function(e,a,n){n.d(a,{Zo:function(){return p},kt:function(){return b}});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function c(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?c(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),i=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},p=function(e){var a=i(e.components);return t.createElement(l.Provider,{value:a},e.children)},f={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=i(n),b=r,u=d["".concat(l,".").concat(b)]||d[b]||f[b]||c;return n?t.createElement(u,s(s({ref:a},p),{},{components:n})):t.createElement(u,s({ref:a},p))}));function b(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var c=n.length,s=new Array(c);s[0]=d;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var i=2;i<c;i++)s[i]=n[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,a,n){function t(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!t(e)}n.d(a,{b:function(){return t},Z:function(){return r}})},4996:function(e,a,n){n.d(a,{C:function(){return c},Z:function(){return s}});var t=n(2263),r=n(3919);function c(){var e=(0,t.Z)().siteConfig,a=(e=void 0===e?{}:e).baseUrl,n=void 0===a?"/":a,c=e.url;return{withBaseUrl:function(e,a){return function(e,a,n,t){var c=void 0===t?{}:t,s=c.forcePrependBaseUrl,o=void 0!==s&&s,l=c.absolute,i=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(o)return a+n;var p=n.startsWith(a)?n:a+n.replace(/^\//,"");return i?e+p:p}(c,n,e,a)}}}function s(e,a){return void 0===a&&(a={}),(0,c().withBaseUrl)(e,a)}},5249:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return f},default:function(){return b}});var t=n(2122),r=n(9756),c=(n(7294),n(3905)),s=n(4996),o=["components"],l={},i="Approvals",p={unversionedId:"workflow/erc-20-sample-guide/approvals",id:"workflow/erc-20-sample-guide/approvals",isDocsHomePage:!1,title:"Approvals",description:"Transfer 10 Tokens from an Allowance of only 5",source:"@site/source/docs/casper/workflow/erc-20-sample-guide/approvals.md",sourceDirName:"workflow/erc-20-sample-guide",slug:"/workflow/erc-20-sample-guide/approvals",permalink:"/docs/workflow/erc-20-sample-guide/approvals",editUrl:"https://github.com/casper-network/documentation/tree/master/docs/casper/workflow/erc-20-sample-guide/approvals.md",tags:[],version:"current",frontMatter:{},sidebar:"workflow",previous:{title:"Transfers",permalink:"/docs/workflow/erc-20-sample-guide/transfers"},next:{title:"Checking Final Balances",permalink:"/docs/workflow/erc-20-sample-guide/final-balance"}},f=[{value:"Transfer 10 Tokens from an Allowance of only 5",id:"transfer-10-tokens-from-an-allowance-of-only-5",children:[]},{value:"Additional transfer_from of Remainder 5 tokens",id:"additional-transfer_from-of-remainder-5-tokens",children:[]},{value:"Approving C to spend 10 of B\u2019s ERC-20 tokens",id:"approving-c-to-spend-10-of-bs-erc-20-tokens",children:[]},{value:"Transfer_from C\u2019s Allowance to D",id:"transfer_from-cs-allowance-to-d",children:[{value:"Failure to Overspend C&#39;s Allowance**",id:"failure-to-overspend-cs-allowance",children:[]}]}],d={toc:f};function b(e){var a=e.components,n=(0,r.Z)(e,o);return(0,c.kt)("wrapper",(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"approvals"},"Approvals"),(0,c.kt)("h3",{id:"transfer-10-tokens-from-an-allowance-of-only-5"},"Transfer 10 Tokens from an Allowance of only 5"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://3.143.158.19:7777 \\\n--chain-name integration-test \\\n--secret-key ~/casper/ibm_demo/user_b/secret_key.pem \\\n--session-hash hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180 \\\n--session-entry-point "transfer_from" \\\n--session-arg "owner:key=\'account-hash-303c0f8208220fe9a4de40e1ada1d35fdd6c678877908f01fddb2a56502d67fd\'" \\\n--session-arg "recipient:key=\'account-hash-f32a2abc55316dc85a446a1c548674e03757974aaaf86e8b7d29947ae148eeca\'" \\\n--session-arg "amount:u256=\'10\'" \\\n--payment-amount "10000000000"\n')),(0,c.kt)("p",null,"Since we know that the allowance value is less than 10, we expect the deploy to fail."),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},(0,c.kt)("em",{parentName:"strong"},"Note:"))),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Here is an example of a ",(0,c.kt)("a",{parentName:"p",href:"https://integration.cspr.live/deploy/7a692917b91e1485f500966f3884bb0917006725505fec1ce3aed2a13ec692df"},"deploy failure due to overspending an allowance"))),(0,c.kt)("h3",{id:"additional-transfer_from-of-remainder-5-tokens"},"Additional transfer_from of Remainder 5 tokens"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://3.143.158.19:7777 \\\n--chain-name integration-test \\\n--secret-key ~/casper/ibm_demo/user_b/secret_key.pem \\\n--session-hash hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180 \\\n--session-entry-point "transfer_from" \\\n--session-arg "owner:key=\'account-hash-303c0f8208220fe9a4de40e1ada1d35fdd6c678877908f01fddb2a56502d67fd\'" \\\n--session-arg "recipient:key=\'account-hash-f32a2abc55316dc85a446a1c548674e03757974aaaf86e8b7d29947ae148eeca\'" \\\n--session-arg "amount:u256=\'5\'" \\\n--payment-amount "10000000000"\n')),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Invoking ",(0,c.kt)("inlineCode",{parentName:"strong"},"balance_of")," for user D")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://3.143.158.19:7777 \\\n--secret-key ~/casper/ibm_demo/user_a/secret_key.pem \\\n--session-package-name "erc20_test_call" \\\n--session-entry-point "check_balance_of" \\\n--session-arg "token_contract:account_hash=\'account-hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180\'" \\\n--session-arg "address:key=\'account-hash-f32a2abc55316dc85a446a1c548674e03757974aaaf86e8b7d29947ae148eeca\'" \\\n--chain-name integration-test \\\n--payment-amount 1000000000\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"\ncasper-client query-global-state -n http://3.143.158.19:7777 \\\n--key uref-56efe683287668bab985d472b877b018ad24a960aafadb48ebc5217737b45c85-007 \\\n--state-root-hash d068439dc1f62e330a15e008e5e926e777fd3599baed4ece508d482c50bd263b\n")),(0,c.kt)("img",{src:(0,s.Z)("/image/tutorials/erc-20/invokeBalanceOfuserD.png"),width:"800"}),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Invoking ",(0,c.kt)("inlineCode",{parentName:"strong"},"allowance")," for B\u2019s tokens of A")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://3.143.158.19:7777 \\\n--secret-key ~/casper/ibm_demo/user_a/secret_key.pem \\\n--session-package-name "erc20_test_call" \\\n--session-entry-point "check_allowance_of" \\\n--session-arg "token_contract:account_hash=\'account-hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180\'" \\\n--session-arg "owner:key=\'account-hash-303c0f8208220fe9a4de40e1ada1d35fdd6c678877908f01fddb2a56502d67fd\'" \\\n--session-arg "spender:key=\'account-hash-9f81014b9c7406c531ebf0477132283f4eb59143d7903a2fae54358b26cea44b\'"\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state -n http://3.143.158.19:7777 \\\n--key uref-56efe683287668bab985d472b877b018ad24a960aafadb48ebc5217737b45c85-007 \\\n--state-root-hash e863633b47b0689033744855739009b45a8654dadd4ed723f527fd38157a1d92\n")),(0,c.kt)("img",{src:(0,s.Z)("/image/tutorials/erc-20/invokeAllowanceBsTokenforA.png"),width:"800"}),(0,c.kt)("h3",{id:"approving-c-to-spend-10-of-bs-erc-20-tokens"},"Approving C to spend 10 of B\u2019s ERC-20 tokens"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://3.143.158.19:7777 \\\n--chain-name integration-test \\\n--secret-key ~/casper/ibm_demo/user_b/secret_key.pem \\\n--session-hash hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180 \\\n--session-entry-point "approve" \\\n--session-arg "spender:key=\'account-hash-89422a0f291a83496e644cf02d2e3f9d6cbc5f7c877b6ba9f4ddfab8a84c2670\'" \\\n--session-arg "amount:u256=\'10\'" \\\n--payment-amount "10000000000"\n')),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Invoking ",(0,c.kt)("inlineCode",{parentName:"strong"},"allowance")," to check C\u2019s allowance")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://3.143.158.19:7777 \\\n--secret-key ~/casper/ibm_demo/user_a/secret_key.pem \\\n--session-package-name "erc20_test_call" \\\n--session-entry-point "check_allowance_of" \\\n--session-arg "token_contract:account_hash=\'account-hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180\'" \\\n--session-arg "owner:key=\'account-hash-9f81014b9c7406c531ebf0477132283f4eb59143d7903a2fae54358b26cea44b\'" \\\n--session-arg "spender:key=\'account-hash-89422a0f291a83496e644cf02d2e3f9d6cbc5f7c877b6ba9f4ddfab8a84c2670\'" \\\n--chain-name integration-test \\\n--payment-amount 10000000000\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state -n http://3.143.158.19:7777 \\\n--key uref-56efe683287668bab985d472b877b018ad24a960aafadb48ebc5217737b45c85-007 \\\n--state-root-hash e9f069c2c03b18f86c15fec54286ac66ece368ac36d9d28024d0cd6cfc93fcf5\n")),(0,c.kt)("img",{src:(0,s.Z)("/image/tutorials/erc-20/invokingToCheckCsAllowance.png"),width:"800"}),(0,c.kt)("h2",{id:"transfer_from-cs-allowance-to-d"},"Transfer_from C\u2019s Allowance to D"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://3.143.158.19:7777 \\\n--chain-name integration-test \\\n--secret-key ~/casper/ibm_demo/user_c/secret_key.pem \\\n--session-hash hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180 \\\n--session-entry-point "transfer_from" \\\n--session-arg "owner:key=\'account-hash-9f81014b9c7406c531ebf0477132283f4eb59143d7903a2fae54358b26cea44b\'" \\\n--session-arg "recipient:key=\'account-hash-f32a2abc55316dc85a446a1c548674e03757974aaaf86e8b7d29947ae148eeca\'" \\\n--session-arg "amount:u256=\'5\'" \\\n--payment-amount "10000000000"\n')),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Invoking ",(0,c.kt)("inlineCode",{parentName:"strong"},"balance_of")," for user A")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://3.143.158.19:7777 \\\n--secret-key ~/casper/ibm_demo/user_a/secret_key.pem \\\n--session-package-name "erc20_test_call" \\\n--session-entry-point "check_balance_of" \\\n--session-arg "token_contract:account_hash=\'account-hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180\'" \\\n--session-arg "address:key=\'account-hash-303c0f8208220fe9a4de40e1ada1d35fdd6c678877908f01fddb2a56502d67fd\'" \\\n--chain-name integration-test \\\n--payment-amount 1000000000\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state -n http://3.143.158.19:7777 \\\n--key uref-56efe683287668bab985d472b877b018ad24a960aafadb48ebc5217737b45c85-007 \\\n--state-root-hash eb506808fe0749364163fea646c3f4ef35bb55363ea849da219badcd6ba3ee80\n")),(0,c.kt)("img",{src:(0,s.Z)("/image/tutorials/erc-20/invokingBalanceOfuserA.png"),width:"800"}),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Invoking ",(0,c.kt)("inlineCode",{parentName:"strong"},"balance_of")," for user B")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://3.143.158.19:7777 \\\n--secret-key ~/casper/ibm_demo/user_a/secret_key.pem \\\n--session-package-name "erc20_test_call" \\\n--session-entry-point "check_balance_of" \\\n--session-arg "token_contract:account_hash=\'account-hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180\'" \\\n--session-arg "address:key=\'account-hash-9f81014b9c7406c531ebf0477132283f4eb59143d7903a2fae54358b26cea44b\'" \\\n--chain-name integration-test \\\n--payment-amount 1000000000\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state -n http://3.143.158.19:7777 \\\n--key uref-56efe683287668bab985d472b877b018ad24a960aafadb48ebc5217737b45c85-007 \\\n--state-root-hash 0ce2c4991543758337a38d1d8f7fe56a42616b95ec93b17aec35a6f03b5e389c\n")),(0,c.kt)("img",{src:(0,s.Z)("/image/tutorials/erc-20/invokingBalanceOfuserB.png"),width:"800"}),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Invoking ",(0,c.kt)("inlineCode",{parentName:"strong"},"balance_of")," for user C")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://3.143.158.19:7777 \\\n--secret-key ~/casper/ibm_demo/user_a/secret_key.pem \\\n--session-package-name "erc20_test_call" \\\n--session-entry-point "check_balance_of" \\\n--session-arg "token_contract:account_hash=\'account-hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180\'" \\\n--session-arg "address:key=\'account-hash-89422a0f291a83496e644cf02d2e3f9d6cbc5f7c877b6ba9f4ddfab8a84c2670\'" \\\n--chain-name integration-test \\\n--payment-amount 1000000000\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state -n http://3.143.158.19:7777 \\\n--key uref-56efe683287668bab985d472b877b018ad24a960aafadb48ebc5217737b45c85-007 \\\n--state-root-hash 215c50c0e86950cb91bd8e1045315c1129bbaa02d4e49e00bed60130c4dfa69c\n")),(0,c.kt)("img",{src:(0,s.Z)("/image/tutorials/erc-20/invokingBalanceOfuserC1.png"),width:"800"}),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Invoking ",(0,c.kt)("inlineCode",{parentName:"strong"},"balance_of")," for user D")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://3.143.158.19:7777 \\\n--secret-key ~/casper/ibm_demo/user_a/secret_key.pem \\\n--session-package-name "erc20_test_call" \\\n--session-entry-point "check_balance_of" \\\n--session-arg "token_contract:account_hash=\'account-hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180\'" \\\n--session-arg "address:key=\'account-hash-f32a2abc55316dc85a446a1c548674e03757974aaaf86e8b7d29947ae148eeca\'" \\\n--chain-name integration-test \\\n--payment-amount 1000000000\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state -n http://3.143.158.19:7777 \\\n--key uref-56efe683287668bab985d472b877b018ad24a960aafadb48ebc5217737b45c85-007 \\\n--state-root-hash 4e8b0de303f834cb7c61bef148046e3de4446903bd15a395c9c37a6d96efe8c6\n")),(0,c.kt)("img",{src:(0,s.Z)("/image/tutorials/erc-20/invokingBalanceOfuserD.png"),width:"800"}),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Invoking ",(0,c.kt)("inlineCode",{parentName:"strong"},"allowance")," to check C\u2019s allowance")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://3.143.158.19:7777 \\\n--secret-key ~/casper/ibm_demo/user_a/secret_key.pem \\\n--session-package-name "erc20_test_call" \\\n--session-entry-point "check_allowance_of" \\\n--session-arg "token_contract:account_hash=\'account-hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180\'" \\\n--session-arg "owner:key=\'account-hash-9f81014b9c7406c531ebf0477132283f4eb59143d7903a2fae54358b26cea44b\'" \\\n--session-arg "spender:key=\'account-hash-89422a0f291a83496e644cf02d2e3f9d6cbc5f7c877b6ba9f4ddfab8a84c2670\'" \\\n--chain-name integration-test \\\n--payment-amount 10000000000\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state -n http://3.143.158.19:7777 \\\n--key uref-56efe683287668bab985d472b877b018ad24a960aafadb48ebc5217737b45c85-007 \\\n--state-root-hash d6d4d3e59017dfc21e2c9a8e235e2a2b3a446284a066a1f1f6704559fbb35a66\n")),(0,c.kt)("img",{src:(0,s.Z)("/image/tutorials/erc-20/invokingAlToCheckCsAllowance.png"),width:"800"}),(0,c.kt)("h3",{id:"failure-to-overspend-cs-allowance"},"Failure to Overspend C's Allowance","*","*"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://3.143.158.19:7777 \\\n--chain-name integration-test\n--secret-key ~/casper/ibm_demo/user_c/secret_key.pem \\\n--session-hash hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180 \\\n--session-entry-point "transfer_from" \\\n--session-arg "owner:key=\'account-hash-9f81014b9c7406c531ebf0477132283f4eb59143d7903a2fae54358b26cea44b\'" \\\n--session-arg "recipient:key=\'account-hash-f32a2abc55316dc85a446a1c548674e03757974aaaf86e8b7d29947ae148eeca\'" \\\n--session-arg "amount:u256=\'10\'" \\\n--payment-amount "10000000000"\n')),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},(0,c.kt)("em",{parentName:"strong"},"Note:"))),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Here is an example of a ",(0,c.kt)("a",{parentName:"p",href:"https://integration.cspr.live/deploy/db50ac05fe63561669b9d73c28b66fcb5a341048d5d13b1b2759b557396fd5d2"},"failure to overspend C's allowance"))),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Invoking ",(0,c.kt)("inlineCode",{parentName:"strong"},"allowance")," to check C\u2019s allowance")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client put-deploy -n http://3.143.158.19:7777 \\\n--secret-key ~/casper/ibm_demo/user_a/secret_key.pem \\\n--session-package-name "erc20_test_call" \\\n--session-entry-point "check_allowance_of" \\\n--session-arg "token_contract:account_hash=\'account-hash-b568f50a64acc8bbe43462ffe243849a88111060b228dacb8f08d42e26985180\'" \\\n--session-arg "owner:key=\'account-hash-9f81014b9c7406c531ebf0477132283f4eb59143d7903a2fae54358b26cea44b\'" \\\n--session-arg "spender:key=\'account-hash-89422a0f291a83496e644cf02d2e3f9d6cbc5f7c877b6ba9f4ddfab8a84c2670\'" \\\n--chain-name integration-test \\\n--payment-amount 10000000000\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state -n http://3.143.158.19:7777 \\\n--key uref-56efe683287668bab985d472b877b018ad24a960aafadb48ebc5217737b45c85-007 \\\n--state-root-hash be29754920f158f093c1daac780fba37bed06c751f256a43fcdc7b5b2775e487\n")),(0,c.kt)("img",{src:(0,s.Z)("/image/tutorials/erc-20/invokingToCheckCsAllowance3.png"),width:"800"}))}b.isMDXComponent=!0}}]);