<template>
  <input
    class="input"
    :class="{ error }"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    placeholder: String,
    modelValue: String,
    error: Boolean,
  },
};
</script>

<style scoped lang="scss">
.input {
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 10px 16px 11px 16px;
  border: none;
  width: 100%;
  font-size: 12px;
  &::placeholder {
    font-size: 12px;
    color: #b4b4b4;
    line-height: 15px;
  }
  &.error {
    border: 1px solid #ff8484;
  }
}
</style>
