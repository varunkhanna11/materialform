
riot.tag2('md-checkbox', '<label class="mdl-checkbox mdl-js-checkbox" for="{opts.id}"><input type="checkbox" id="opts.id" class="mdl-checkbox__input" isrequired="{opts.isrequired}"><span class="mdl-checkbox__label">{opts.label}</span><span class="mdl-textfield__error">{opts.errormsgreq}</span>', '', '', function(opts) {
});


riot.tag2('md-form-item', '<yield></yield>', '', '', function(opts) {
});

function MdFormValidator(formSelector,SubmitSelector) {

  this.inValidData="inValidData";
  this.requireDataMissing="requireDataMissing"
  this.validData="validData";
  // Make MdFormValidator instances observable
  riot.observable(this)
}

MdFormValidator.prototype.ValidateField = function(data,isRequire,regexPattern){
  var regex=new RegExp(regexPattern);
  if(isRequire != undefined && isRequire === "true" && !$.trim(data).length)
  {
    return  this.requireDataMissing;
  }
  else if(regex!= undefined && regexPattern!="" && regexPattern != undefined && !regex.test(data))
  {
    return  this.inValidData;
  }
  else
  {
    return  this.validData;
  }
}
MdFormValidator.prototype.OnSubmitHandling = function(data,isRequire,regexPattern){
// Do your submit handling here
console.log("I am submitted");
}
MdFormValidator.prototype.IsFormValid = function(){
    
}



riot.tag2('md-form', '<form id="{opts.id}"><yield></yield></form>', '', '', function(opts) {
});


riot.tag2('md-submit-button', '<button id="{id}" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect pull-right signup-next" onclick="{submit}"> {opts.label} </button>', '', '', function(opts) {
  this.submit = function(e)
  {

    mdFormValidator.trigger('validate',e);

    mdFormValidator.OnSubmitHandling();

  }.bind(this)
});


riot.tag2('md-textbox', '<div class="{mdl-textfield:true,mdl-js-textfield :true,mdl-textfield--floating-label:true,is-dirty:isdirty,is-invalid:invalid}"><input class="mdl-textfield__input" type="{opts.type}" id="{opts.id}" onblur="{blur}" maxlength="{opts.maxlength}"><label class="mdl-textfield__label" for="sample4">{opts.label}.</label><span class="mdl-textfield__error" name="{opts.id}_error">{errorMessage}</span></div>', '', '', function(opts) {
var parent=this;
var defaultErrorMessage="This fielsd is required.";
this.blur = function(e){
validateInput(e.target.value);
}.bind(this)

function validateInput(input)
{

  var validationErrorMessage= (opts.errormsginvalid!=undefined && opts.errormsginvalid != "") ? opts.errormsginvalid:opt.defaultErrorMessage;
  var requiredErrorMessage=(opts.errormsgreq!=undefined && opts.errormsgreq != "")?opts.errormsgreq:validationErrorMessage;

  var validationResult=mdFormValidator.ValidateField(input,opts.isrequired ,opts.regex);
  validationResult=(validationResult== undefined || validationResult=='' || validationResult==null)?mdFormValidator.validData:validationResult;

  if(mdFormValidator.requireDataMissing===validationResult)
  {
    parent.invalid=true;
    parent.isdirty=false;
    parent.errorMessage=requiredErrorMessage;
  }
  else if(mdFormValidator.inValidData===validationResult)
  {
    parent.invalid=true;
    parent.isdirty=true;
    parent.errorMessage=validationErrorMessage;
  }
  else
  {
      parent.invalid=false;
      parent.isdirty=true;
  }
}

mdFormValidator.on('validate', function(data){
validateInput($("#"+parent.dataId).val());
parent.update();
})

this.on('mount', function() {
this.dataId=opts.id;
this.invalid=false;
this.isdirty=false;
this.errorMessage="";

})

});
