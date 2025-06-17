<template>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  name: "MessageComponent",
  props: {
    msg: {
      type: String,
      required: true
    }
  }
};
</script>
