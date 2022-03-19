<script>
  import compile from "./compiler";
  export let text = "";

  $: code = compile(text);
</script>

<code class="language-brainfuck code">
  {code}
</code>

<style lang="scss">
  @import "../global.scss";
  code {
    outline: 2px solid $white;
    padding: 1rem;
    border-radius: 1rem;
  }
</style>
