<script setup lang="ts">
import { ref } from 'vue';

let isOpen = ref(true)
</script>

<template>
  <label>
      <CheckboxRoot
        v-model="checkboxOne"
        class="CheckboxRoot"
      >
        <CheckboxIndicator class="CheckboxIndicator">
          <Icon icon="radix-icons:check" />
        </CheckboxIndicator>
      </CheckboxRoot>
      <span class="Label">Accept terms and conditions.</span>
    </label>
</template>

<style lang="scss" scoped>
/* reset */
button,
fieldset,
input {
  all: unset;
}

.DialogOverlay {
  background-color: black;
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

.DialogContent {
  background-color: white;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
}
.DialogContent:focus {
  outline: none;
}

.DialogTitle {
  margin: 0;
  font-weight: 500;
  color: green;
  font-size: 17px;
}

.DialogDescription {
  margin: 10px 0 20px;
  color: greenyellow;
  font-size: 15px;
  line-height: 1.5;
}

.Button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 15px;
  line-height: 1;
  font-weight: 500;
  height: 35px;
}
.Button.grass {
  background-color: white;
  color: green;
  box-shadow: 0 2px 10px black;
}
.Button.grass:hover {
  background-color: gray;
}
.Button.grass:focus {
  box-shadow: 0 0 0 2px black;
}
.Button.green {
  background-color: green;
  color: green;
}
.Button.green:hover {
  background-color: greenyellow;
}
.Button.green:focus {
  box-shadow: 0 0 0 2px greenyellow;
}

.IconButton {
  font-family: inherit;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: green;
  position: absolute;
  top: 10px;
  right: 10px;
}
.IconButton:hover {
  background-color: green;
}
.IconButton:focus {
  box-shadow: 0 0 0 2px green;
}

.Fieldset {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 15px;
}

.Label {
  font-size: 15px;
  color: greenyellow;
  width: 90px;
  text-align: right;
}

.Input {
  width: 100%;
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 15px;
  line-height: 1;
  color: green;
  box-shadow: 0 0 0 1px green;
  height: 35px;
}
.Input:focus {
  box-shadow: 0 0 0 2px greenyellow;
}

@keyframes overlayShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes contentShow {
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>