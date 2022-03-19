<script>
  export let text = "";
</script>

<div class="editor">
  <div class="input" contenteditable bind:textContent={text} />
</div>

<style>
  .input {
    background-color: white;
    box-shadow: 0 6px 32px #0003;
    padding: 1rem;
    border-radius: 1rem;

    min-width: 4rem;
    width: fit-content;
  }
</style>
