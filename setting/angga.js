//jangan dihapus nanti error
//script by angga store
//contack me: +6287717682382
function scriptVersion(){return"7.0.0"}var main=function(){"use strict";var e;!function(e){e.paywall="paywall",e.ad="ad",e.blockFlow="block_flow",e.survey="survey",e.popup="popup",e.unlockProFeatures="unlock_pro_features"}(e||(e={}));const t={__type:e.blockFlow},r=()=>{};var _,a,i,n;function o(r,a=undefined,o=!0,s=(()=>{})){return{__type:e.ad,hook:r,adType:i.reward,onFinish:r=>{switch(r){case n.dismissed:case n.error:return o?t:s();case n.watched:return null==a?s():function(t,r,a=(()=>{})){let i=r.map((e=>{let t=168;return e.feature_id===_.watermarkRemoval&&(t=24),{project_id:e.project_id,feature_id:e.feature_id,duration_hours:t}}));return{__type:e.unlockProFeatures,unlockedFeatures:i,onFinish:e=>a()}}(0,a,s)}}}}function s(t){return{__type:e.ad,hook:t,adType:i.interstitial,onFinish:e=>{}}}!function(e){e.advancedEasing="advancedEasing",e.layerParenting="layerParenting",e.premiumEffect="premiumEffect/",e.cameraObject="cameraObject",e.watermarkRemoval="watermarkRemoval"}(_||(_={})),function(e){e.success="unlock_pro_features/success"}(a||(a={})),function(e){e.reward="reward",e.interstitial="interstitial"}(i||(i={})),function(e){e.watched="ad/watched",e.dismissed="ad/dismissed",e.error="ad/error"}(n||(n={}));const d={interstitial_ads_first_experiment:"interstitial_ads_first_experiment",price_decrease_over_sessions:"price_decrease_over_sessions",yearly_subscriptions:"yearly_subscriptions"};const p={second:1e3,minute:6e4,hour:36e5,day:864e5};function c(e,t,r,_){var a,i,n,o;const c=null!==(a=e.hours_from_install_no_ads)&&void 0!==a?a:0,l=null!==(i=e.interstitial_ads_frequency)&&void 0!==i?i:-1,m=(null!==(n=e.seconds_between_interstitial_ads)&&void 0!==n?n:-1)*p.second,f=null!==(o=e.interstitial_hook_counter_threshold)&&void 0!==o?o:{};if(l<0||m<0)return;const h=f[_];if(function(e,t,r){if(null==t)return!1;const _=r-t;return _<p.hour*e}(c,t,r))return;const v=function(e,t){var r,_;const a=Crisper.storage;a.setScope(d.interstitial_ads_first_experiment);var i=null!==(r=a.intForKey(u.triggers_count))&&void 0!==r?r:0;if(null==t)i+=1;else{const r=e+"_count";var n=null!==(_=a.intForKey(r))&&void 0!==_?_:0;(n+=1)>=t&&(i+=1,n=0),a.setIntForKey(n,r)}return a.setIntForKey(i,u.triggers_count),i}(_,h),y=function(e){var t;Crisper.storage.setScope(d.interstitial_ads_first_experiment);const r=null!==(t=Crisper.storage.intForKey(u.last_show_timestamp))&&void 0!==t?t:0;return e-r}(r),w=function(e,t,r,_){const a=e>=t,i=r>_;return a&&i}(v,l,y,m);return w?(function(e){Crisper.storage.setScope(d.interstitial_ads_first_experiment),Crisper.storage.setIntForKey(0,u.triggers_count),Crisper.storage.setIntForKey(e,u.last_show_timestamp)}(r),s(_)):void 0}const u={triggers_count:"triggers_count",last_show_timestamp:"last_show_timestamp"};var l,m,f,h,v;!function(e){e.android="android",e.iOS="ios",e.unknown="unknown"}(l||(l={})),function(e){e.on_intro_flow_completed="on_intro_flow_completed",e.did_tap_create_project="did_tap_create_project",e.did_tap_main_editor_present_export_dialog="did_tap_main_editor_present_export_dialog",e.did_tap_project_list_export="did_tap_project_list_export/",e.did_tap_main_editor_export="did_tap_main_editor_export/",e.did_tap_res_alert_on_create_membership_options="did_tap_res_alert_on_create/membership_options",e.did_tap_res_alert_on_export_membership_options="did_tap_res_alert_on_export/membership_options",e.did_tap_export_project_membership_options="did_tap_export_project_membership_options",e.did_tap_project_package_import_alert_membership_options="did_tap_project_package_import/alert/membership_options",e.did_tap_watermark_delete_alert_membership_options="did_tap_watermark/delete/membership_options",e.did_tap_watermark_delete_alert_watch_ad="did_tap_watermark/delete/watch_ad",e.did_tap_watermark_delete_alert_try="did_tap_watermark/delete/try",e.did_tap_premium_effect_alert_try="did_tap_premium_effect/try/",e.did_tap_premium_effect_alert_membership_options="did_tap_premium_effect/membership_options/",e.did_tap_premium_effect_alert_watch_ad="did_tap_premium_effect/watch_ad/",e.did_tap_advanced_easing_try="did_tap_advanced_easing/try",e.did_tap_advanced_easing_membership_options="did_tap_advanced_easing/membership_options",e.did_tap_advanced_easing_watch_ad="did_tap_advanced_easing/watch_ad",e.did_tap_layer_parenting_try="did_tap_layer_parenting/try",e.did_tap_layer_parenting_membership_options="did_tap_layer_parenting/membership_options",e.did_tap_layer_parenting_watch_ad="did_tap_layer_parenting/watch_ad",e.did_tap_camera_object_try="did_tap_camera_object/try",e.did_tap_camera_object_membership_options="did_tap_camera_object/membership_options",e.did_tap_camera_object_watch_ad="did_tap_camera_object/watch_ad",e.did_tap_account_membership_options="did_tap_account/membership_options",e.did_tap_effects_panel_menu_copy_premium_effects="did_tap_effects_panel/menu/copy_premium_effects",e.did_tap_home_screen_tab_home="did_tap_home_screen_tab/home",e.did_tap_home_screen_tab_tutorials="did_tap_home_screen_tab/tutorials",e.did_tap_home_screen_tab_projects="did_tap_home_screen_tab/projects",e.did_tap_home_screen_tab_templates="did_tap_home_screen_tab/templates",e.did_tap_home_screen_plus_button="did_tap_home_screen_plus_button",e.did_tap_open_project="did_tap_open_project",e.did_tap_main_editor_plus_button="did_tap_main_editor_plus_button",e.did_tap_effect_panel_add_button="did_tap_effect_panel_add_button",e.did_tap_add_keyframe_button="did_tap_add_keyframe_button",e.on_export_completed="on_export_completed",e.did_tap_premium_effect="did_tap_premium_effect/",e.did_tap_advanced_easing="did_tap_advanced_easing",e.did_tap_watermark_delete="did_tap_watermark/delete",e.did_tap_layer_parenting="did_tap_layer_parenting",e.did_tap_camera_object="did_tap_camera_object",e.did_tap_share_page_close="did_tap_share_page_close"}(m||(m={})),function(e){e.project_package="project_package",e.xml="xml",e.video="video",e.image_sequence="image_sequence",e.png="png",e.gif="gif",e.template="template",e.preset="preset",e.cloud_backup="cloud_backup"}(f||(f={}));class y{constructor(t,_,a,i=r){this.__type=e.survey,this.hook=t,this.questions=_,this.localization=a,this.onFinish=i}}function w(e,t){let r=e.length;for(let n=0;n<r;n++){let r=e[n];if(_=t,a=r.from,i=r.until,null!=_&&(null==a&&null==i||(null==a?_<=i:null==i?_>=a:_>=a&&_<=i)))return r.products}var _,a,i;return null}function b(){var e;return Crisper.storage.setScope(d.price_decrease_over_sessions),null!==(e=Crisper.storage.intForKey(g.time_sensitive_sessions_count))&&void 0!==e?e:0}!function(e){e.dismissed="paywall/dismissed",e.purchased="paywall/purchased",e.error="paywall/error"}(h||(h={})),function(e){e.checkbox="checkbox",e.checkbox_comparison="checkbox_comparison",e.checkbox_options="checkbox_options"}(v||(v={}));const g={time_sensitive_sessions_count:"time_sensitive_sessions_count",last_decrease_timestamp:"last_decrease_timestamp"};function k(r,_,a,i=l.unknown,n=!1,s=(()=>{}),d=(()=>{})){var p,c,u;const f=b();var y={normal:"alightcreative.motion.1w_t10_v2",free_trial:"alightcreative.motion.1w_t10_1w_v2"};i===l.android&&(y={normal:"alightcreative.motion.1w_crisper_aud",free_trial:"alightcreative.motion.1w_1w_crisper_aud"});const g=null!==(p=r.yearly_paywall_type)&&void 0!==p?p:v.checkbox;var k=null!==(c=r.yearly_paywall_weekly_price)&&void 0!==c?c:y;const j=r.yearly_paywall_yearly_price,x=null!==(u=r.price_decrease_pattern)&&void 0!==u?u:[];x.length>0&&(k=w(x,f));const F=function(e){if(e===v.checkbox_comparison)return 1;return 0}(g);var W=function(e,t,r,_,a=(()=>{})){var i,n=null!==(i=e.is_rewarded_ad_paywall_enabled)&&void 0!==i&&i,s=_==v.checkbox_comparison||_==v.checkbox_options,d=t==m.on_intro_flow_completed;return n&&r&&s&&d?o(t,void 0,!1,a):void 0}(r,a,n,g,s),A=null!=W?()=>W:()=>s();return function(r,_,a,i,n,o,s,d,p=!1,c,u=(()=>{})){return{__type:e.paywall,hook:r,paywallType:_,normalProductId:a,freeTrialProductId:i,secondNormalProductId:n,secondFreeTrialProductId:o,defaultSelectionIndex:s,isDismissedWithRewardedAd:Number(p),onFinish:e=>{switch(e){case h.purchased:return u();case h.dismissed:case h.error:return d?t:c()}}}}(a,g,k.normal,k.free_trial,null==j?void 0:j.normal,null==j?void 0:j.free_trial,F,_,null!=W,A,d)}var j,x,F,W,A,z,I,T,C,K;function P(e,t,r,_){var a,i,n;let o=null!==(a=e.user_intent_survey_descriptor)&&void 0!==a?a:[],s=null!==(i=e.user_intent_survey_placement)&&void 0!==i?i:j.before_paywall,d=null!==(n=e.user_intent_survey_localization)&&void 0!==n?n:{};if(0==o.length||!_)return k(e,!1,t,r,_);o.forEach((e=>{q(e.answers)}));let p=new y(t,o,d);switch(s){case j.before_paywall:let a=k(e,!1,t,r,_);return p.onFinish=e=>a,p;case j.after_paywall:return k(e,!1,t,r,_,(()=>p))}}function q(e){e.forEach((e=>{let t=e;t.sub_answers&&q(t.sub_answers)})),e.sort((()=>Math.random()-.5))}function E(e,t){return{type:A.title,key:e,default:t}}function S(e,t){return{type:A.description,key:e,default:t}}function R(e){return{type:A.image,resource:e}}function O(e,t,r,_){return{type:e,id:t,key:r,default:_}}function D(e,t,r,_,a){return{type:I.tagged,id:e,key:t,default:r,tagKey:_,tagDefault:a}}!function(e){e.before_paywall="survey/before_paywall",e.after_paywall="survey/after_paywall"}(j||(j={})),function(e){e.skipped="survey/skipped",e.completed="survey/completed"}(x||(x={})),function(e){e.cool_feature="coolFeature",e.error="error",e.explore="explore",e.learning_things="learningThings",e.lot_of_things="lotOfThings",e.movement="movement",e.pro_feature="proFeature",e.support="support"}(F||(F={})),function(e){e.dismissed="popup/dismissed",e.buttonTapped="popup/buttonTapped"}(W||(W={})),function(e){e.image="image",e.title="title",e.description="description"}(A||(A={})),function(e){e.primary="primary",e.secondary="secondary",e.tertiary="tertiary",e.quaternary="quaternary"}(z||(z={})),function(e){e.tagged="tagged"}(I||(I={}));class N{constructor(r,_,a,i,n,o,s){this.__type=e.popup,this.hook=r,this.isDismissible=_,this.elements=a,this.buttons=i,this.localization=n,this.onFinish=e=>{if(e===W.dismissed)return null!=s?s():t;if(e.startsWith(W.buttonTapped)){let t=e.split("/")[2];if(null==t)return;return o(t)}}}}function U(e,t,r){const _=t().current_project;return null!=_&&null!=r?o(e,[{project_id:_,feature_id:r}]):o(e)}function M(e,t,r,_,a,i,n){var o,s;let d=null!==(o=e.pro_feature_monetization_localization)&&void 0!==o?o:{},p=null!==(s=e.monetization_alert_version)&&void 0!==s?s:K.version1,c=[R("proFeature"),E("pro_feature_monetization_title","Want to unlock this feature?")];switch(p){case K.version1:c.push(S("pro_feature_monetization_description","Try the full Pro Plan for free, or watch an ad to unlock just this pro feature."));break;case K.version2:c.push(S("pro_feature_monetization_description_v2","Unlock all the pro features at once, or watch an ad to get just this pro feature."))}let u=[];switch(p){case K.version1:u.push(O(z.primary,C.unlockAll,"pro_feature_monetization_button_unlock_all","Start Free Trial"));break;case K.version2:u.push(D(C.unlockAll,"pro_feature_monetization_button_unlock_all_v2","Unlock All Pro Features","pro_feature_monetization_button_unlock_all_badge","Try Free"))}var l;_?u.push(O(z.secondary,C.watchAd,"pro_feature_monetization_button_watch_an_ad","Watch an Ad")):u.push(O(z.quaternary,C.watchAd,"pro_feature_monetization_button_watch_an_ad","Watch an Ad")),_&&u.push(O(z.quaternary,C.tryItFirst,"pro_feature_monetization_button_try_it_first","Try it first"));return l=new N(t,!0,c,u,d,(_=>{switch(_){case C.unlockAll:return k(e,!1,t,i,n,(()=>l),(()=>{}));case C.watchAd:return U(t,a,r);case C.tryItFirst:default:return}}))}function V(e,t,r,_){var a;const i=null!==(a=_().is_first_session)&&void 0!==a&&a;if(e===m.on_intro_flow_completed)return function(e,t,r){var _,a;let i=null!==(_=e.user_intent_survey_descriptor)&&void 0!==_?_:[],n=null!==(a=e.user_intent_survey_localization)&&void 0!==a?a:{};if(0!=i.length&&r)return new y(t,i,n)}(t,e,i)}function B(e,t,r,a){var i;const n=Date.now(),u=a().install_date_timestamp,h=null!==(i=a().is_first_session)&&void 0!==i&&i;if(e===m.on_intro_flow_completed)return function(e,t){var r,_;const a=null!==(r=e.price_decrease_pattern)&&void 0!==r?r:[];if(a.length<2)return;Crisper.storage.setScope(d.price_decrease_over_sessions);const i=b(),n=i+1;if(w(a,i)===w(a,n))return void Crisper.storage.setIntForKey(n,g.time_sensitive_sessions_count);t-(null!==(_=Crisper.storage.intForKey(g.last_decrease_timestamp))&&void 0!==_?_:0)<24*p.hour||(Crisper.storage.setIntForKey(n,g.time_sensitive_sessions_count),Crisper.storage.setIntForKey(t,g.last_decrease_timestamp))}(t,n),P(t,e,r,h);if(e===m.did_tap_create_project){return k(t,!1,e,r,!1,(function(){return c(t,u,n,e)}))}if(e===m.did_tap_main_editor_present_export_dialog)return function(e,t,r,a,i){var n;if(!e.watermark_v2_enabled)return;let o=null!==(n=e.watermark_v2_localization)&&void 0!==n?n:{},s=e.new_watermark_design?"newWatermark":"oldWatermark",d=[E("Watermark_popup_title","Want to remove the watermark before exporting?"),R(s)],p=[];var c;return p.push(D(T.removeWatermark,"Watermark_popup_CTA_sub","Remove Watermark","Watermark_popup_badge","Try Free")),a===l.android&&!0===e.watermark_v2_popup_with_ads&&p.push(O(z.secondary,T.watchAd,"ads_remove_watermark_watch_an_ad","Watch an ad to remove")),p.push(O(z.quaternary,T.keepWatermark,"Watermark_popup_CTA_continue","Continue with watermark")),c=new N(t,!1,d,p,o,(n=>{switch(n){case T.removeWatermark:return k(e,!1,t,a,i,(()=>c),(()=>{}));case T.watchAd:return U(t,r,_.watermarkRemoval);case T.removeWatermark:default:return}}))}(t,e,a,r,h);if(e.startsWith(m.did_tap_project_list_export)||e.startsWith(m.did_tap_main_editor_export)){if(e.endsWith(f.project_package)||e.endsWith(f.cloud_backup))return k(t,!0,e,r);if(e.endsWith(f.template)||e.endsWith(f.preset))return;return o(e)}if(e===m.did_tap_res_alert_on_create_membership_options||e===m.did_tap_res_alert_on_export_membership_options)return k(t,!1,e);if(e===m.did_tap_export_project_membership_options||e===m.did_tap_project_package_import_alert_membership_options)return k(t,!1,e,r);if(e===m.did_tap_watermark_delete)return r===l.android&&"watermark_premium_feature_export"===t.ads_experience?M(t,e,_.watermarkRemoval,!1,a,r,h):k(t,!0,e,r);if(e===m.did_tap_watermark_delete_alert_membership_options)return k(t,!0,e,r);if(e!==m.did_tap_advanced_easing_try&&e!==m.did_tap_layer_parenting_try&&e!==m.did_tap_camera_object_try&&e!==m.did_tap_watermark_delete_alert_try){if(e.startsWith(m.did_tap_premium_effect_alert_watch_ad)||e===m.did_tap_advanced_easing_watch_ad||e===m.did_tap_watermark_delete_alert_watch_ad||e===m.did_tap_layer_parenting_watch_ad||e===m.did_tap_camera_object_watch_ad)return o(e);if(e.startsWith(m.did_tap_premium_effect_alert_membership_options)||e===m.did_tap_advanced_easing_membership_options||e===m.did_tap_account_membership_options||e===m.did_tap_effects_panel_menu_copy_premium_effects)return k(t,!0,e,r);if(e===m.did_tap_layer_parenting_membership_options||e===m.did_tap_camera_object_membership_options)return k(t,!0,e,r);if(e.startsWith(m.did_tap_premium_effect_alert_try)||e===m.did_tap_home_screen_tab_home||e===m.did_tap_home_screen_tab_projects||e===m.did_tap_home_screen_tab_templates||e===m.did_tap_home_screen_plus_button||e===m.did_tap_open_project)return c(t,u,n,e);if(e.startsWith(m.did_tap_premium_effect)){const i=function(e,t){const r=e.split("/");return t<r.length?r[t]:void 0}(e,1);if(null==i)return;return M(t,e,_.premiumEffect+i,!0,a,r,h)}return e===m.did_tap_advanced_easing?M(t,e,_.advancedEasing,!0,a,r,h):e===m.did_tap_layer_parenting?M(t,e,_.layerParenting,!0,a,r,h):e===m.did_tap_camera_object?M(t,e,_.cameraObject,!0,a,r,h):e===m.did_tap_main_editor_plus_button||e===m.did_tap_effect_panel_add_button||e===m.did_tap_add_keyframe_button?c(t,u,n,e):e===m.did_tap_share_page_close?s(e):void 0}}!function(e){e.removeWatermark="button_remove_watermark",e.keepWatermark="button_keep_watermark",e.watchAd="button_watch_an_ad"}(T||(T={})),function(e){e.unlockAll="button_unlock_all",e.tryItFirst="button_try_it_first",e.watchAd="button_watch_an_ad"}(C||(C={})),function(e){e.version1="popup_v1",e.version2="popup_v2"}(K||(K={}));return e=>{var t,r;const _=e.getAppInfo(),a=_.active_benefits,i=_.settings;if(null!=a&&null!=i)return a.length>0?V(e.hook,i,null!==(t=_.platform)&&void 0!==t||l.unknown,n):B(e.hook,i,null!==(r=_.platform)&&void 0!==r?r:l.unknown,n);function n(){return e.getAppInfo()}}}();
