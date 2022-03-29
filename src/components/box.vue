<template>
  <div class="box">
    <slot name="header"></slot>

    <slot name="default"></slot>
  </div>
</template>


<style lang="less" scoped>
.box {
  position: absolute;
  right: -80px;
  top: 40px;
  width: 250px;
  background-color: #f5f5f5;
  padding: 0.8rem;
  font-size: 1rem;
  border-radius: 0.5rem;
}
.box::before {
  position: absolute;
  top: -20px;
  right: 106px;
  content: "";
  border: 10px solid transparent;
  border-bottom-color: #f5f5f5;
}
@media (max-width: 600px) {
  .box {
    width: 230px;
    right: -65px;
  }
  .box::before {
    right: 77px;
  }
}
</style>