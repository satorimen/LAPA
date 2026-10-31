import type { Locale, Messages } from '@/locales/messages';
export type Status='received'|'accepted'|'in_progress'|'awaiting_client_confirmation'|'completed'|'rejected'|'cancelled';
export type Address={id:string;label:string;city:string;street:string;house:string;apartment:string};
export type ChatMessage={role:'user'|'assistant';text:string};
export type Draft={text:string;photos:string[];messages:ChatMessage[];summary:string;work:string;details:string;urgent:boolean;date:string;window:'morning'|'day'|'evening';address:Address;comment:string;step:'home'|'chat'|'preview';editingId?:string};
export type Request=Omit<Draft,'step'|'editingId'> & {id:string;number:number;status:Status;createdAt:string;updatedAt:string;phone:string;note:string;reason:string;demo?:boolean};
export type Preferences={accepting:boolean;urgentOutside:boolean;repeated:boolean;ordinary:boolean;days:number[];from:string;to:string};
export type AppData={locale:Locale;phone:string;name:string;addresses:Address[];draft:Draft|null;requests:Request[];preferences:Preferences};
export const emptyAddress=():Address=>({id:crypto.randomUUID(),label:'',city:'',street:'',house:'',apartment:''});
export const blankDraft=():Draft=>({text:'',photos:[],messages:[],summary:'',work:'',details:'',urgent:false,date:'',window:'morning',address:emptyAddress(),comment:'',step:'home'});
export const initialData:AppData={locale:'he',phone:'',name:'',addresses:[],draft:null,requests:[],preferences:{accepting:true,urgentOutside:true,repeated:true,ordinary:true,days:[0,1,2,3,4],from:'07:00',to:'21:00'}};
export function normalizePhone(value:string):string|null{let n=value.replace(/[\s().-]/g,'');if(n.startsWith('00972'))n='+'+n.slice(2);if(n.startsWith('+972'))n='0'+n.slice(4);if(/^05\d{8}$/.test(n)||/^0[23489]\d{7}$/.test(n)||/^07\d{8}$/.test(n))return '+972'+n.slice(1);return null;}
export const isEditable=(s:Status)=>s==='received'||s==='accepted';
export const isActive=(s:Status)=>['received','accepted','in_progress','awaiting_client_confirmation'].includes(s);
const transitions:Record<Status,Status[]>={received:['accepted','rejected','cancelled'],accepted:['in_progress','cancelled'],in_progress:['awaiting_client_confirmation'],awaiting_client_confirmation:['completed'],completed:[],rejected:['received'],cancelled:[]};
export const canTransition=(from:Status,to:Status)=>transitions[from].includes(to);
export function localDate(date=new Date()){return new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Jerusalem',year:'numeric',month:'2-digit',day:'2-digit'}).format(date);}
export function isFutureSlot(date:string,window:Draft['window'],now=new Date()){if(!date)return false;const today=localDate(now);if(date>today)return true;if(date<today)return false;const hour=Number(new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Jerusalem',hour:'2-digit',hour12:false}).format(now));return {morning:7,day:12,evening:18}[window]>hour;}
export function detectLanguage(text:string,fallback:Locale):Locale {if(/[а-яё]/i.test(text))return 'ru';if(/[\u0590-\u05ff]/.test(text))return 'he';if(/[a-z]/i.test(text))return 'en';return fallback;}
export interface AiProvider {question(text:string,t:Messages):string;work(text:string,t:Messages):string}
// Deliberately local, deterministic prototype adapter. No remote AI or image understanding.
export class DemoIntakeProvider implements AiProvider {
 kind(text:string){if(/теч|вода|кран|унитаз|leak|water|tap|toilet|נזיל|מים|ברז|אסלה/i.test(text))return 'leak';if(/розет|элект|искр|пробк|electric|socket|spark|שקע|חשמל/i.test(text))return 'electric';if(/повес|установ|креп|телевиз|install|mount|hang|לתלות|התקנ/i.test(text))return 'install';return 'general';}
 question(text:string,t:Messages){return {leak:t.leakQuestion,electric:t.electricQuestion,install:t.installQuestion,general:t.generalQuestion}[this.kind(text)];}
 work(text:string,t:Messages){return {leak:t.workLeak,electric:t.workElectric,install:t.workInstall,general:t.workGeneral}[this.kind(text)];}
}
export function sampleRequests(locale:Locale):Request[]{const titles={ru:['Течёт кран на кухне','Нужно повесить телевизор','Не работает розетка'],en:['Kitchen tap is leaking','Mount a television','Socket is not working'],he:['הברז במטבח מטפטף','צריך לתלות טלוויזיה','השקע לא עובד']}[locale];return titles.map((text,i)=>({...blankDraft(),id:crypto.randomUUID(),number:4281+i,status:i===1?'accepted':'received',text,summary:text,work:'',details:'',urgent:i===0,date:localDate(),window:i===1?'day':'morning',address:{...emptyAddress(),city:'חיפה',street:'הרצל',house:String(12+i)},createdAt:new Date(Date.now()-i*3600000).toISOString(),updatedAt:new Date().toISOString(),phone:'+972501234567',note:'',reason:'',demo:true}));}
