
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
