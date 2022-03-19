<script>
  import compile from "./compiler";
  export let text = "";

  $: code = compile(text);
</script>

<h1>Output</h1>

{code}
