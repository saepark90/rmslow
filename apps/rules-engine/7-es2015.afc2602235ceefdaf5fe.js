(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{RBqR:function(t,e,i){"use strict";i.r(e),i.d(e,"TestRuleComponent",(function(){return E}));var n=i("tK6w"),o=i("EM62"),r=i("nIj0"),s=i("qFEQ"),c=i("2kYt"),a=i("PBFl"),u=i("Meci"),d=i("bFHC"),l=i("zmEM"),m=i("29Wa"),b=i("Cd2c"),h=i("FlRo");function f(t,e){if(1&t){const t=o.Xb();o.Wb(0,"div",7),o.Wb(1,"mat-card",8),o.Wb(2,"div",9),o.Wb(3,"button",10),o.ec("click",(function(){o.vc(t);const i=e.index;return o.ic().removeGuide(i)})),o.Wb(4,"mat-icon"),o.Ec(5,"remove"),o.Vb(),o.Vb(),o.Wb(6,"button",11),o.ec("click",(function(){o.vc(t);const i=e.index;return o.ic().addGuide(i)})),o.Wb(7,"mat-icon"),o.Ec(8,"add"),o.Vb(),o.Vb(),o.Vb(),o.Rb(9,"mat-divider",12),o.Wb(10,"div",13),o.Wb(11,"mat-form-field",14),o.Wb(12,"mat-label"),o.Ec(13,"GUIDE"),o.Vb(),o.Rb(14,"input",15),o.Vb(),o.Vb(),o.Vb(),o.Vb()}if(2&t){const t=e.index;o.Eb(10),o.nc("formGroupName",t)}}function g(t,e){1&t&&(o.Wb(0,"th",24),o.Ec(1,"GUIDE"),o.Vb())}function p(t,e){if(1&t&&(o.Wb(0,"td",25),o.Ec(1),o.Vb()),2&t){const t=e.$implicit;o.Eb(1),o.Fc(t.guide)}}function w(t,e){1&t&&(o.Wb(0,"th",24),o.Ec(1,"Status"),o.Vb())}function C(t,e){if(1&t&&(o.Wb(0,"td",25),o.Ec(1),o.Vb()),2&t){const t=e.$implicit;o.Eb(1),o.Fc(t.status)}}function v(t,e){1&t&&o.Rb(0,"tr",26)}function V(t,e){if(1&t){const t=o.Xb();o.Wb(0,"tr",27),o.ec("click",(function(){o.vc(t);const i=e.$implicit;return o.ic(2).getRecord(i)})),o.Vb()}}function M(t,e){if(1&t&&(o.Wb(0,"div",16),o.Wb(1,"h2"),o.Ec(2,"Results"),o.Vb(),o.Wb(3,"table",17),o.Ub(4,18),o.Cc(5,g,2,0,"th",19),o.Cc(6,p,2,1,"td",20),o.Tb(),o.Ub(7,21),o.Cc(8,w,2,0,"th",19),o.Cc(9,C,2,1,"td",20),o.Tb(),o.Cc(10,v,1,0,"tr",22),o.Cc(11,V,1,0,"tr",23),o.Vb(),o.Vb()),2&t){const t=o.ic();o.Eb(3),o.nc("dataSource",t.dataSource),o.Eb(7),o.nc("matHeaderRowDef",t.displayedColumns)("matHeaderRowDefSticky",!0),o.Eb(1),o.nc("matRowDefColumns",t.displayedColumns)}}function x(t,e){if(1&t&&(o.Wb(0,"div"),o.Wb(1,"h2"),o.Ec(2,"Message JSON"),o.Vb(),o.Wb(3,"pre"),o.Ec(4),o.jc(5,"json"),o.Vb(),o.Vb()),2&t){const t=o.ic();o.Eb(4),o.Fc(o.kc(5,1,t.rulesMessage))}}let E=(()=>{class t{constructor(t){this.formBuilder=t,this.rulesMessage=new n.a,this.ranSearch=!1,this.guideSelected=!1,this.displayedColumns=["guide","status"],this.form=this.formBuilder.group({items:this.formBuilder.array([])})}ngOnInit(){this.items=this.form.get("items"),this.items.push(this.formBuilder.group({guideValue:"",order:""}))}removeGuide(t){this.items.controls.length>1&&(this.items=this.form.get("items"),this.items.removeAt(t))}addGuide(t){this.items=this.form.get("items"),this.items.push(this.formBuilder.group({guideValue:""}))}getGuide(t){var e=t,i="This is the full text content of the document. wow so much content in here. amazing.",n="COVID 19 Studies";this.jsonForm=this.formBuilder.group({guide:e,producer:"Amazon",createdate:"2019-03-24",text:i,title:n}),this.rulesMessage.guide=e,this.rulesMessage.producer="Amazon",this.rulesMessage.createDate="2019-03-24",this.rulesMessage.text=i,this.rulesMessage.title=n}runTest(){this.generateResults(),this.ranSearch=!0,this.guideSelected=!1,this.rulesMessage=new n.a}generateResults(){this.items=this.form.get("items");let t=[];for(let n of this.items.controls){var e=n.value.guideValue;if(""!=e){var i=Math.random()>=.5?"matched":"unmatched";t.push({guide:e,status:i,rulesRan:0})}}this.dataSource=[...t]}getRecord(t){this.guideSelected=!0,this.rulesMessage.guide=t.guide,this.rulesMessage.producer="Amazon",this.rulesMessage.createDate="2019-03-24",this.rulesMessage.text="This is the full text content of the document. wow so much content in here. amazing.",this.rulesMessage.title="COVID 19 Studies"}}return t.\u0275fac=function(e){return new(e||t)(o.Qb(r.d))},t.\u0275cmp=o.Kb({type:t,selectors:[["rms-frontend-test-rule"]],decls:12,vars:4,consts:[["fxLayout","row","fxLayoutAlign","space-between start",1,"main"],["fxLayout","column","fxLayoutAlign","space-between start",1,"column"],[1,"form",3,"formGroup"],["formArrayName","items","class","textTerms",4,"ngFor","ngForOf"],["mat-raised-button","","color","accent",3,"click"],["style","width: 100%; overflow-y: auto",4,"ngIf"],[4,"ngIf"],["formArrayName","items",1,"textTerms"],["fxLayout","row",1,"full-width"],["fxLayout","row","fxLayoutAlign","start center"],["mat-icon-button","","type","button",1,"remove-btn",3,"click"],["mat-icon-button","","type","button",3,"click"],["vertical","true",2,"margin-right","10px"],["fxLayout","row","fxLayoutAlign","space-around center",1,"full-width",3,"formGroupName"],[2,"width","100%"],["matInput","","formControlName","guideValue"],[2,"width","100%","overflow-y","auto"],["mat-table","",1,"table",3,"dataSource"],["matColumnDef","guide"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","status"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","","class","row",3,"click",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row","",1,"row",3,"click"]],template:function(t,e){1&t&&(o.Wb(0,"div",0),o.Wb(1,"div",1),o.Wb(2,"h2"),o.Ec(3,"Add GUIDES"),o.Vb(),o.Wb(4,"form",2),o.Cc(5,f,15,1,"div",3),o.Vb(),o.Wb(6,"button",4),o.ec("click",(function(){return e.runTest()})),o.Ec(7,"Test Rule"),o.Vb(),o.Vb(),o.Wb(8,"div",1),o.Cc(9,M,12,4,"div",5),o.Vb(),o.Wb(10,"div",1),o.Cc(11,x,6,3,"div",6),o.Vb(),o.Vb()),2&t&&(o.Eb(4),o.nc("formGroup",e.form),o.Eb(1),o.nc("ngForOf",e.form.get("items").controls),o.Eb(4),o.nc("ngIf",e.ranSearch),o.Eb(2),o.nc("ngIf",e.guideSelected))},directives:[s.c,s.b,r.s,r.n,r.g,c.k,a.a,c.l,r.c,u.a,d.a,l.a,r.h,m.b,m.e,b.b,r.b,r.m,r.f,h.j,h.c,h.e,h.b,h.g,h.i,h.d,h.a,h.f,h.h],pipes:[c.f],styles:[".body[_ngcontent-%COMP%]{padding:15px;overflow:hidden;height:95%}.main[_ngcontent-%COMP%]{height:100%;width:100%}.title[_ngcontent-%COMP%]{height:10%;font-size:large}.form[_ngcontent-%COMP%]{height:75%;width:100%;overflow-y:auto}.column[_ngcontent-%COMP%]{padding:15px;max-height:100%;width:30%}.testButton[_ngcontent-%COMP%]{margin-right:15px}.testResult[_ngcontent-%COMP%]{width:300px;padding:0!important}.matched[_ngcontent-%COMP%]{background-color:#49e66e;padding:5px}.unmatched[_ngcontent-%COMP%]{background-color:#e65949;padding:5px}.headerText[_ngcontent-%COMP%]{margin-top:12px}.full-width[_ngcontent-%COMP%]{width:100%}.remove-btn[_ngcontent-%COMP%]{color:red}.table[_ngcontent-%COMP%]{width:100%}.row[_ngcontent-%COMP%]{cursor:pointer}pre[_ngcontent-%COMP%]{white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word}"]}),t})()}}]);