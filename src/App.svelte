<script>
  import "./global.scss";
  import Editor from "./lib/Editor.svelte";
  import Output from "./lib/Output.svelte";

  let text = "meilleure erreur";
</script>

<div class="wrapper">
  <h1>BrainFuck Code Generator</h1>
  <main>
    <Editor bind:text />
    <Output {text} />
  </main>
</div>

<style global>
  .wrapper {
    padding: 2rem;
  }

  main {
    display: grid;
    gap: 2rem;
  }
</style>
