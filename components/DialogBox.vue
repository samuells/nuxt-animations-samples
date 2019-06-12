<template>
  <div class="wrapper">
    <div class="box">
      <h2 class="lvl3">Dialog box sample.</h2>
      <button
        class="button"
        @click.prevent="$emit('clicked')">Close me</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
$dialog-t-duration: 400ms;
$dialog-t-delay: 100ms;

.dialog-enter-active,
.dialog-leave-active {
  transition-property: opacity;
  transition-duration: $dialog-t-duration;
  transition-timing-function: ease-in-out;

  .box {
    transition-property: transform;
    transition-duration: $dialog-t-duration - $dialog-t-delay;
    transition-delay: $dialog-t-delay;
    transition-timing-function: ease-in-out;
  }
}

.dialog-enter {
  opacity: 0;

  .box {
    transform: translate3d(-50%, -50%, 0) scale(0);
  }
}

.dialog-leave-to {
  opacity: 0;

  .box {
    transform: translate3d(-50%, -50%, 0) scale(0);
  }
}

.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba($black, 0.8);

  button {
    margin-top: rh(1);
  }
}

.box {
  position: absolute;
  top: 50%;
  left: 50%;
  padding: rem(40 70 30);
  border-radius: 4px;
  background-color: $white;
  transform: translate3d(-50%, -50%, 0);
}
</style>
