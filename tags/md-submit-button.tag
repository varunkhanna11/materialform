<!-- Material button mainly for submit functionality -->
<md-submit-button >
  <button id="{id}"  class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect pull-right signup-next"onclick="{submit}">
            {opts.label}
</button>

<script>
  submit(e)
  {
    // On submit it calls registered observers so tht each element can validate itself agagin
    mdFormValidator.trigger('validate',e);

    mdFormValidator.OnSubmitHandling();

  }
</script>
</md-submit-button>
