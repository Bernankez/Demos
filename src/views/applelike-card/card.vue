<template>
  <div>
    <div ref="card" id="card" :class="{ card: true, active: isExpand }" @click="onExpand()">
      <img src="../../assets/image/photo-1589963348451-142110e1ad3f.jpg" />
      <div class="title">APP OF THE DAY</div>
      <div class="content-wrapper">
        <div class="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris
          </p>
          <p>
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident,
          </p>
          <p>sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris
          </p>
          <p>
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident,
          </p>
          <p>sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris
          </p>
          <p>
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident,
          </p>
          <p>sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris
          </p>
          <p>
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident,
          </p>
          <p>sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  components: {},
  data() {
    return {
      cardItem: null,
      scrollTop: 0,
      isExpand: false,
    };
  },
  created() {},
  mounted() {},
  watch: {
    data(oldVal, newVal) {
      this.$nextTick(() => {
        this.cardItem = this.$refs.card;
        cardItem.addEventListener('scroll', this.getElementScrollTop);
      });
    },
  },
  methods: {
    onExpand() {
      this.isExpand = !this.isExpand;
    },
    getElementScrollTop(e) {
      this.scrollTop = this.cardItem.scrollTop;
      console.log(this.scrollTop);
    },
  },
};
</script>

<style lang="scss" scope>
body {
  --card-width: 94vw;
  --card-height: 58vw;
  --image-height: 45vw;
  --image-height-expanded: 60vw;
}
.card {
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  width: var(--card-width);
  height: var(--card-height);
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 0.2rem 2rem rgba(0, 0, 0, 0.1);
  transition: 0.3s all cubic-bezier(0, 0.8, 1, 1.4);
  font-size: 15px;
  font-family: Helvetica;
}

.card img {
  display: block;
  width: 100%;
  height: var(--image-height);
  object-fit: cover;

  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}

.card .title {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  flex-grow: 0;
  height: calc(var(--card-height) - var(--image-height));
  padding: 0 1.2rem;
  box-sizing: border-box;
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: -0.5px;
  //   background-color: #fff;
}

.card .content-wrapper {
  transform: translateY(-1px);
  height: 0;
  overflow: hidden;
}

.card .content-wrapper .content {
  padding: 0 1.2rem;
  background-color: #fff;
  overflow: auto;
}

.card p {
  font-size: 1.1rem;
  line-height: 1.5rem;
}

.card.active {
  transform: translateY(-1rem) scale(calc(100 / 94));
  transform-origin: 50% 0;
  border-radius: 0;
}

.card.active .title {
  background-color: #fff;
}

.card.active img {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  height: var(--image-height-expanded);
}

.card.active .content-wrapper {
  height: 100vh;
  overflow: visible;
}
</style>
