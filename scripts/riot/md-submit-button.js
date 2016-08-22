
riot.tag2('md-submit-button', '<button id="{id}" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect pull-right signup-next" onclick="{submit}"> {opts.label} </button>', '', '', function(opts) {
  this.submit = function(e)
  {

    mdFormValidator.trigger('validate',e);

    mdFormValidator.OnSubmitHandling();

  }.bind(this)
});
