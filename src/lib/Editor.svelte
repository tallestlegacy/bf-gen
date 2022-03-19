<script>
  export let text = "";
</script>

<div class="editor">
  <div class="input" contenteditable bind:textContent={text} />
</div>

<style lang="scss">
  @import "../global.scss";

  .input {
    background-color: $white;
    color: black;
    font-size: 20px;

    box-shadow: 0 6px 32px #0003;
    padding: 1rem;
    border-radius: 1rem;

    min-width: 4rem;
    width: fit-content;
  }
</style>
