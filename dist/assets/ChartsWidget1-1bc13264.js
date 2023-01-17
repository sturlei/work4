import{j as a,a as e,K as m,D as o,r as d,I as h,J as f,M as n}from"./index-2e199910.js";import{A as g}from"./apexcharts.common-f792fe87.js";const u=({className:i})=>a("div",{className:`card ${i}`,children:[a("div",{className:"card-header align-items-center border-0 mt-4",children:[a("h3",{className:"card-title align-items-start flex-column",children:[e("span",{className:"fw-bold mb-2 text-dark",children:"Activities"}),e("span",{className:"text-muted fw-semibold fs-7",children:"890,344 Sales"})]}),a("div",{className:"card-toolbar",children:[e("button",{type:"button",className:"btn btn-sm btn-icon btn-color-primary btn-active-light-primary","data-kt-menu-trigger":"click","data-kt-menu-placement":"bottom-end","data-kt-menu-flip":"top-end",children:e(m,{path:"/media/icons/duotune/general/gen024.svg",className:"svg-icon-2"})}),e(o,{})]})]}),e("div",{className:"card-body pt-5",children:a("div",{className:"timeline-label",children:[a("div",{className:"timeline-item",children:[e("div",{className:"timeline-label fw-bold text-gray-800 fs-6",children:"08:42"}),e("div",{className:"timeline-badge",children:e("i",{className:"fa fa-genderless text-warning fs-1"})}),e("div",{className:"fw-mormal timeline-content text-muted ps-3",children:"Outlines keep you honest. And keep structure"})]}),a("div",{className:"timeline-item",children:[e("div",{className:"timeline-label fw-bold text-gray-800 fs-6",children:"10:00"}),e("div",{className:"timeline-badge",children:e("i",{className:"fa fa-genderless text-success fs-1"})}),e("div",{className:"timeline-content d-flex",children:e("span",{className:"fw-bold text-gray-800 ps-3",children:"AEOL meeting"})})]}),a("div",{className:"timeline-item",children:[e("div",{className:"timeline-label fw-bold text-gray-800 fs-6",children:"14:37"}),e("div",{className:"timeline-badge",children:e("i",{className:"fa fa-genderless text-danger fs-1"})}),a("div",{className:"timeline-content fw-bold text-gray-800 ps-3",children:["Make deposit",e("a",{href:"#",className:"text-primary",children:"USD 700"}),". to ESL"]})]}),a("div",{className:"timeline-item",children:[e("div",{className:"timeline-label fw-bold text-gray-800 fs-6",children:"16:50"}),e("div",{className:"timeline-badge",children:e("i",{className:"fa fa-genderless text-primary fs-1"})}),e("div",{className:"timeline-content fw-mormal text-muted ps-3",children:"Indulging in poorly driving and keep structure keep great"})]}),a("div",{className:"timeline-item",children:[e("div",{className:"timeline-label fw-bold text-gray-800 fs-6",children:"21:03"}),e("div",{className:"timeline-badge",children:e("i",{className:"fa fa-genderless text-danger fs-1"})}),a("div",{className:"timeline-content fw-semibold text-gray-800 ps-3",children:["New order placed",e("a",{href:"#",className:"text-primary",children:"#XF-2356"}),"."]})]}),a("div",{className:"timeline-item",children:[e("div",{className:"timeline-label fw-bold text-gray-800 fs-6",children:"16:50"}),e("div",{className:"timeline-badge",children:e("i",{className:"fa fa-genderless text-primary fs-1"})}),e("div",{className:"timeline-content fw-mormal text-muted ps-3",children:"Indulging in poorly driving and keep structure keep great"})]}),a("div",{className:"timeline-item",children:[e("div",{className:"timeline-label fw-bold text-gray-800 fs-6",children:"21:03"}),e("div",{className:"timeline-badge",children:e("i",{className:"fa fa-genderless text-danger fs-1"})}),a("div",{className:"timeline-content fw-semibold text-gray-800 ps-3",children:["New order placed",e("a",{href:"#",className:"text-primary",children:"#XF-2356"}),"."]})]}),a("div",{className:"timeline-item",children:[e("div",{className:"timeline-label fw-bold text-gray-800 fs-6",children:"10:30"}),e("div",{className:"timeline-badge",children:e("i",{className:"fa fa-genderless text-success fs-1"})}),e("div",{className:"timeline-content fw-mormal text-muted ps-3",children:"Finance KPI Mobile app launch preparion meeting"})]})]})})]}),v=({className:i})=>{const t=d.useRef(null),{mode:r}=h();d.useEffect(()=>{const s=c();return()=>{s&&s.destroy()}},[t,r]);const c=()=>{if(!t.current)return;const s=parseInt(f(t.current,"height")),l=new g(t.current,b(s));return l&&l.render(),l};return a("div",{className:`card ${i}`,children:[a("div",{className:"card-header border-0 pt-5",children:[a("h3",{className:"card-title align-items-start flex-column",children:[e("span",{className:"card-label fw-bold fs-3 mb-1",children:"Recent Statistics"}),e("span",{className:"text-muted fw-semibold fs-7",children:"More than 400 new members"})]}),a("div",{className:"card-toolbar",children:[e("button",{type:"button",className:"btn btn-sm btn-icon btn-color-primary btn-active-light-primary","data-kt-menu-trigger":"click","data-kt-menu-placement":"bottom-end","data-kt-menu-flip":"top-end",children:e(m,{path:"/media/icons/duotune/general/gen024.svg",className:"svg-icon-2"})}),e(o,{})]})]}),e("div",{className:"card-body",children:e("div",{ref:t,id:"kt_charts_widget_1_chart",style:{height:"350px"}})})]})};function b(i){const t=n("--kt-gray-500"),r=n("--kt-gray-200"),c=n("--kt-primary"),s=n("--kt-gray-300");return{series:[{name:"Net Profit",data:[44,55,57,56,61,58]},{name:"Revenue",data:[76,85,101,98,87,105]}],chart:{fontFamily:"inherit",type:"bar",height:i,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"30%",borderRadius:5}},legend:{show:!1},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:t,fontSize:"12px"}}},yaxis:{labels:{style:{colors:t,fontSize:"12px"}}},fill:{opacity:1},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},tooltip:{style:{fontSize:"12px"},y:{formatter:function(l){return"$"+l+" thousands"}}},colors:[c,s],grid:{borderColor:r,strokeDashArray:4,yaxis:{lines:{show:!0}}}}}export{v as C,u as L};
