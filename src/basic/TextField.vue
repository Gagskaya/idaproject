<template>
  <textarea
    class="textarea"
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
  },
};
</script>

<style lang="scss">
.textarea {
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: none;
  padding: 10px 16px 11px 16px;
  width: 100%;
  resize: none;
  height: 108px;
  font-size: 12px;
  &::placeholder {
    font-size: 12px;
    color: #b4b4b4;
    line-height: 15px;
  }
}
</style>
