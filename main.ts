import{mkdirSync,readdirSync,readFileSync,writeFileSync}from'node:fs';
const T="!2b%'+,0        *******&***&*** ***             AEEA!           &)              %%\"%";
function R(p,q){
const D=new Int32Array(256),C=new Int32Array(64),M=new Int32Array(256),U=new Uint8Array(65536);
let s=0,g=0,l=0,n=0,j=0,x=0;
const F=e=>[U.slice(0,l),e];
for(;;){
if(x==1e6)return F(10);
if(n<0||n>=p.length)return F(9);
const o=p[n],v=T.charCodeAt(o)-32;
if(!v)return F(5);
const k=v-1,h=k>>4,z=k>>2&3,w=k&3;
if(n+h>=p.length)return F(9);
x++;
const y=n+1+h;
if(s<z)return F(2);
if(s-z+w>256)return F(3);
n=y;
if(o==0)return F(0);
else if(o==1)D[s++]=(p[y-1]<<24)>>24;
else if(o==2)D[s++]=p[y-4]|p[y-3]<<8|p[y-2]<<16|p[y-1]<<24;
else if(o==3)s--;
else if(o==4)D[s]=D[s-1],s++;
else if(o==5)[D[s-1],D[s-2]]=[D[s-2],D[s-1]];
else if(o==6)D[s]=D[s-2],s++;
else if(o==7)[D[s-3],D[s-2],D[s-1]]=[D[s-2],D[s-1],D[s-3]];
else if(o==23)D[s-1]=-D[s-1]|0;
else if(o==27)D[s-1]=~D[s-1];
else if(o>=16&&o<=34){
const b=D[s-1],a=D[s-2];
if(o>18&&o<23&&!b)return F(4);
D[s-2]=o==16?(a+b)|0:o==17?(a-b)|0:o==18?Math.imul(a,b):o==19?(a/b)|0:o==20?a%b|0:o==21?(a>>>0)/(b>>>0)|0:o==22?(a>>>0)%(b>>>0)|0:o==24?a&b:o==25?a|b:o==26?a^b:o==28?a<<(b&31):o==29?a>>(b&31):o==30?(a>>>(b&31))|0:o==32?a==b?1:0:o==33?a<b?1:0:(a>>>0)<(b>>>0)?1:0;
s--;}
else if(o>=48&&o<=50){let t=o==48;if(o>48)t=(o==49)==(D[--s]==0);if(t)n=y+((p[y-2]|p[y-1]<<8)<<16>>16);}
else if(o==51){if(g==64)return F(7);C[g++]=y;n=p[y-2]|p[y-1]<<8;}
else if(o==52){if(!g)return F(8);n=C[--g];}
else if(o==64){const a=D[s-1];if(a<0||a>255)return F(6);D[s-1]=M[a];}
else if(o==65){const a=D[s-1];if(a<0||a>255)return F(6);const v=D[s-2];s-=2;M[a]=v;}
else if(o==80){const b=String(D[s-1]);if(l+b.length>65536)return F(11);s--;U.set(Buffer.from(b),l);l+=b.length;}
else if(o==81){if(l+1>65536)return F(11);U[l++]=D[--s]&255;}
else if(o==82)D[s++]=j<q.length?q[j++]:-1;
else return F(D[--s]&255);
}}
const I=process.env.MAKEFUN_INPUT_DIR??'/input',O=process.env.MAKEFUN_OUTPUT_DIR??'/output';
for(const d of readdirSync(I).sort()){
const r=R(readFileSync(I+'/'+d+'/program.bin'),readFileSync(I+'/'+d+'/input.bin'));
mkdirSync(O+'/'+d,{recursive:true});
writeFileSync(O+'/'+d+'/stdout.bin',r[0]);
writeFileSync(O+'/'+d+'/exit.txt',r[1]+'\n');
}
